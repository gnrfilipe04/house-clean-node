import { Request, Response, Router } from "express";

import { createController } from "../../../../modules/houses/useCases/create";

const houseRoutes = Router();

houseRoutes.post("/create", (request: Request, response: Response) => {
    createController.handle(request, response);
});

export { houseRoutes };
