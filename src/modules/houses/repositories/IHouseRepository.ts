import { IHouseDTO } from "../../../dtos/IHouseDTO";

interface IHouseRepository {
    create: (house: IHouseDTO) => Promise<void>;
}

export { IHouseRepository };
