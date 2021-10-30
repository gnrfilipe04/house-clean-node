interface IAccountsRepository {
    create: (user: IUserDTO) => Promise<IUserDTO>;
    list: () => Promise<IUserDTO[]>;
}

export { IAccountsRepository };
