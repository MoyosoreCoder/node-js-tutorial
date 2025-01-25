import http from "http";
//const PORT = 8000;
const PORT = process.env.PORT;

//create the server
const server = http.createServer((req, res) => {
  try {
    if (req.method === 'GET'){
      if (req.url ==='/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>Homepage</h1>');
      }
      else if (req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>About page</h1>');
      }
      else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('<h1>Not found</h1>');
      }
    }
    else {
      throw new Error('Method not found');
    }
  } catch (error){
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('server error')
  }

});

//listen to the server created
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
