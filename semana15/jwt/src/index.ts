import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import knex from 'knex'
import signup from "./endpoints/signup";
import UserDatabase from "./data/UserDatabase";
import IdGenerator from "./services/IdGenerator";
import login from "./endpoints/login";
import getUserDetails from "./endpoints/getUser";

dotenv.config();

export const userTableName = "Users"
export const taskTableName = "ToDo"


export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.post("/signup", signup);
app.post("/login", login)
app.get("/user/profile", getUserDetails);


