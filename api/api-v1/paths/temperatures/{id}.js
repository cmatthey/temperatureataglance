const cacheUtil = require('../../utils/cache');
module.exports = {
    // parameters for all operations in this path
    parameters: [
        {
            name: 'id',
            in: 'path',
            type: 'string',
            required: true,
            description: "City name",
        },
    ],
    // method handlers may just be the method handler...
    get: get,
};

async function get(req, res, next) {
    let temperatures = JSON.parse(await cacheUtil());
    temperature = temperatures[req.params.id];
    res.status(200).json(temperature ? temperature : {});
}

get.apiDoc = {
    description: 'Retrieve the temperature data of a city.',
    operationId: 'getTemperature',
    parameters: [
        {
            name: 'id',
            in: 'path',
            type: 'string',
            required: true,
            description: "City.",
        }
    ],

    responses: {
        200: {
            description: 'Requested temperature of the city',
            schema: {
                $ref: '#/definitions/Temperature',
            },
        },

        default: {
            description: 'Unexpected error',
            schema: {
                $ref: '#/definitions/Error',
            },
        },
    },
};