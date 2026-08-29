const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "public", "index.html"), "utf8");

// Extract all paragraph and text contents
const matches = [...html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>|<span\b[^>]*>([\s\S]*?)<\/span>/gi)];
const textSet = new Set();
matches.forEach(m => {
  const inner = (m[1] || m[2]).replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"').trim();
  if (inner && inner.length > 1 && !inner.startsWith("{") && !inner.includes("function") && !inner.includes("/*")) {
    textSet.add(inner);
  }
});

console.log(`Total text elements: ${textSet.size}`);
for (const t of textSet) {
  console.log("->", JSON.stringify(t));
}
