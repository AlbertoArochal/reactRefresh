import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Testing 05-funciones", () => {
  test("getUser should return an object", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toStrictEqual(user);
  });

  test("getUsuarioActivo should return an object", () => {
    const nombre = "Macuto";
    const testUserActive = {
      uid: "ABC567",
      username: nombre,
    };
    const user = getUsuarioActivo(nombre);
    expect(testUserActive).toStrictEqual(user);
  });
});
