const apiDoc = {
    swagger: '2.0',
    host: 'localhost',
    basePath: '/v1',
    info: {
        title: 'Temperature at a Glance',
        version: '1.0.0'
    },
    definitions: {
        Temperature: {
            type: 'object',
            properties: {
                city: {
                    description: 'display temperature trend',
                    type: 'object'
                }
            },
            required: ['city']
        },
        City: {
            type: 'object',
            properties: {
                city: {
                    description: 'display temperatures by the major cities',
                    type: 'object'
                }
            },
            required: ['city']
        }
    },
    paths: {}
};

module.exports = apiDoc;