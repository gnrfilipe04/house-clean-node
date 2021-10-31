import { IUserDTO } from "../../../../dtos/IUserDTO";
import { AppError } from "../../../../shared/errors/AppError";
import { User } from "../../entities/User";
import { IAccountsRepository } from "../IAccountsRepository";

class AccountsRepositoryInMemory implements IAccountsRepository {
    accounts: IUserDTO[] = [];

    async create(user: IUserDTO): Promise<IUserDTO> {
        const useAccountAlreadyExists = await this.findByEmail(user.email);

        if (useAccountAlreadyExists) {
            throw new AppError("User already exists");
        }

        this.accounts.push(user);

        return this.accounts.find((account) => account.id === user.id);
    }
    async list(): Promise<IUserDTO[]> {
        return this.accounts;
    }

    async findByEmail(email: string): Promise<IUserDTO> {
        return this.accounts.find((account) => account.email === email);
    }
}

export { AccountsRepositoryInMemory };
