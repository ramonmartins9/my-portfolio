const withPlugins = require("next-compose-plugins");
const withOffline = require("next-offline");
const withSourceMaps = require("@zeit/next-source-maps");

module.exports = withPlugins(
	[
		[withOffline, {
			runtimeCaching: [
				{
					urlPattern: /^https?.*/,
					handler: "NetworkFirst",
					options: {
						cacheName: "html-cache",
					},
				},
				{
					urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
					handler: "CacheFirst",
					options: {
						cacheName: "image-cache",
						cacheableResponse: {
							statuses: [0, 200],
						},
					},
				},
			],
		}],
		[withSourceMaps, {}],
	],
	{
		i18n: {
			locales: ['pt-BR', 'en-US'],
			defaultLocale: 'pt-BR',
		}
	},
);
