import { v4 as uuidV4 } from "uuid";

import { HouseRepositoryInMemory } from "../../repositories/in-memory/HouseRepositoryInMemory";

let houseRepositoryInMemory: HouseRepositoryInMemory;

describe("Houses", () => {
    beforeEach(() => {
        houseRepositoryInMemory = new HouseRepositoryInMemory();
    });

    it("should be able to create a new house", async () => {
        const house = await houseRepositoryInMemory.create({
            id: uuidV4(),
            name: "House Test",
            adress: "Adress Test",
            description: "Description Test",
        });
        expect(house).toHaveProperty("id");
    });

    it("should be able to list all houses", async () => {
        const house = await houseRepositoryInMemory.create({
            id: uuidV4(),
            name: "House Test 1",
            adress: "Adress Test 1",
            description: "Description Test 1",
        });

        const houses = await houseRepositoryInMemory.list();

        expect(houses).toEqual(expect.arrayContaining([house]));
    });
});
