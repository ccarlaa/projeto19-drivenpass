import { Request, Response, NextFunction } from "express";
import { verifySession } from "../repositories/sessionsRepository.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function validateToken(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;
    const token = authorization?.replace("Bearer ", "").trim(); 
    let error: Error
    const secretKey = process.env.SECRET_KEY;
    console.log(token)
    if(!token) {
        return res.status(401).send("Token not send");
    }

    jwt.verify(token, secretKey,function(err) {
        if(err) {
            error = err
        }
    })
    if(error) {
        return res.status(401).send("Invalid token"); 
    }

    const sessionValidate = await verifySession(token);
    
    res.locals.userId = {
        userId: sessionValidate.userId
    }

    next();
}
