import { hash } from "bcryptjs";

import { AppError } from "../../../../shared/errors/AppError";
import { User } from "../../entities/User";
import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";

class CreateAccountUseCase {
    constructor(private accountsRepository: AccountsRepository) {}

    async execute(user: IUserDTO): Promise<User> {
        const useAccountAlreadyExists =
            await this.accountsRepository.findByEmail(user.email);

        if (useAccountAlreadyExists) {
            throw new AppError("User already exists");
        }

        const passwordHash = await hash(user.password, 8);

        const userAccount = await this.accountsRepository.create({
            ...user,
            password: passwordHash,
        });

        return { ...userAccount, password: "*****" };
    }
}

export { CreateAccountUseCase };
