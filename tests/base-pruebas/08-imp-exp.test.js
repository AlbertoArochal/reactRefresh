import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeoesById shoould return a hero by id", () => {
    const id = 1;
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
    expect(typeof hero.id).toBe("number");
    expect(typeof hero.name).toBe("string");
    expect(typeof hero.owner).toBe("string");
  });

  test("getHeoesById shoould return undefined if the id doesnt exists", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner should return array of objects", () => {
    const owner = "DC";

    const hero = getHeroesByOwner(owner);

    console.log(hero);

    expect(hero[0]).toEqual({ id: 1, name: "Batman", owner: "DC" });
    expect(typeof hero[0].id).toBe("number");
    expect(typeof hero[0].name).toBe("string");
    expect(typeof hero[0].owner).toBe("string");
    expect(typeof hero).toBe("object");
  });

  test("getHeoesById shoould return undefined if the id doesnt exists", () => {
    const owner = "Bururua";
    const hero = getHeroesByOwner(owner);

    expect(hero[0]).toBeFalsy();
  });
});
