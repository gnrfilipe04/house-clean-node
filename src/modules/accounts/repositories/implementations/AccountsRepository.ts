import { IAccountsRepository } from "../IAccountsRepository";

class AccountsRepository implements IAccountsRepository {
    create: (user: IUserDTO) => Promise<IUserDTO>;
    list: () => Promise<IUserDTO[]>;
}

export { AccountsRepository };
