import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import browserslist from "browserslist";
import { bundle, browserslistToTargets } from "lightningcss";
import chokidar from "chokidar";

let targets = browserslistToTargets(browserslist(">= 1%"));
const source = "app/styles";
const dest = "public/css";

export async function pathExists(path) {
  return fs
    .access(path)
    .then(() => true)
    .catch(() => false);
}

async function getFilesRecursive(dir) {
  let results = [];

  const list = await fs.readdir(dir, { withFileTypes: true });

  for (const file of list) {
    const filePath = path.resolve(dir, file.name);

    if (file.isDirectory()) {
      const res = await getFilesRecursive(filePath);
      results = results.concat(res);
    } else {
      results.push(filePath);
    }
  }

  return results;
}

async function writeCss(source, dest, config) {
  try {
    const files = await getFilesRecursive(source);

    for (const file of files) {
      const relativePath = path.relative(source, file);
      const destPath = path.dirname(path.join(dest, relativePath));

      (await pathExists(destPath)) ||
        (await fs.mkdir(destPath, { recursive: true }));

      const css = bundleCss(file, config);
      await fs.writeFile(path.join(dest, relativePath), css);
    }
  } catch (e) {
    console.error(e);
  }
}

function bundleCss(file, config) {
  let { code } = bundle({
    filename: file,
    ...(config || {}),
  });

  return code;
}

function watchFiles() {
  try {
    const watcher = chokidar.watch(`${source}/**/*.css`, {
      ignored: /(^|[\/\\])\../,
      persistent: true,
    });

    watcher.on("change", async () => {
      console.clear();
      const t0 = performance.now();
      await writeCss(source, dest);
      const t1 = performance.now();
      console.log(`CSS build completed in ${(t1 - t0).toFixed(2)}ms`);
    });

    watcher.on("unlink", (_path) => {
      fs.unlink(`${dest}/${path.relative(source, _path)}`);
    });
  } catch (e) {
    console.error(e);
  }
}

async function buildFiles() {
  try {
    const publicCssFiles = await getFilesRecursive(dest);
    const cssFiles = await getFilesRecursive(source);

    if (publicCssFiles.length > cssFiles.length) {
      for (const file of publicCssFiles) {
        if (
          !cssFiles.includes(path.resolve(source, path.relative(dest, file)))
        ) {
          await fs.unlink(file);
        }
      }
    }

    if (cssFiles) {
      await writeCss(source, dest, { minify: true, targets });
    }
  } catch (e) {
    console.error(e);
  }
}

(async () => {
  (await pathExists(dest)) || (await fs.mkdir(dest, { recursive: true }));
  if (process.argv.includes("--watch")) {
    watchFiles();
  } else {
    await buildFiles();
  }
})();

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});
