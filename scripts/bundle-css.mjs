import fs from "node:fs/promises";
import process from "node:process";
import browserslist from "browserslist";
import { bundle, browserslistToTargets } from "lightningcss";
import chokidar from "chokidar";

let targets = browserslistToTargets(browserslist(">= 1%"));
const cssDir = "app/styles";

async function getCssFiles(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    const cssFiles = files.filter((file) => file.endsWith(".css"));
    return cssFiles?.length > 0 ? cssFiles : null;
  } catch (e) {
    console.error(e);
    return null;
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
    const watcher = chokidar.watch(`${cssDir}/**/*.css`, {
      ignored: /(^|[\/\\])\../,
      persistent: true,
    });

    watcher.on("change", async () => {
      console.clear();
      const cssFiles = await getCssFiles(cssDir);
      if (cssFiles) {
        const t0 = performance.now();
        for (const file of cssFiles) {
          const css = bundleCss(`${cssDir}/${file}`);
          await fs.writeFile(`public/${file}`, css);
        }
        const t1 = performance.now();
        console.log(`CSS build completed in ${(t1 - t0).toFixed(2)}ms`);
      }
    });

    watcher.on("unlink", (path) => {
      fs.unlink(`public/${path.split("/").at(-1)}`);
    });
  } catch (e) {
    console.error(e);
  }
}

async function buildFiles() {
  try {
    const publicCssFiles = await getCssFiles("public");
    const cssFiles = await getCssFiles(cssDir);

    if (publicCssFiles && cssFiles && publicCssFiles.length > cssFiles.length) {
      for (const file of publicCssFiles) {
        if (!cssFiles.includes(file)) {
          await fs.unlink(`public/${file}`);
        }
      }
    }

    if (cssFiles) {
      for (const file of cssFiles) {
        const css = bundleCss(`${cssDir}/${file}`, {
          minify: true,
          targets,
        });
        await fs.writeFile(`public/${file}`, css);
      }
    }
  } catch (e) {
    console.error(e);
  }
}

(async () => {
  if (process.argv.includes("--watch")) {
    watchFiles();
  } else {
    await buildFiles();
  }
})();

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});
