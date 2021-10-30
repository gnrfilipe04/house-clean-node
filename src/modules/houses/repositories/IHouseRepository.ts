import { IHouseDTO } from "../../../dtos/IHouseDTO";

interface IHouseRepository {
    create: (house: IHouseDTO) => Promise<IHouseDTO>;
    list: () => Promise<IHouseDTO[]>;
}

export { IHouseRepository };
