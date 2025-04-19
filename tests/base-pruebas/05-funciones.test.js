import { getUser } from "../../src/base-pruebas/05-funciones";

describe("Testing 05-funciones", () => {
  test("getUser should return an object", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toStrictEqual(user);
  });
});
