import { fastify } from 'fastify'

const server = fastify();

server.post('/users', (request, reply) => {
  const body = request.body;

  return 'Brunna';
});


server.listen({
  port: 3333,
})
