const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should respond with status 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /propos", () => {
  it("should respond with status 200", async () => {
    const response = await request(app).get("/propos");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /contact", () => {
  it("should respond with status 200", async () => {
    const response = await request(app).get("/contact");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /login", () => {
  it("should respond with status 200", async () => {
    const response = await request(app).get("/login");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /register", () => {
  it("should respond with status 200", async () => {
    const response = await request(app).get("/register");
    expect(response.statusCode).toBe(200);
  });
});

describe("POST /register", () => {
  it("should register a new user and redirect to /", async () => {
    const response = await request(app).post("/register").send({
      mode: "user",
      username: "johnwick",
      email: "johnwick@gmail.com",
      name: "John Wick",
      password: "John123.",
    });

    expect(response.statusCode).toBe(302);
    expect(response.headers.location).toBe("/");
  });
});

describe("POST /login", () => {
  it("should log in an existing user and redirect to /", async () => {
    const response = await request(app).post("/login").send({
      username: "johnwick",
      password: "John123.",
    });

    expect(response.statusCode).toBe(302);
    expect(response.headers.location).toBe("/");
  });
});
