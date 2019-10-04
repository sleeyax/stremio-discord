const addonInterface = require('./addon');
const {getRouter} = require("stremio-addon-sdk");

module.exports = getRouter(addonInterface);
