interface ITeamDTO {
    id: string;
    name: string;
    members: IUserDTO[];
    description?: string;
}

export { ITeamDTO };
