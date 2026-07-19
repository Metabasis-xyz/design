/* Fallback loader: fetches .jsx sources and evaluates them (Babel required).
   Used only when the generated _ds_bundle.js is not present yet. */
(function () {
  const cache = {};
  function resolve(spec, baseUrl) { return new URL(spec, baseUrl).href; }
  async function loadModule(url) {
    if (cache[url]) return cache[url];
    const src = await (await fetch(url)).text();
    const out = Babel.transform(src, { presets: [["react", { runtime: "classic" }]], plugins: ["transform-modules-commonjs"], filename: url }).code;
    const deps = {};
    const re = /require\((?:"|')([^"']+)(?:"|')\)/g;
    let m;
    const specs = [];
    while ((m = re.exec(out))) specs.push(m[1]);
    for (const spec of specs) {
      if (spec === "react" || spec === "react/jsx-runtime") { deps[spec] = window.React; continue; }
      if (spec === "react-dom") { deps[spec] = window.ReactDOM; continue; }
      deps[spec] = (await loadModule(resolve(spec, url))).exports;
    }
    const module = { exports: {} };
    cache[url] = module;
    new Function("require", "module", "exports", out)(
      (spec) => deps[spec], module, module.exports
    );
    return module;
  }
  /* dsLoad(paths[, baseUrl]) -> merged exports of all entry modules */
  window.dsLoad = async function (paths, baseUrl) {
    const base = baseUrl || location.href;
    const all = {};
    for (const p of [].concat(paths)) Object.assign(all, (await loadModule(resolve(p, base))).exports);
    return all;
  };
  /* dsNamespace() -> the generated bundle's namespace object, if loaded */
  window.dsNamespace = function (probeKey) {
    for (const k of Object.getOwnPropertyNames(window)) {
      try { const v = window[k]; if (v && typeof v === "object" && v[probeKey]) return v; } catch (e) {}
    }
    return null;
  };
  /* dsBoot(bundleUrl, probeKey, entryPaths) -> namespace from generated bundle if available, else loader fallback */
  window.dsBoot = async function (bundleUrl, probeKey, entries) {
    try {
      const head = await fetch(bundleUrl, { method: "HEAD" });
      if (head.ok) {
        await new Promise((res) => {
          const s = document.createElement("script");
          s.src = bundleUrl; s.onload = res; s.onerror = res;
          document.head.appendChild(s);
        });
        const ns = window.dsNamespace(probeKey);
        if (ns) return ns;
      }
    } catch (e) {}
    return window.dsLoad(entries);
  };
})();
