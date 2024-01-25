// export type Journals = {
// 	id: string;
// 	name: string;
// 	description: string;
// 	reward: string;
// 	interval: string;
// 	startDate: string;
// };

export type Researchers = {
	id: number;
	firstname: string;
	lastname: string;
	isPremium: boolean;
	education: string;
	profileImage: string;
	email: string;
	password: string;
	background: string;
	gender: string;
	jabatan_akademik: string;
	location: string;
	createdAt: string;
	updatedAt: string;
};

export type ResearcherJournal = {
	id: number;
	firstname: string;
	lastname: string;
	education: string;
	profileImage: string;
	email: string;
	phone_number: string;
	background: string;
	gender: string;
	jabatan_akademik: string;
	location: string;
	investasi: string;
	createdAt: string;
	updatedAt: string;
	portofolio: Journals[]; // Corrected field name
};

export type JournalWithResearcher = {
	id: number;
	abstract: string;
	keywords: string;
	title: string;
	createdAt: string;
	updatedAt: string;
	researcherId: number;
	portofolio: ResearcherJournal[];
};

export type JournalWithResearcherDetails = {
	id: number;
	abstract: string;
	title: string;
	journal_file: string;
	createdAt: string;
	updatedAt: string;
	researcherId: number;
	portofolio: ResearcherJournal[];
};

export type Journals = {
	id: number;
	abstract: string;
	title: string;
	createdAt: string;
	updatedAt: string;
	researcherId: number;
};

export type Project = {
	id: number;
	project_name: string;
	description_project: string;
	project_image: string;
	project_status: boolean;
	starting_date: string;
	expected_finish_date: string;
	project_budget: number;
	tags: string;
	createdAt: string;
	updatedAt: string;
	researcherId: number;
	researcher: ResearcherJournal;
};

