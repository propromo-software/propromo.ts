import { DEV_MODE } from '$env/static/private';

export const REST_API_BASE_URL =
	DEV_MODE === 'true' ? 'http://localhost:3000' : 'https://rest-microservice.onrender.com'; // https://propromo-rest.duckdns.org
const REST_API_VERSION = 'v1';

export const REST_API_AUTHENTICATION_TOKEN_ENDPOINT = `${REST_API_BASE_URL}/${REST_API_VERSION}/github/auth/token`;

export const REST_API_PROJECT_INFO_ENDPOINT = function (
	organization_name: string,
	project_id: string,
	login_type: string
) {
	return `${REST_API_BASE_URL}/${REST_API_VERSION}/github/${login_type}/${organization_name}/projects/${project_id}/info`;
};

export const REST_API_PROJECT_MILESTONES_ENDPOINT = function (
	organization_name: string,
	project_id: string,
	login_type: string,
	query: {
		issue_states?: string | null;
	}
) {
	return `${REST_API_BASE_URL}/${REST_API_VERSION}/github/${login_type}/${organization_name}/projects/${project_id}/repositories/milestones/issues?rootPageSize=10&milestonesPageSize=10&issuesPageSize=100&issues_states=${query.issue_states}`;
};
