import { getRepository, Repository } from "typeorm";

import { IUserDTO } from "../../../../dtos/IUserDTO";
import { User } from "../../entities/User";
import { IAccountsRepository } from "../IAccountsRepository";

class AccountsRepository implements IAccountsRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = getRepository(User);
    }

    async create(user: IUserDTO): Promise<User> {
        const userAccount = this.repository.create(user);
        await this.repository.save(userAccount);

        return { ...userAccount, password: "*****" };
    }

    list: () => Promise<User[]>;

    async findByEmail(email: string): Promise<User> {
        const userAccount = await this.repository.findOne({ email });
        return userAccount;
    }
}

export { AccountsRepository };
