const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer(function (req, res) {
    const query = url.parse(req.url, true);
    const path = query.pathname;
    console.log(`path: ${path}`);
    let filename;
    let modules = ["404", "/about", "/contact-me"];

    if (path == "/" || path == "") {
      filename = "./index.html";
    } else if (modules.includes(path)) {
      console.log(`path exists in modules`);
      filename = "./modules" + query.pathname + ".html";
    } else {
      console.log(`path DOES NOT exist in modules`);
      filename = "./modules/404.html";
    }
    console.log(`filename: ${filename}`);
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("Oops! 404 not found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);

// http://localhost:8080/
// http://localhost:8080/about
// http://localhost:8080/contact-me

