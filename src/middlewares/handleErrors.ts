import {NextFunction, Request, Response} from "express";
import {AppError} from "@/errors/AppError";

export function handleErrors(error: Error, req: Request, res: Response, next: NextFunction) {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            message: error.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: `Internal server error - ${error.message}`
    })
}