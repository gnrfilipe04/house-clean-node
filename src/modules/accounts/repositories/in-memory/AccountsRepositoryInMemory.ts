import { IAccountsRepository } from "../IAccountsRepository";

class AccountsRepositoryInMemory implements IAccountsRepository {
    accounts: IUserDTO[] = [];

    async create(user: IUserDTO): Promise<IUserDTO> {
        this.accounts.push(user);

        return this.accounts.find((account) => account.id === user.id);
    }
    async list(): Promise<IUserDTO[]> {
        return this.accounts;
    }
}

export { AccountsRepositoryInMemory };
