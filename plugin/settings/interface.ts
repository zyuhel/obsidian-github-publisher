import {TFile} from "obsidian";

export interface MkdocsPublicationSettings {
	githubRepo: string;
	githubName: string;
	GhToken: string;
	shareKey: string;
	ExcludedFolder: string;
	fileMenu: boolean;
	editorMenu: boolean;
	downloadedFolder: string;
	folderDefaultName: string;
	yamlFolderKey: string;
	rootFolder: string;
	workflowName: string;
	embedImage: boolean;
	defaultImageFolder: string;
	autoCleanUp: boolean;
	autoCleanUpExcluded: string;
	folderNote: boolean;
	convertWikiLinks: boolean;
	convertForGithub: boolean;
	subFolder: string;
	embedNotes: boolean;
	copyLink: boolean;
	mainLink: string;
	linkRemover: string;
	hardBreak: boolean;
	logNotice: boolean;
	convertDataview: boolean;
	useFrontmatterTitle: boolean;
}

export enum folderSettings {
	yaml = "yaml",
	obsidian = "obsidian",
	fixed = "fixed",
}

export const DEFAULT_SETTINGS: MkdocsPublicationSettings = {
	githubRepo: '',
	githubName: '',
	GhToken: '',
	shareKey: 'share',
	ExcludedFolder: '',
	fileMenu: false,
	editorMenu: false,
	downloadedFolder: folderSettings.fixed,
	//fixedFolder
	//yamlFrontmatter
	//obsidianPath
	folderDefaultName: '',
	yamlFolderKey: '',
	rootFolder: '',
	workflowName: '',
	embedImage: true,
	defaultImageFolder: '',
	autoCleanUp: false,
	autoCleanUpExcluded: '',
	folderNote: false,
	convertWikiLinks: false,
	convertForGithub: false,
	subFolder: '',
	embedNotes: false,
	copyLink: false,
	mainLink:'',
	linkRemover: '',
	hardBreak: false,
	logNotice: false,
	convertDataview: true,
	useFrontmatterTitle: false,
}

export interface LinkedNotes {
	linked: TFile,
	linkFrom: string,
	altText: string,
}

export interface ConvertedLink {
	converted: string,
	real: string
}

export interface GithubRepo {
	file: string,
	sha: string,
}
