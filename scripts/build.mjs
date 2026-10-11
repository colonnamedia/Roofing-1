import { cp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";

const files = ["index.html", "services.html", "inspection.html", "projects.html", "service-areas.html", "robots.txt", "sitemap.xml", "vercel.json"];
await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
for (const file of files) {
  if (existsSync(file)) await cp(file, `dist/${file}`);
}
await cp("assets", "dist/assets", { recursive: true });
console.log("Built static site to dist/");

