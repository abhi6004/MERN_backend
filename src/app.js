import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded())   
app.use(express.static("public"))
app.use(cookieParser())

const app = express();

export default app