import http from "http";
//const PORT = 8000;
const PORT = process.env.PORT;

//create the server
const server = http.createServer((req, res) => {
  if (req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<h1>Local homepage</h1>')
  }
  else if (req.url === '/about'){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(200, {'Content-Type': 'text/html'})
  }
  else {
    res.writeHead(404, 'text/html')
    res.end(`<h1>Not found</h1>`)

  }
});

//listen to the server created
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
