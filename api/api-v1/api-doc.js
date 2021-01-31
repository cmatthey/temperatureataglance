const apiDoc = {
    swagger: '2.0',
    basePath: '/v1',
    info: {
        title: 'Temperature at a glance',
        version: '1.0.0'
    },
    definitions: {
        Temperature: {
            type: 'object',
            properties: {
                city: {
                    description: 'The city to display temperature.',
                    type: 'string'
                }
            },
            required: ['city']
        }
    },
    paths: {}
};

module.exports = apiDoc;