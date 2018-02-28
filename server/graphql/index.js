const router = require('koa-router')();
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa');
const schema = require('./schema');

router.post('/graphql', graphqlKoa({ schema: schema }));
router.get('/graphql', graphqlKoa({ schema: schema }));
router.get('/graphiql', graphiqlKoa({
  endpointURL: '/graphql'
}))

module.exports = router.middleware();
