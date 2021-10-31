import { Request, Response, Router } from "express";

import { createController } from "../../../../modules/houses/useCases/create";

const houseRoutes = Router();

houseRoutes.post("/create", (request: Request, response: Response) => {
    createController.handle(request, response);
});

houseRoutes.get("/ping", (request: Request, response: Response) => {
    return response.send("funcionando...");
});

export { houseRoutes };
