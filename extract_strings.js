const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "public", "index.html"), "utf8");

const texts = new Set();
const tagRegex = />([^<]{2,})</g;
let m;
while ((m = tagRegex.exec(html)) !== null) {
  const t = m[1].replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim();
  if (t && !t.startsWith("{") && !t.startsWith("/*") && !t.includes("function") && !t.includes("display:none") && !t.includes("@media")) {
    texts.add(t);
  }
}

console.log(`Extracted ${texts.size} strings:`);
for (const str of texts) {
  console.log(" -", JSON.stringify(str));
}
