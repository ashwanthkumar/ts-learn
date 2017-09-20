import {Request, Response, Router, NextFunction} from "express";

export class HealthCheckRouter {
    attach(router: Router): void {
        router.get('/health', this.healthCheck)
    }

    healthCheck(req: Request, res: Response, next: NextFunction) {
        res.status(200).send({"status": "OK"});
    }
}
