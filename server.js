import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

//Get current path of the file to use
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//const PORT = 8000;
const PORT = process.env.PORT;

//create the server
const server = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error('Page not found')
      }
      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }

  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("server error");
  }
});

//listen to the server created
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
