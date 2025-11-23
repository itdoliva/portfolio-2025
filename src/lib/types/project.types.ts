export type Client = {
	name: string;
	url?: string;
};

export type Detail = {
	name: string;
	value: string[];
};

export type ProjectData = {
	title: string;
	roles: string[];
	slug: string;
	date: Date;
	url?: string;
	client?: Client;
	details?: Detail[];
	tags?: string[];
};

export type ProjectFileMetadata = {
	title: string;
	url: string;
	roles: string[];
	client: Client;
	tags: string[];
	details: Detail[];
	date: Date;
	hide?: boolean;
};
