const { response } = require("express");
const request = require("supertest");
const app = require("./product/product.routes");

describe("Todos API", () => {
  it("GET /api --> array todo", () => {
    return request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
          expect(response.body).toEqual(
              expect.arrayContaining({
                  name:expect.any(String),
                  stock:expect.any(Number),
                  price:expect.any(Number),
                  timestamps:expect.any(String),
              })
          )
      });
  });

//   it("GET /todos/id --> specidic todo by ID", () => {
//     return request(app)
//     .get("/todo")
//     .expect("Content-Type", /json/)
//     .expect(200)
//     .then((response) => {
//         expect(response.body).toEqual(
//             expect.arrayContaining({
//                 name:expect.any(String),
//                 completed:expect.any(Boolean),
//             })
//         )
//     });
//   });

//   it("POST /todos--> created todo", () => {});
});
