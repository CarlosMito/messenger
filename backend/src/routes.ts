import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLastMessagesController } from "./controllers/GetLastMessagesController";
import { GetProfileUserController } from "./controllers/GetProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);
router.post('/messages', ensureAuthenticated, new CreateMessageController().handle);
router.get('/messages/last3', new GetLastMessagesController().handle);
router.get('/profile', ensureAuthenticated, new GetProfileUserController().handle);

export { router };