import { User } from "../entities/User";

interface IAccountsRepository {
    create: (user: IUserDTO) => Promise<User>;
    list: () => Promise<User[]>;
    findByEmail: (email: string) => Promise<User>;
}

export { IAccountsRepository };
