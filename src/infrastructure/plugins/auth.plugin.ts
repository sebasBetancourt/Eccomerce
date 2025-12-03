import jwt from '@fastify/jwt'
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import fastifyPlugin from 'fastify-plugin'
import config from '~/infrastructure/config/constants'
import { responseSender } from '~/infrastructure/webserver/response.handler'
import parseResponse from '~/infrastructure/webserver/response.parser'

export default fastifyPlugin(
  async (fastify: FastifyInstance) => {
    fastify.register(jwt, {
      secret: config.jwt.secret,
    })

    fastify.decorate('authenticate', async function (req: FastifyRequest, reply: FastifyReply) {
      try {
        await req.jwtVerify()
      } catch (err: any) {
        responseSender(parseResponse(new Error(`401 Unauthorized: ${err.message}`)), reply)
      }
    })
  },
  {
    name: 'auth-middleware',
  },
)
