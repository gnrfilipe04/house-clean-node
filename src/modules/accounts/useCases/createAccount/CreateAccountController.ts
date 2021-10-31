import { Request, Response } from "express";

import { CreateAccountUseCase } from "./CreateAccountUseCase";

class CreateAccountController {
    constructor(private createAccountUseCase: CreateAccountUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id, name, phone, adress, admin, email, password, team } =
            request.body;

        await this.createAccountUseCase.execute({
            id,
            name,
            phone,
            adress,
            admin,
            email,
            password,
            team,
        });

        return response.status(201).json({
            id,
            name,
            phone,
            adress,
            admin,
            email,
            team,
        });
    }
}

export { CreateAccountController };
