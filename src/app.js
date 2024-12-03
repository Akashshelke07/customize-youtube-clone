/* In this we learn when the data will comes through the diffrent url,json or overall */

import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credentials: true
}))
// in the web application the data will comes from the all sides such as jason, url, cookies 
app.use(express.json({limit: "16kb"}))//data will comes through teh json 
app.use(express.urlencoded({extended: true, limit: "16kb"}))// when the data will come through the url 
app.use(express.static("public")) /*for random use  */
app.use(cookieParser())

//routes import
import userRouter from './routes/user.routes.js'


//routes declaration
app.use("/api/v1/users", userRouter)                   


export { app }