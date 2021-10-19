import { Request, response, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
    async handle(req: Request, res: Response) {
        const { code } = req.body;

        const service = new AuthenticateUserService();
        const result = await service.execute(code).catch((reason) => { return reason.message; });

        return res.json(result);
    }
}

export { AuthenticateUserController };