import { Request, Response } from "express";

import { CreateUseCase } from "./CreateUseCase";

class CreateController {
    constructor(private createUseCase: CreateUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { body } = request;
        await this.createUseCase.execute(body);
        return response.status(201).send();
    }
}

export { CreateController };
