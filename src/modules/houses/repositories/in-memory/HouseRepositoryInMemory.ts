import { v4 as uuidV4 } from "uuid";

import { IHouseDTO } from "../../../../dtos/IHouseDTO";
import { IHouseRepository } from "../IHouseRepository";

class HouseRepositoryInMemory implements IHouseRepository {
    houses: IHouseDTO[] = [];

    async create(house: IHouseDTO): Promise<IHouseDTO> {
        this.houses.push({
            id: uuidV4(),
            ...house,
        });

        return house;
    }

    async list(): Promise<IHouseDTO[]> {
        return this.houses;
    }
}

export { HouseRepositoryInMemory };
