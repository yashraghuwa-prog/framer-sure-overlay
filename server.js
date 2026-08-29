const http = require("http");
const fs = require("fs");
const path = require("path");

const DEFAULT_PORT = parseInt(process.env.PORT || "3333", 10);
const PUBLIC_DIR = path.join(__dirname, "public");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".webp": "image/webp",
  ".map": "application/json",
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split("?")[0]);
  if (reqPath === "/" || reqPath === "") {
    reqPath = "/index.html";
  }

  const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, "");
  let filePath = path.join(PUBLIC_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      const htmlTry = filePath + ".html";
      if (fs.existsSync(htmlTry) && fs.statSync(htmlTry).isFile()) {
        filePath = htmlTry;
      } else {
        filePath = path.join(PUBLIC_DIR, "index.html");
      }
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("500 Internal Server Error");
        return;
      }

      res.writeHead(200, {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache",
      });
      res.end(data);
    });
  });
});

function startServer(port) {
  server.listen(port, "127.0.0.1", () => {
    console.log(`\n==================================================`);
    console.log(`🚀 Framer Clone is running on:`);
    console.log(`   👉 http://localhost:${port}/`);
    console.log(`   👉 http://127.0.0.1:${port}/`);
    console.log(`==================================================\n`);
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Port ${port} in use, trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error("Server error:", err);
    }
  });
}

startServer(DEFAULT_PORT);
