const cacheUtil = require('../utils/cache');

const temperaturesService = {
    async getTemperatures(city) {
        let temperatures = JSON.parse(await cacheUtil());
        if (typeof city !== "undefined") {
            return temperatures[city] ? temperatures[city] : {};
        }
        else {
            return temperatures;
        }
    }
};

module.exports = temperaturesService;