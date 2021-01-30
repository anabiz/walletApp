import request from "supertest";
import app from "../app";
const req = request(app);

describe("Post Endpoints", () => {
  it('', async () => {
    const res = await req.get("/");
    expect(res.status).toEqual(200);

  });

  it('', async () => {
    const res = await req.post("/").send();
    expect(res.status).toEqual(200);
    expect(typeof res.body).toBe("object");

   
  });


});
