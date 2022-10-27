export type Post = {
	slug: string;
	title: string;
	date: string;
	updated?: string; // date
	content: string;
	tags: string[];
};
