/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.vivotaedu.com',
    generateRobotsTxt: true, // creates robots.txt automatically
    changefreq: 'weekly',
    priority: 0.8,
    additionalPaths: async (config) => [
        await config.transform(config, '/'),
        await config.transform(config, '/biology'),
        await config.transform(config, '/chemistry'),
        await config.transform(config, '/physics'),
        await config.transform(config, '/math'),
        await config.transform(config, '/general-paper'),
        await config.transform(config, '/class-schedule'),
        await config.transform(config, '/enrolment'),
        await config.transform(config, '/plans-and-pricing'),
        await config.transform(config, '/vivota-oath'),
        await config.transform(config, '/vivota-system'),
    ],
};
