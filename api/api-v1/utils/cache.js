const redis = require('redis');
const rejson = require('redis-rejson');
const { promisify } = require("util");
rejson(redis);
const client = redis.createClient('redis://redis:6379');
const getAsync = promisify(client.json_get).bind(client);
const TEMPERATURES_KEY = 'temperature';

const cacheUtil = async function () {
    return await getAsync(TEMPERATURES_KEY, '.');
};

module.exports = cacheUtil;
