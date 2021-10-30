import { Request, Response } from "express";

import { CreateHouseUseCase } from "./CreateHouseUseCase";

class CreateHouseController {
    constructor(private createUseCase: CreateHouseUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { body } = request;
        await this.createUseCase.execute(body);
        return response.status(201).send();
    }
}

export { CreateHouseController };
