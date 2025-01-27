export default {
	/* ------------ *
	 *	 Commands   *
	 * ------------ */
	shareActiveFile: "Partager le fichier actif",
	publisherDeleteClean: "Suppression des fichiers non partagés et/ou supprimé du dépôt ",
	uploadAllNotes: "Publier toutes les notes partagées",
	uploadNewNotes: "Publier les nouvelles notes",
	uploadAllNewEditedNote: "Publier toutes les notes nouvelles et modifiées depuis le dernier envoi.",
	uploadAllEditedNote: "Publier toutes les notes éditées depuis le dernier envoie",
	shareViewFiles:(viewFile:string): string => `Partager "${viewFile}" avec Github Publisher`,
	/* ------ Delete string -----	*/
	errorDeleteDefaultFolder: "Vous avez besoin d'un dossier par défaut dans les paramètres pour utiliser cette commande.",
	errorDeleteRootFolder: 'Vous devez configurer un dossier racine dans les paramètres pour utiliser cette commande.',
	successDeleting:(nb:string): string => `Suppression réussie de ${nb} fichiers.`,
	failedDeleting:(nb:string): string => `Échec de la suppression de ${nb} files.`,
	noFileDeleted: "Aucun fichier n'a été supprimé",
	/* ------------ *
	 *	 Settings   *
	 * ------------ */

	githubConfiguration: "Configuration GitHub",
	repoName: "Nom du dépôt",
	repoNameDesc: "Le nom du dépôt dans lequel vous enregistrez votre blog",
	mkdocsTemplate: "mkdocs-template",
	githubUsername: "Nom d'utilisateur GitHub",
	githubUsernameDesc: "Votre nom d'utilisateur GitHub",
	ghTokenDesc: "Un token GitHub avec autorisation de dépôt. Vous pouvez le générer ",
	here: "ici.",
	githubToken: "Token GitHub",

	// ---
	// # Upload configuration # //

	uploadConfig: "Configuration d'upload", //désolée du franglais ici mais je trouve pas de traduction propre
	pathSetting: "Paramètres du chemin d'accès",
	folderBehavior: "Comportement du dossier",
	folderBehaviorDesc: "Choisissez entre un dossier fixe, la valeur d'une clé de métadonnée ou votre chemin relatif dans Obsidian.",
	fixedFolder: "Dossier fixé",
	yaml: "Clé de métadonnée",
	obsidianPath: "Chemin Obsidian",
	defaultFolder: "Dossier par défaut",
	defaultFolderDesc: "Définir le dossier de réception par défaut",
	defaultFolderPlaceholder: "docs",
	pathRemoving: "Suppression de chemin",
	pathRemovingDesc: "Permettre de publier uniquement le sous-dossier en supprimant le chemin avant celui-ci :",
	pathRemovingPlaceholder: "Blog",
	frontmatterKey: "Clé de métadonnées",
	frontmatterKeyDesc: "Définir la clé où obtenir la valeur du dossier",
	frontmatterKeyPlaceholder: "catégorie",
	rootFolder: "Dossier racine",
	rootFolderDesc: "Ajoutez ce chemin au dossier défini par la clé de métadonnées.",

	// ---
	// # Text conversions # //
	textConversion: "Conversion du texte",
	textHeader: "Texte",
	linkHeader: "Liens",
	folderNote: "Folder Note",
	folderNoteDesc: "Renommer les fichiers en \"index.md\" s'il porte le même nom que leur dossier/catégorie parent (fonctionne aussi si la note est à l'extérieur du dossier).",
	internalsLinks: "Liens internes",
	internalsLinksDesc: "Convertir le lien interne dans le fichier partagé pour qu'il corresponde aux paramètres du dossier",
	wikilinks: "Wikilinks",
	wikilinksDesc: "Convertir les liens Wikilinks en liens markdown, sans en modifier le contenu",
	hardBreakTitle: "Saut de ligne strict",
	hardBreakDesc: "Ajoutez un retour à la ligne Markdown (double espace) après chaque ligne.",
	headerDataview: "Dataview",
	headerDataviewDesc: "Convertir dataview en markdown.",
	useFrontmatterTitle: "Utiliser la clé frontmatter \"title\"",
	useFrontmatterTitleDesc: "Utilisez le champ \"title\" du frontmatter (à la place du nom du fichier) pour générer le chemin du fichier.",
	// ---
	// # Embed # //

	embed: "Transclusion",
	transferImage: "Transférer les images",
	transferImageDesc: "Envoyer les images intégrées dans un fichier dans le dépôt.",
	transferEmbeddedNotes: "Transférer les notes transclues",
	transferEmbeddedNotesDesc: "Envoyez des notes transcluent dans un fichier partagé dans le dépôt. Seuls les fichiers partagés seront envoyés !",
	defaultImageFolder: "Dossier d'images par défaut",
	defaultImageFolderDesc: "Pour utiliser un dossier différent de celui par défaut pour les images",

	// ---
	// # Github Workflow # //

	githubActionName: "Nom de l'action GitHub",
	githubActionNameDesc: "Si vous souhaitez activer une action github lorsque le plugin pousse le fichier, indiquez le nom du fichier (dans votre dossier \".github/worfklows\").",
	autoCleanUp: "Auto-nettoyage",
	autoCleanUpDesc: "Si le plugin doit retirer de votre dépôt les fichiers supprimés (arrêt de partage ou supprimé)",
	excludedFiles: "Fichier exclus",
	excludedFilesDesc: "Si vous voulez exclure certains dossiers du nettoyage automatique, définissez leur chemin.",

	// ---
	// # Plugin settings # //
	pluginSettings: "Paramètres du plugin",
	shareKey: "Clé de partage",
	shareKeyDesc: "La clé de métadonnées pour publier votre fichier sur le dépôt.",
	excludedFolder: "Dossier exclus",
	excludedFolderDesc: "Les fichiers dans ses dossiers ne seront jamais publier, quelle que soit l'état de la clé de partage. Séparez les noms de dossier par une virgule.",
	fileMenu: "Menu \"Fichier\"",
	fileMenuDesc: "Ajouter une commande de partage dans le menu \"Fichier\"",
	editorMenu: "Menu \"Edition\"",
	editorMenuDesc: "Ajouter une commande de partage dans le menu du clic droit",
	copylinkSetting: "Copie de lien",
	copylinkDesc: "Envoyer un lien vers votre note dans votre presse-papier.",
	baselink: "Lien du blog",
	baselinkDesc: "Créer le lien du presse-papiers avec cette base. Par défaut : https://username.github.io/repo/",
	linkpathremover: "Retirer une partie du lien",
	linkpathremoverDesc: "Supprimer cette partie des liens créés. Séparer par une virgule si plusieurs valeurs doivent être supprimées.",
	logNoticeHeader: 'Notifier toutes les erreurs',
	logNoticeDesc: 'Sur mobile, il peut être difficile de debug le module. Activer cette option pour notifier toutes les erreurs via une notification Obsidian.',

	/* ------------ *
	 *	 Notice   *
	 * ------------ */

	unablePublishNote: (fileInfo: string): string => `Impossible de publier la note ${fileInfo}, ignorée.`,
	errorPublish: (repoInfo: string): string => `Erreur lors de la publication sur ${repoInfo}.`,
	unablePublishMultiNotes: "Impossible de publier plusieurs notes, quelque chose s'est mal passé.",
	startingClean: (repoInfo: string): string => `Début du nettoyage ${repoInfo}`,
	scanningRepo: "Scan du dépôt, cela peut prendre un moment...",
	foundNoteToSend: (noteLength: string)=> `Trouvé ${noteLength} nouvelles notes à envoyer`,
	noNewNote: "Aucune nouvelle note à partager.",
	successfullPublish:(noticeValue: string[])=>`Publication réussie de ${noticeValue[0]} vers ${noticeValue[1]}.`,
	waitingWorkflow: "Maintenant, attente de la complétion du workflow...",
	sendMessage:(noticeValue: string[])=>`Envoi de ${noticeValue[0]} à ${noticeValue[1]}${noticeValue[2]}`
}
