import { Request, Response, Router } from "express";

import createAccountController from "../../../../modules/accounts/useCases/createAccount";

const accountsRoutes = Router();

accountsRoutes.post("/create", (request: Request, response: Response) => {
    return createAccountController().handle(request, response);
});

export { accountsRoutes };
