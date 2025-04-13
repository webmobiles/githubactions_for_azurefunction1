const { app } = require('@azure/functions');

app.http('httpTrigger-g1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        return { body: `Hola amigo 2, ${name}!` };
    }
});
