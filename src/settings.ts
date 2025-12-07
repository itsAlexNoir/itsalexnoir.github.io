export const profile = {
	fullName: 'Alejandro de la Calle, PhD',
	title: 'Computational Scientist | AI Engineer',
	institute: 'HP SCDS',
	author_name: 'A. de la Calle', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Artificial Intelligence', description: 'Deep Learning, Machine Learning, Neural Networks, LLM, GenAI', field: 'ml' },
		{ title: 'Computational Science', description: 'Scientific Computing, High Performance Computing (HPC)', field: 'cs' },
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
	orcid: 'https://orcid.org/my-orcid?orcid=0000-0001-9414-7895',
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
	default_title: 'Alex de la Calle website',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}
