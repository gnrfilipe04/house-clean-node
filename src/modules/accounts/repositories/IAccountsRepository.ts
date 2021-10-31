import { IUserDTO } from "../../../dtos/IUserDTO";
import { User } from "../entities/User";

interface IAccountsRepository {
    create: (user: IUserDTO) => Promise<User | IUserDTO>;
    list: () => Promise<User[] | IUserDTO[]>;
    findByEmail: (email: string) => Promise<User | IUserDTO>;
}

export { IAccountsRepository };
