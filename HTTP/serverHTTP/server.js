const http = require("http");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  res.end("<h1> Hello, 🎉World from server HTTP🚀</h1>");
});

server.listen(4000, "127.0.0.1", () => {
  console.log("🔥: server on port 4000");
});
