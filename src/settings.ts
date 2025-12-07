export const profile = {
	fullName: 'Alejandro de la Calle, PhD',
	title: 'Computational Scientist | AI Engineer',
	institute: 'HP SCDS',
	author_name: 'A. de la Calle', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Machine Learning', description: 'Deep Learning, GenAI, LLM, Transformers', field: 'ml' },
		{ title: 'Computational Science', description: 'HPC, Scientific Computing', field: 'cs' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'alejandrodelacallenegro@gmail.com',
	linkedin: 'https://linkedin.com/in/alejandro-de-la-calle-negro',
	x: '',
	github: 'https://github.com/itsAlexNoir',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://itsalexnoir.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Astro Academia',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}
