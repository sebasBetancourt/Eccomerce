import { FastifyInstance } from 'fastify'
import AuthController from '../controller/auth/auth.controller'
import { UserInterface } from '~/domain/interface/users.interface'
import { LoginSchema } from '~/domain/validation/auth.validate'

class AuthRoute {
  public prefix_route = '/auth'

  async routes(fastify: FastifyInstance) {
    fastify.post<{ Body: UserInterface }>(
      '/login',
      {
        schema: { body: LoginSchema },
      },
      AuthController.login,
    )

    fastify.get('/profile', { preHandler: [fastify.authenticate] }, async (req, reply) => {
      return reply.send({ ok: true })
    })
  }
}

export default AuthRoute
