import { Request, Response } from "express";
import IdGenerator from "../services/IdGenerator";
import Authenticator from "../services/Authenticator";
import UserDatabase from "../data/UserDatabase";
import HashManager from "../services/Crypt";

export default async function signup(req: Request, res: Response) {
  try {
    
    if(!req.body.email || req.body.email.indexOf("@") === -1){
      throw new Error("Invalid email.")
    }
    if(!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password.")
    }
    const data = {
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
      password: req.body.password
    }
    const id = IdGenerator.generate();
    const userDb = new UserDatabase();
    const hash = await HashManager.generateHash(data.password)

    await userDb.createUser(id, data.name, data.nickname, data.email, hash)
    const token = Authenticator.generateToken({id})
    res.status(200).send({
      message: 'success',
      token: token
    })
  } catch (error) {
      res
        .status(400)
        .send({ message: error.message });
  }
}