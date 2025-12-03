import '@fastify/jwt'

declare module '@fastify/jwt' {
  interface FastifyJWT {
    user: { id: string } // usuario decodificado
  }
}

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: any
  }
}
