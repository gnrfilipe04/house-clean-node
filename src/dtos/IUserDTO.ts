interface IUserDTO {
    id: string;
    name: string;
    phone?: string;
    adress?: string;
    admin: boolean;
    email: string;
    password: string;
    created_at?: Date;
}
