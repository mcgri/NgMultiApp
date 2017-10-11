/// <binding  ProjectOpened='Run - Development, Hot' />

var environment = (process.env.NODE_ENV || "development").trim();
if (environment === "development") {
     console.log("RUNNING DEV");
    module.exports = require('./webpack.dev.js');
} else {
    console.log("RUNNING PRODUCTION");
    module.exports = require('./webpack.prod.js');
}