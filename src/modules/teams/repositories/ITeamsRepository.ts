import { Team } from "../entities/Teams";

interface ITeamsRepository {
    create: (team: Team) => Promise<Team>;
    findById: (id: string) => Promise<Team>;
    list: () => Promise<Team[]>;
    remove: (team: Team) => Promise<void>;
}

export { ITeamsRepository };
