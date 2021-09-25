import { HouseRepository } from "../../repositories/implementations/HouseRepository";
import { CreateController } from "./CreateController";
import { CreateUseCase } from "./CreateUseCase";

const houseRepository = new HouseRepository();
const createUseCase = new CreateUseCase(houseRepository);
const createController = new CreateController(createUseCase);

export { createController };
