import * as bcrypt from 'bcryptjs'

export default class HashManager {
  
  static async generateHash(plainPassword: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt((rounds))
    const hash = await bcrypt.hash(plainPassword, salt)

    return hash
  }

  static async comparePassword(plainPassword: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hash)
  }
}