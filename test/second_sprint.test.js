const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should respond with status 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /ecrire_idee", () => {
  it("should respond with status 302", async () => {
    const response = await request(app)
      .get("/ecrire_idee")
      .set("Cookie", "authenticated=true");
    expect(response.statusCode).toBe(302);
  });
});

describe("GET /idees_envoyees", () => {
  it("should respond with status 302", async () => {
    const response = await request(app)
      .get("/idees_envoyees")
      .set("Cookie", "authenticated=true");
    expect(response.statusCode).toBe(302);
  });
});

describe("GET /defi_mois", () => {
  it("should respond with status 302", async () => {
    const response = await request(app)
      .get("/defi_mois")
      .set("Cookie", "authenticated=true");
    expect(response.statusCode).toBe(302);
  });
});

describe("GET /idees_admin", () => {
  it("should respond with status 302", async () => {
    const response = await request(app)
      .get("/idees_admin")
      .set("Cookie", "authenticated=true");
    expect(response.statusCode).toBe(302);
  });
});

describe("GET /voir_defi", () => {
  it("should respond with status 302", async () => {
    const response = await request(app)
      .get("/idees_admin")
      .set("Cookie", "authenticated=true");
    expect(response.statusCode).toBe(302);
  });
});

describe("GET /ecrire_defi", () => {
  it("should respond with status 302", async () => {
    const response = await request(app)
      .get("/idees_admin")
      .set("Cookie", "authenticated=true");
    expect(response.statusCode).toBe(302);
  });
});

describe("GET /compte", () => {
  it("should respond with status 302", async () => {
    const response = await request(app)
      .get("/compte")
      .set("Cookie", "authenticated=true");
    expect(response.statusCode).toBe(302);
  });
});

describe("GET /logout", () => {
  it("should respond with status 302", async () => {
    const response = await request(app)
      .get("/logout")
      .set("Cookie", "authenticated=true");
    expect(response.statusCode).toBe(302);
  });
});
