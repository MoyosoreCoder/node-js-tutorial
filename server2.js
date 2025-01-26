import { createServer } from "http";
const PORT = process.env.PORT;

//data information
const users = [
  { id: 1, name: "Ann Bee" },
  { id: 2, name: "Mary Kay" },
  { id: 1, name: "Babs Morgan" },
];

//create server by importing createServer
const server = createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url.match(/\/api\/users\/[0-9]+/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    const user = users.find((user) => user.id === parseInt(id));
    res.setHeader("Content-Type", "application/json");

    if (user) {
      res.write(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "user not found" }));
    }
    res.end();
  } else {
    //for get request else
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Route not found" }));
    res.end();
  }
});

//listen to the server
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
