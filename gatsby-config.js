module.exports = {
	siteMetadata: {
		title: `Title from siteMetadata`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Dosis`,
						subsets: [`latin`],
						variants: [`400`, `700`],
					},
					{
						family: `Open Sans`,
						subsets: [`latin`],
						variants: [`400`],
					},
				],
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-postcss`,
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				// printRejected: true, // Print removed selectors and processed file names
				develop: true, // Enable while using `gatsby develop`
				// tailwind: true, // Enable tailwindcss support
				// whitelist: ['whitelist'], // Don't remove this selector
				// ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
				// purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
				// debug: true
			},
		},
		`gatsby-plugin-netlify-cms`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: 'blog',
			},
		},
		`gatsby-transformer-remark`,
		// {
		// 	resolve: `gatsby-plugin-favicon`,
		// 	options: {
		// 		logo: './static/favicon.png',

		// 		// WebApp Manifest Configuration
		// 		appName: null, // Inferred with your package.json
		// 		appDescription: null,
		// 		developerName: null,
		// 		developerURL: null,
		// 		dir: 'auto',
		// 		lang: 'fr-FR',
		// 		background: '#fff',
		// 		theme_color: '#fff',
		// 		display: 'standalone',
		// 		orientation: 'any',
		// 		start_url: '/?homescreen=1',
		// 		version: '1.0',

		// 		icons: {
		// 			android: true,
		// 			appleIcon: true,
		// 			appleStartup: true,
		// 			coast: false,
		// 			favicons: true,
		// 			firefox: true,
		// 			yandex: false,
		// 			windows: false,
		// 		},
		// 	},
		// },
	],
};
