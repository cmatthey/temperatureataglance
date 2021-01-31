module.exports = function (temperaturesService) {
    let operations = {
        GET
    };

    async function GET(req, res, next) {
        res.status(200).json(await temperaturesService.getTemperatures(req.query.city));
    }

    // NOTE: We could also use a YAML string here.
    GET.apiDoc = {
        summary: 'Returns temperatures by name.',
        operationId: 'getTemperatures',
        parameters: [
            {
                in: 'query',
                name: 'city',
                required: false,
                type: 'string'
            },
            // {
            //     in: 'query',
            //     name: 'page',
            //     schema: {
            //         type: 'integer',
            //         default: 1
            //     },
            //     required: false
            // },
            // {
            //     name: 'orderBy',
            //     in: 'query',
            //     schema: {
            //         type: 'string',
            //         enum: ['asc', 'desc'],
            //         default: 'asc'
            //     },
            //     required: false
            // }
        ],
        responses: {
            200: {
                description: 'A list of temperatures that match the requested name.',
                schema: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Temperature'
                    }
                }
            },
            default: {
                description: 'An error occurred',
                schema: {
                    additionalProperties: true
                }
            }
        }
    };

    return operations;
}