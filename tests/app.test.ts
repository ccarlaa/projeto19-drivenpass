import supertest from "supertest";
import prisma from "../database.js";
import app from "../index.js"

describe("POST /sign-up", () => {
    it("returns 201 for valid params", async() => {
        const body = {
            email: "oe@driven.com",
            password: "teste12345"
        };
  
        const result = await supertest(app).post("/sign-up").send(body);
        const status = result.status;
        expect(status).toEqual(201);

        const user = await prisma.users.findFirst({
            where: {email: body.email }
          });
      
          expect(user.email).toBe(body.email);
    });
  });
