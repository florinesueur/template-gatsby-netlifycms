module.exports = {
	siteMetadata: {
		title: 'Title from siteMetadata',
		description: 'Description du site',
		siteUrl: `https://www.example.com`,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/img`,
				name: 'uploads',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/img`,
				name: 'images',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-relative-images',
						options: {
							name: 'uploads',
						},
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048,
						},
					},
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {
							destinationDir: 'static',
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-sitemap',
			options: {
				output: '/sitemap.xml',
				exclude: ['/dev-404-page', '/404', '/offline-plugin-app-shell-fallback'],
				query: `
					{
						site {
							siteMetadata {
								siteUrl
							}
						}
	
						allSitePage {
							edges {
								node {
									path
								}
							}
						}
				}`,
				serialize: ({ site, allSitePage }) =>
					allSitePage.edges.map(edge => {
						return {
							url: site.siteMetadata.siteUrl + edge.node.path,
							changefreq: `daily`,
							priority: 0.7,
						};
					}),
			},
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
		{
			resolve: 'gatsby-plugin-styled-jsx',
			options: {
				optimizeForSpeed: true,
				sourceMaps: false,
				vendorPrefixes: true,
			},
		},
		{
			resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
			options: {
				develop: true, // Activates purging in npm run develop
				// purgeOnly: ['/all.sass'],  applies purging only on the bulma css file
			},
		}, // must be after other CSS plugins
		'gatsby-plugin-netlify-cache',
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
				allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
				mergeSecurityHeaders: false, // boolean to turn off the default security headers
				mergeLinkHeaders: false, // boolean to turn off the default gatsby js headers
				mergeCachingHeaders: false, // boolean to turn off the default caching headers
				generateMatchPathRewrites: false, // boolean to turn off automatic creation of redirect rules for client only paths
			},
		},
	],
};
