const {description} = require('./package');

module.exports = {
    id: 'com.sleeyax.stremio-discord',
    name: 'Discord Rich Presence',
    description,
    catalogs: [],
    version: '0.0.1',
    logo: 'https://i.imgur.com/HGIkQgD.png',
    resources: ['subtitles', 'meta'],
    types: ['movie', 'series'],
};
