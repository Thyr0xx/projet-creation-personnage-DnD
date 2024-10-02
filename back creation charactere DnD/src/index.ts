import "reflect-metadata"
import * as dotenv from "dotenv"

dotenv.config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env.dev"
})

import  express  from "express"
import { getDataSource } from "./dataSource"

const app = express()
app.use(express.json())

const dataSource = getDataSource()

dataSource
.initialize()
.then(()=>{
    app.listen(3000,()=>{
        console.log("Server listen on port 3000")
    })
})
.catch((error)=>{
    console.error("Erreur lors de l'initialisation de la base de données :", error);
})