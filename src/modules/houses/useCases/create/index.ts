import { HouseRepository } from "../../repositories/implementations/HouseRepository";
import { CreateHouseController } from "./CreateHouseController";
import { CreateHouseUseCase } from "./CreateHouseUseCase";

const houseRepository = new HouseRepository();
const createUseCase = new CreateHouseUseCase(houseRepository);
const createController = new CreateHouseController(createUseCase);

export { createController };
