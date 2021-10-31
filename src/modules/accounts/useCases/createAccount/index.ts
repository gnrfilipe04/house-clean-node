import { AccountsRepository } from "../../repositories/implementations/AccountsRepository";
import { CreateAccountController } from "./CreateAccountController";
import { CreateAccountUseCase } from "./CreateAccountUseCase";

export default (): CreateAccountController => {
    const accountsRepository = new AccountsRepository();
    const createAccountUseCase = new CreateAccountUseCase(accountsRepository);
    const createAccountController = new CreateAccountController(
        createAccountUseCase
    );

    return createAccountController;
};
