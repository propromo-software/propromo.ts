import type { ProjectV2, Repository, Milestone, Issue, User, Label, Scalars } from '@octokit/graphql-schema';

type RepositoryTypesToIgnore =
	| '__typename'
	| 'milestones'; // TODO: add all types to ignore
export interface MinimalRepository extends Omit<Repository, RepositoryTypesToIgnore> {
	milestones: {
		totalCount: number;
		nodes: MinimalMilestone[];
	}
};

type ProjectInfoTypesToIgnore =
	| '__typename'
	| 'closed'
	| 'creator'
	| 'databaseId'
	| 'field'
	| 'fields'
	| 'id'
	| 'items'
	| 'number'
	| 'owner'
	| 'repositories'
	| 'resourcePath'
	| 'teams'
	| 'template'
	| 'view'
	| 'viewerCanClose'
	| 'viewerCanReopen'
	| 'viewerCanUpdate'
	| 'views'
	| 'workflow'
	| 'workflows';
export interface ProjectInfo extends Omit<ProjectV2, ProjectInfoTypesToIgnore> { };

type MilestoneTypesToIgnore =
	| '__typename'
	| 'closed'
	| 'creator'
	| 'id'
	| 'pullRequests'
	| 'resourcePath'
	| 'repository'
	| 'issues'
	| 'viewerCanClose'
	| 'viewerCanReopen';
export interface MinimalMilestone extends Omit<Milestone, MilestoneTypesToIgnore> {
	open_issues: {
		totalCount: number;
		nodes: MinimalIssue[];
	},
	closed_issues: {
		totalCount: number;
		nodes: MinimalIssue[];
	}
}

type IssueTypesToIgnore =
	| '__typename'
	| 'activeLockReason'
	| 'author'
	| 'authorAssociation'
	| 'bodyHTML'
	| 'bodyResourcePath'
	| 'bodyText'
	| 'closed'
	| 'comments'
	| 'createdViaEmail'
	| 'databaseId'
	| 'editor'
	| 'fullDatabaseId'
	| 'hovercard'
	| 'id'
	| 'includesCreatedEdit'
	| 'isPinned'
	| 'isReadByViewer'
	| 'linkedBranches'
	| 'locked'
	| 'milestone'
	| 'number'
	| 'participants'
	| 'projectCards'
	| 'projectItems'
	| 'projectV2'
	| 'projectsV2'
	| 'publishedAt'
	| 'reactionGroups'
	| 'reactions'
	| 'repository'
	| 'resourcePath'
	| 'state'
	| 'stateReason'
	| 'timeline'
	| 'timelineItems'
	| 'titleHTML'
	| 'trackedInIssues'
	| 'trackedIssues'
	| 'trackedIssuesCount'
	| 'userContentEdits'
	| 'viewerCanClose'
	| 'viewerCanDelete'
	| 'viewerCanReact'
	| 'viewerCanReopen'
	| 'viewerCanSubscribe'
	| 'viewerCanUpdate'
	| 'viewerCannotUpdateReasons'
	| 'viewerDidAuthor'
	| 'viewerSubscription'
	| 'viewerThreadSubscriptionFormAction'
	| 'viewerThreadSubscriptionStatus'
	| 'assignees'
	| 'labels';
export interface MinimalIssue extends Omit<Issue, IssueTypesToIgnore> {
	assignees: {
		nodes: MinimalUser[];
	};
	labels: {
		nodes: MinimalLabel[];
	};
}

type UserTypesToIgnore =
	| '__typename'
	| 'anyPinnableItems'
	| 'avatarUrl'
	| 'bio'
	| 'bioHTML'
	| 'canReceiveOrganizationEmailsWhenNotificationsRestricted'
	| 'commitComments'
	| 'company'
	| 'companyHTML'
	| 'contributionsCollection'
	| 'createdAt'
	| 'databaseId'
	| 'email'
	| 'enterprises'
	| 'estimatedNextSponsorsPayoutInCents'
	| 'followers'
	| 'following'
	| 'gist'
	| 'gistComments'
	| 'gists'
	| 'hasSponsorsListing'
	| 'hovercard'
	| 'id'
	| 'interactionAbility'
	| 'isBountyHunter'
	| 'isCampusExpert'
	| 'isDeveloperProgramMember'
	| 'isEmployee'
	| 'isFollowingViewer'
	| 'isGitHubStar'
	| 'isHireable'
	| 'isSiteAdmin'
	| 'isSponsoredBy'
	| 'isSponsoringViewer'
	| 'isViewer'
	| 'issueComments'
	| 'issues'
	| 'itemShowcase'
	| 'lifetimeReceivedSponsorshipValues'
	| 'lists'
	| 'location'
	| 'login'
	| 'monthlyEstimatedSponsorsIncomeInCents'
	| 'name'
	| 'organization'
	| 'organizationVerifiedDomainEmails'
	| 'organizations'
	| 'packages'
	| 'pinnableItems'
	| 'pinnedItems'
	| 'pinnedItemsRemaining'
	| 'project'
	| 'projectV2'
	| 'projects'
	| 'projectsResourcePath'
	| 'projectsUrl'
	| 'projectsV2'
	| 'pronouns'
	| 'publicKeys'
	| 'pullRequests'
	| 'recentProjects'
	| 'repositories'
	| 'repositoriesContributedTo'
	| 'repository'
	| 'repositoryDiscussionComments'
	| 'repositoryDiscussions'
	| 'resourcePath'
	| 'savedReplies'
	| 'socialAccounts'
	| 'sponsoring'
	| 'sponsors'
	| 'sponsorsActivities'
	| 'sponsorsListing'
	| 'sponsorshipForViewerAsSponsor'
	| 'sponsorshipForViewerAsSponsorable'
	| 'sponsorshipNewsletters'
	| 'sponsorshipsAsMaintainer'
	| 'sponsorshipsAsSponsor'
	| 'starredRepositories'
	| 'status'
	| 'suggestedListNames'
	| 'topRepositories'
	| 'totalSponsorshipAmountAsSponsorInCents'
	| 'twitterUsername'
	| 'updatedAt'
	| 'url'
	| 'viewerCanChangePinnedItems'
	| 'viewerCanCreateProjects'
	| 'viewerCanFollow'
	| 'viewerCanSponsor'
	| 'viewerIsFollowing'
	| 'viewerIsSponsoring'
	| 'watching'
	| 'websiteUrl';
/* eslint-disable @typescript-eslint/no-empty-interface */
export interface MinimalUser extends Omit<User, UserTypesToIgnore> { }

type LabelTypesToIgnore =
	| '__typename'
	| 'id'
	| 'issues'
	| 'pullRequests'
	| 'isDefault'
	| 'repository'
	| 'resourcePath';
/* eslint-disable @typescript-eslint/no-empty-interface */
export interface MinimalLabel extends Omit<Label, LabelTypesToIgnore> { }
