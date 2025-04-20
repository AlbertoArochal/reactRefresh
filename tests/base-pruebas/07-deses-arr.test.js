import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Test on deses-arr", () => {
  test("should first", () => {
    const [letters, numbers] = retornaArreglo();

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");
    expect(letters).toStrictEqual(expect.any(String));
  });
});
