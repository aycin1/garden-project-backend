const app = require("./server.js");
const supertest = require("supertest");
const request = supertest(app);

describe("POST /login handler", () => {
  it("returns an error when user tries logging in with unregistered email", async () => {
    const response = await request
      .post("/login")
      .send({ email: "aycinkaya11@gmail.com", password: "password" });
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual({
      response: "An account does not exist for this email address.",
    });
  });

  it("returns an error when user tries logging in with incorrect password", async () => {
    const response = await request
      .post("/login")
      .send({ email: "aycinkaya98@gmail.com", password: "PASSWORD" });
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual({
      response: "Username or password is incorrect.",
    });
  });

  it("logs user in if details are correct", async () => {
    const response = await request
      .post("/login")
      .send({ email: "aycinkaya98@gmail.com", password: "aycinkaya" });
    expect(response.statusCode).toEqual(200);
  });
});

describe("POST /sign-up handler", () => {
  it("returns an error when an already-registered email is entered", async () => {
    const response = await request.post("/sign-up").send({
      firstName: "Aycin",
      lastName: "Kaya",
      email: "aycinkaya98@gmail.com",
      password: "password",
      passwordConfirmation: "password",
    });
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual({
      error: "An account already exists for this email!",
    });
  });

  it("returns an error when user enters passwords that don't match", async () => {
    const response = await request.post("/sign-up").send({
      firstName: "Aycin",
      lastName: "Kaya",
      email: "testing_passwords@gmail.com",
      password: "password",
      passwordConfirmation: "Password",
    });
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual({
      error: "Passwords do not match, please try again.",
    });
  });

  it("returns an error when user doesn't enter email address", async () => {
    const response = await request.post("/sign-up").send({
      firstName: "Aycin",
      lastName: "Kaya",
      email: "",
      password: "password",
      passwordConfirmation: "password",
    });
    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual({
      error: "Please provide all data required!",
    });
  });

  it("returns an response confirming creation of account if details are valid", async () => {
    const response = await request.post("/sign-up").send({
      firstName: "Aycin",
      lastName: "Kaya",
      email: "aycinkaya1998@gmail.com",
      password: "password",
      passwordConfirmation: "password",
    });
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      response: "Account created!",
    });
  });
});
