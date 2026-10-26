import { test, expect } from "@jest/globals";
import request from "supertest";
import app from "./app.js";

test("Should signup with valid data", async () => {
    const response = await request(app)
        .post("/signup")
        .send({
            username: "Pankaj",
            email: "pankaj@gmail.com",
            password: "123456"
        });

    expect(response.status).toBe(200);

    expect(response.body.message).toBe("Signup successful!");
});
