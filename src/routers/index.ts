import {Request, Response, Router, NextFunction} from "express";

export class IndexRouter {
    attach(router: Router): void {
        router.get('/', this.index)
    }

    index(req: Request, res: Response, next: NextFunction) {
        res.status(200).send({"status": "OK"});
    }
}