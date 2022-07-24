import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import sass from "lume/plugins/sass.ts";

const site = lume();

site.use(postcss());
site.use(sass());
site.loadAssets([".js"]);

export default site;
