import { redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import { REST_API_PROJECT_MILESTONES_ENDPOINT, REST_API_AUTHENTICATION_TOKEN_ENDPOINT, REST_API_PROJECT_INFO_ENDPOINT } from '$main/lib/rest_endpoints';
import { GITHUB_PAT } from '$env/static/private';
import type { MinimalRepository, ProjectInfo } from '$main/lib/types';

export const load: PageServerLoad = async ({ locals, fetch, params, url }) => {
	const session = await locals.auth.validate();
	if (!session) redirect(302, '/login');

	// get query params
	const login_type = url.searchParams.get('type') ?? "orgs";

	// authenticate
	const authentication_response = await fetch(REST_API_AUTHENTICATION_TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${GITHUB_PAT}` // only for testing purposes, user has to input that too
		}
	});

	if (authentication_response.status !== 200) {
		return {
			userId: session.user.userId,
			username: session.user.username
		};
	}

	const token = await authentication_response.text();

	// get project info
	const project_info_endpoint = REST_API_PROJECT_INFO_ENDPOINT(
		params.login_name,
		params.project_id,
		login_type
	);
	const project_info_response = await fetch(project_info_endpoint, {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});

	// logging
	console.log(project_info_endpoint, {
		organization_name: params.login_name,
		project_id: params.project_id,
		login_type
	});

	if (project_info_response.status !== 200) {
		return {
			userId: session.user.userId,
			username: session.user.username
		};
	}

	const project_info_type_name = login_type === "orgs" ? "organization" : "user";

	// parse response
	const project_info_response_object = await project_info_response.json();
	const {
		data: {
			[project_info_type_name]: {
				projectV2: project_info_object
			}
		}
	} = project_info_response_object;

	// get repositories
	const repositories_endpoint = REST_API_PROJECT_MILESTONES_ENDPOINT(
		params.login_name,
		params.project_id,
		login_type,
		{
			issue_states: "open,closed"
		}
	);
	const repositories_response = await fetch(repositories_endpoint, {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});

	// logging
	console.log(repositories_endpoint, {
		organization_name: params.login_name,
		project_id: params.project_id,
		login_type
	});

	if (repositories_response.status !== 200) {
		return {
			userId: session.user.userId,
			username: session.user.username
		};
	}

	// parse response
	const repositories_response_object = await repositories_response.json();
	const {
		data: {
			[project_info_type_name]: {
				projectV2: {
					repositories: {
						nodes: repositories_list
					}
				}
			}
		}
	} = repositories_response_object;

	console.log(repositories_list);

	return {
		userId: session.user.userId,
		username: session.user.username,
		project: project_info_object as ProjectInfo,
		login_name: params.login_name,
		project_id: params.project_id,
		repositories: repositories_list as MinimalRepository[] ?? []
	};
};
