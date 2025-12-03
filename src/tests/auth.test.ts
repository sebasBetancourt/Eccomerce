import { app } from '../app'

describe('Auth', () => {
  afterAll(async () => {
    await app.app.close()
  })

  it('should not be able to login', async () => {
    const response = await app.app.inject({
      method: 'POST',
      url: '/auth/login',
      payload: {
        email: 'fake@mail.com',
        password: 'wrong',
      },
    })

    expect(response.statusCode).toBe(401)
  })

  it('should be able to login', async () => {
    const response = await app.app.inject({
      method: 'POST',
      url: '/auth/login',
      payload: {
        email: 'test@gmail.com',
        password: '123456',
      },
    })

    expect(response.statusCode).toBe(200)
  })
})
