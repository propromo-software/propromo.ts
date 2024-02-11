import { DEV_MODE } from '$env/static/private';

export const REST_API_BASE_URL =
	DEV_MODE === 'true' ? 'http://localhost:3000' : 'https://propromo-rest.duckdns.org';
export const REST_API_MILESTONE_ENDPOINT = function (
	organization_name: string,
	project_id: string,
	milestone_id: string,
	query: {
		depth?: string | null;
		issue_states?: string | null;
	}
) {
	return `github/orgs/${organization_name}/projects/${project_id}/repositories/milestones/${milestone_id}?depth=${query.depth}&issue_states=${query.issue_states}`;
};