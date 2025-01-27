import { createServer } from "http";
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;

//data information
const users = [
  { id: 1, name: "Ann Bee" },
  { id: 2, name: "Mary Kay" },
  { id: 3, name: "Babs Morgan" },
];

//Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

//JSON middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

//Router handler for GET /api/users
const getUsersApi = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

//Router request handler for user id /api/users:id
const getUserByIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "user not found" }));
  }
  res.end();
};

//Not found handler
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route not found" }));
  res.end();
};
//Route handler for POST /api/users
const createUserHandler = (req, res) => {
  let body = "";
  //listen to data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode(201);
    res.write(JSON.stringify(newUser));
    res.end();
  });
};
//create server by importing createServer
const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersApi(req, res);
      } else if (
        req.url.match(/\/api\/users\/[0-9]+/) &&
        req.method === "GET"
      ) {
        getUserByIdHandler(req, res);
      } else if (req.url === "api/users" && req.method === "POST") {
        createUserHandler(req, res)
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

//listen to the server
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
