import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();

	if (session) {
		return {
			username: session.user.username
		};
	} else {
		return null;
	}
};
