import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe de retornar un héroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);
    // console.log(hero)
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });
  test("getHeroeById debe de retornar undefined si no existe en ID", () => {
    const id = 100;
    const hero = getHeroeById(id);
    // console.log(hero)
    expect(hero).toBeFalsy();
  });
  test("getHeroesByOwner debe retornar un arreglo con los héroes de DC", () => {
    const owner = "DC";
    const arrHeroesDC = getHeroesByOwner(owner);
    expect(arrHeroesDC.length).toBe(3)
    expect(arrHeroesDC).toEqual([
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ]);
  });
  test("getHeroesByOwner debe de retornar un arreglo con heroes de Marvel", () => {
    const owner = "Marvel";
    const arrHeroesMarvel = getHeroesByOwner(owner);
    expect(arrHeroesMarvel).toEqual([
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },
      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      },
    ]);
  });
});
