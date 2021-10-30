import { v4 as uuidV4 } from "uuid";

import { AccountsRepositoryInMemory } from "../../repositories/in-memory/AccountsRepositoryInMemory";

let accountsRepositoryInMemory: AccountsRepositoryInMemory;

describe("Accounts", () => {
    beforeEach(() => {
        accountsRepositoryInMemory = new AccountsRepositoryInMemory();
    });

    it("should be able create a new account", async () => {
        const account = await accountsRepositoryInMemory.create({
            id: uuidV4(),
            admin: false,
            email: "test@test.com",
            name: "Test",
            password: "1234",
            adress: "Test Adress",
            phone: "55 998874555",
        });

        expect(account).toHaveProperty("id");
    });

    it("should be able list all accounts", async () => {
        const account = await accountsRepositoryInMemory.create({
            id: uuidV4(),
            admin: false,
            email: "test@test.com",
            name: "Test",
            password: "1234",
            adress: "Test Adress",
            phone: "55 998874555",
        });

        const accounts = await accountsRepositoryInMemory.list();

        expect(accounts).toEqual(expect.arrayContaining([account]));
    });
});
