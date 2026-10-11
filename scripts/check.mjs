import { readFile } from "node:fs/promises";

const pages = ["index.html", "services.html", "inspection.html", "projects.html", "service-areas.html"];
const required = ["<title>", "canonical", "description", "viewport", "application/ld+json", "noindex, nofollow"];
for (const page of pages) {
  const html = await readFile(page, "utf8");
  for (const needle of required) {
    if (!html.includes(needle)) throw new Error(`${page} is missing ${needle}`);
  }
}
const js = await readFile("assets/site.js", "utf8");
if (!js.includes("Nothing was sent or stored")) throw new Error("Safe demo form behavior is missing");
console.log("Site checks passed.");

