import { Request, Response } from "express";
import IdGenerator from "../services/IdGenerator";
import Authenticator from "../services/Authenticator";
import UserDatabase from "../data/UserDatabase";

export default async function getUserDetails(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string
    const authenticationData = Authenticator.getData(token)

    const userDB = new UserDatabase()
    const user = await userDB.getUserById(authenticationData.id)

    res.status(200).send({
      message: 'sucess',
      id: user.id,
      name: user.name,
      nickname: user.nickname,
      email: user.email
    })
  } catch (error) {
      res
          .status(400)
          .send({ message: error.message });
  }
}