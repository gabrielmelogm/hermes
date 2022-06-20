import axios from "axios";
import "dotenv/config";

describe("Verifica se o servidor foi iniciado", () => {
  test("Deve retornar uma string Hello World", async () => {
    const response = await axios.get(
      `${process.env.API_URL}${process.env.PORT}`
    );
    expect(response.data).toBe("Hello World");
  });
});
