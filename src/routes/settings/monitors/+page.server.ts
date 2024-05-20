import { fail, redirect } from '@sveltejs/kit';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) redirect(302, '/login');

	return {
		userId: session.user.userId,
		username: session.user.username
	};
};

export const actions: Actions = {
	create: async ({ locals, request }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);

		const formData = await request.formData();
		const projectName = formData.get('project_name');
		const projectUrl = formData.get('project_url');

		return {
			projectName,
			projectUrl
		};
	},
	join: async ({ locals, request }) => {
		const session = await locals.auth.validate();
		if (!session) return fail(401);

		const formData = await request.formData();
		const projectId = formData.get('project_id');

		return {
			projectId
		};
	}
};
