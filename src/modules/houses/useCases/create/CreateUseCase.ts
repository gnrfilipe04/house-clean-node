import { IHouseDTO } from "../../../../dtos/IHouseDTO";
import { HouseRepository } from "../../repositories/implementations/HouseRepository";

class CreateUseCase {
    constructor(private houseRepository: HouseRepository) {}
    async execute(house: IHouseDTO): Promise<void> {
        this.houseRepository.create(house);
    }
}

export { CreateUseCase };
