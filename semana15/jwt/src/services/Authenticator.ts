import * as jwt from 'jsonwebtoken'


export default abstract class Authenticator {

  static generateToken(input: AuthenticationData) {
    return jwt.sign(
      {
        id: input.id
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: process.env.JWT_EXPIRES_IN
      }
    )
  }

  static getData(token: string): AuthenticationData {
    const payload = jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as any

    return ({ id: payload.id })
  }
}


interface AuthenticationData {
  id: string
}