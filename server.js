import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { dirname, extname, join, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

// fileURLToPath rather than import.meta.dirname, which needs Node 20.11+.
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "dist");
const PORT = Number(process.env.PORT) || 3000;
const HOST = "0.0.0.0";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

/**
 * Routes the client router actually renders — keep in step with src/App.tsx.
 * Anything else still gets the shell (so the in-app not-found page renders and
 * the header/footer stay usable) but with a real 404 status, so crawlers don't
 * index every mistyped URL as a live page.
 */
const ROUTES = new Set(["/", "/services", "/our-work", "/about", "/contact"]);

/** Vite fingerprints everything under /assets, so those can be cached forever. */
function cacheControl(pathname) {
  if (pathname.startsWith("/assets/")) return "public, max-age=31536000, immutable";
  return "public, max-age=0, must-revalidate";
}

/** Resolves a URL path to a file inside dist, or null if it escapes or is missing. */
async function resolveFile(pathname) {
  const candidate = resolve(join(ROOT, normalize(decodeURIComponent(pathname))));
  if (candidate !== ROOT && !candidate.startsWith(ROOT + sep)) return null;

  try {
    const info = await stat(candidate);
    if (info.isDirectory()) return null;
    return { path: candidate, size: info.size };
  } catch {
    return null;
  }
}

function send(res, status, file, pathname) {
  res.writeHead(status, {
    "Content-Type": MIME[extname(file.path).toLowerCase()] ?? "application/octet-stream",
    "Content-Length": file.size,
    "Cache-Control": cacheControl(pathname),
    "X-Content-Type-Options": "nosniff",
  });
  createReadStream(file.path).pipe(res);
}

const server = createServer(async (req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host ?? "localhost"}`);

  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { Allow: "GET, HEAD" }).end("Method Not Allowed");
    return;
  }

  if (pathname === "/healthz") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" }).end("ok");
    return;
  }

  const file = await resolveFile(pathname);
  if (file) {
    send(res, 200, file, pathname);
    return;
  }

  // Client-side routing: any unmatched path that isn't an asset request hands
  // back the shell, so a hard refresh on /services renders instead of 404ing.
  if (!extname(pathname)) {
    const shell = await resolveFile("/index.html");
    if (shell) {
      const known = ROUTES.has(pathname.replace(/\/+$/, "") || "/");
      send(res, known ? 200 : 404, shell, "/index.html");
      return;
    }
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not Found");
});

server.listen(PORT, HOST, () => {
  console.log(`Serving dist/ on http://${HOST}:${PORT}`);
});
