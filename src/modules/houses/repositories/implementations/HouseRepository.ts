import { IHouseDTO } from "../../../../dtos/IHouseDTO";
import { IHouseRepository } from "../IHouseRepository";

class HouseRepository implements IHouseRepository {
    async create({ name, description, adress }: IHouseDTO): Promise<IHouseDTO> {
        const house = {
            name,
            adress,
            description,
        };

        return house;
    }

    list: () => Promise<IHouseDTO[]>;
}

export { HouseRepository };
