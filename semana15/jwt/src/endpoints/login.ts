import { Request, Response } from "express";
import IdGenerator from "../services/IdGenerator";
import Authenticator from "../services/Authenticator";
import UserDatabase from "../data/UserDatabase";
import HashManager from "../services/Crypt";

export default async function login(req: Request, res: Response) {
  try {
    if(!req.body.email || req.body.email.indexOf("@") === -1){
      throw new Error("Invalid email.")
    }
    const data = {
      email: req.body.email,
      password: req.body.password
    }
    const userDb = new UserDatabase();
    const user = await userDb.getUserByEmail(data.email)
    const isPasswordCorrect = await HashManager.comparePassword(data.password, user.password)

    if(!isPasswordCorrect){
      throw new Error('Invalida password')
    }

    const token = Authenticator.generateToken({id: user.id})
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