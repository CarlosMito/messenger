import { Request, Response } from "express";
import { GetProfileUserService } from "../services/GetProfileUserService";

class GetProfileUserController {
    async handle(req: Request, res: Response) {
        const { user_id } = req;
        const service = new GetProfileUserService();
        const result = await service.execute(user_id);

        return res.json(result);
    }
}

export { GetProfileUserController };