const postcssNormalize = require('postcss-normalize');
const postcssImport = require('postcss-import');

const postcssPresetEnv = require('postcss-preset-env');
const cssMqpacker = require('css-mqpacker');
const cssnano = require('cssnano');

const postcssNested = require('postcss-nested');
const postcssFontpath = require('postcss-fontpath');

module.exports = () => ({
	plugins: [
		postcssImport,
		postcssNormalize,
		postcssNested,
		postcssFontpath({
			formats: [
				{ type: 'embedded-opentype', ext: 'eot' },
				{ type: 'woff2', ext: 'woff2' },
				{ type: 'woff', ext: 'woff' },
				{ type: 'truetype', ext: 'ttf' },
			],
		}),
		// postcssExtendRule,
		// postcssAdvancedVariables,
		// postcssPropertyLookup,
		postcssPresetEnv({
			stage: 3,
			features: {
				'custom-media-queries': true,
				'color-mod-function': { unresolved: 'warn' },
				// a{all: initial} = initialise tout le css stage 3
				// break properties = mise en page comme sur indesign stage 3
				'overflow-wrap-property': true,
				'place-properties': true,
			},
			autoprefixer: { grid: true },
			importFrom: './src/assets/css/variables.css',
		}),
		cssMqpacker,
		cssnano({
			preset: 'advanced',
		}),
	],
});
