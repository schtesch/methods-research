import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(projectRoot, "docs");
const errors = [];

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

function report(message) {
  errors.push(message);
}

function requireFile(relativePath) {
  const target = path.join(outputRoot, relativePath);
  if (!fs.existsSync(target)) report(`Missing required output: docs/${relativePath}`);
}

[
  "index.html",
  "impressum.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "images/type-me-social.png"
].forEach(requireFile);

const htmlFiles = walk(outputRoot).filter((file) => file.endsWith(".html"));
const idsByFile = new Map();

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  idsByFile.set(
    file,
    new Set([...html.matchAll(/\sid=["']([^"']+)["']/gi)].map((match) => match[1]))
  );
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");

  for (const match of html.matchAll(/\s(?:href|src)=["']([^"']+)["']/gi)) {
    const reference = match[1];
    if (
      !reference ||
      /^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(reference)
    ) {
      continue;
    }

    const [rawPath, rawFragment] = reference.split("#", 2);
    let decodedPath;
    try {
      decodedPath = decodeURIComponent(rawPath.split(/[?]/, 1)[0]);
    } catch {
      report(`${path.relative(projectRoot, file)}: invalid URL encoding in ${reference}`);
      continue;
    }

    let target = decodedPath
      ? decodedPath.startsWith("/")
        ? path.join(outputRoot, decodedPath)
        : path.resolve(path.dirname(file), decodedPath)
      : file;

    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
      target = path.join(target, "index.html");
    }

    if (!fs.existsSync(target)) {
      report(
        `${path.relative(projectRoot, file)}: ${reference} points to missing ${path.relative(
          projectRoot,
          target
        )}`
      );
      continue;
    }

    if (rawFragment && target.endsWith(".html")) {
      let fragment;
      try {
        fragment = decodeURIComponent(rawFragment);
      } catch {
        fragment = rawFragment;
      }
      const ids = idsByFile.get(target);
      if (ids && !ids.has(fragment)) {
        report(
          `${path.relative(projectRoot, file)}: ${reference} points to a missing fragment`
        );
      }
    }
  }
}

const indexPath = path.join(outputRoot, "index.html");
if (fs.existsSync(indexPath)) {
  const index = fs.readFileSync(indexPath, "utf8");
  const metadataChecks = [
    ['a descriptive document title', /<title>[^<]*TYPE-ME[^<]*<\/title>/i],
    ['a meta description', /<meta\s+name="description"\s+content="[^"]+"/i],
    ['a canonical URL', /<link\s+rel="canonical"\s+href="https:\/\/methods-research\.org\/?"/i],
    ['Open Graph title metadata', /<meta\s+property="og:title"\s+content="[^"]*TYPE-ME/i],
    ['Open Graph image metadata', /<meta\s+property="og:image"\s+content="https:\/\/methods-research\.org\/images\/type-me-social\.png"/i],
    ['Twitter card metadata', /<meta\s+name="twitter:card"\s+content="summary_large_image"/i],
    ['JSON-LD structured data', /<script\s+type="application\/ld\+json">/i],
    ['descriptive homepage logo text', /<img(?=[^>]*src="(?:\.\/)?images\/logo2\.jpg")(?=[^>]*alt="[^"]+")[^>]*>/i],
    ['descriptive sidebar logo text', /<img(?=[^>]*class="sidebar-logo)(?=[^>]*alt="[^"]+")[^>]*>/i]
  ];

  for (const [label, pattern] of metadataChecks) {
    if (!pattern.test(index)) report(`docs/index.html is missing ${label}`);
  }
}

const robotsPath = path.join(outputRoot, "robots.txt");
if (
  fs.existsSync(robotsPath) &&
  !/Sitemap:\s+https:\/\/methods-research\.org\/sitemap\.xml/i.test(
    fs.readFileSync(robotsPath, "utf8")
  )
) {
  report("docs/robots.txt does not advertise the canonical sitemap");
}

if (errors.length) {
  console.error(`Site validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Site validation passed for ${htmlFiles.length} HTML pages.`);
