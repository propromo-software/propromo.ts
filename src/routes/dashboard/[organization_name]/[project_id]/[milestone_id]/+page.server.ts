import { redirect } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import { REST_API_BASE_URL, REST_API_MILESTONE_ENDPOINT } from '$main/lib/rest_endpoints';
import type { MinimalMilestone } from '$main/lib/types';

export const load: PageServerLoad = async ({ locals, fetch, params, url }) => {
	const session = await locals.auth.validate();
	if (!session) redirect(302, '/login');

	const depth = url?.searchParams?.get('depth');
	const issue_states = url?.searchParams?.get('issue_states');

	const endpoint = REST_API_MILESTONE_ENDPOINT(
		params.organization_name,
		params.project_id,
		params.milestone_id,
		{ depth, issue_states }
	);
	const response = await fetch(`${REST_API_BASE_URL}/${endpoint}`);

	if (response.status !== 200) {
		return {
			userId: session.user.userId,
			username: session.user.username
		};
	}

	const response_object = await response.json();

	const total_repository_count: number =
		response_object?.data?.organization?.projectV2?.repositories?.totalCount ?? [];
	const milestones: MinimalMilestone[] = (
		response_object?.data?.organization?.projectV2?.repositories?.nodes ?? []
	)
		.map(({ milestone }: { milestone: MinimalMilestone }) => milestone)
		.filter((milestone: MinimalMilestone | null) => milestone !== null) as MinimalMilestone[];

	return {
		userId: session.user.userId,
		username: session.user.username,
		total_repository_count,
		milestones: milestones
	};
};
