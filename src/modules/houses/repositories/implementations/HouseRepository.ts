import { House } from "../../../../database/models/house";
import { IHouseDTO } from "../../../../dtos/IHouseDTO";
import { IHouseRepository } from "../IHouseRepository";

class HouseRepository implements IHouseRepository {
    async create({ name, description, adress }: IHouseDTO): Promise<IHouseDTO> {
        const house = {
            name,
            adress,
            description,
        };

        await House.create(house);

        return house;
    }

    list: () => Promise<IHouseDTO[]>;
}

export { HouseRepository };
