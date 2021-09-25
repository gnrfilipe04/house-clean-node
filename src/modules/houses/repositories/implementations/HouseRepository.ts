import { House } from "../../../../database/models/house";
import { IHouseDTO } from "../../../../dtos/IHouseDTO";
import { IHouseRepository } from "../IHouseRepository";

class HouseRepository implements IHouseRepository {
    async create({ name, description, adress }: IHouseDTO): Promise<void> {
        try {
            await House.create({
                name,
                adress,
                description,
            });
        } catch (err) {
            console.log(err);
        }
    }
}

export { HouseRepository };
