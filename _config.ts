import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import sass from "lume/plugins/sass.ts";
import terser from "lume/plugins/terser.ts";
import svgo from "lume/plugins/svgo.ts";
import metas from "lume/plugins/metas.ts";

const site = lume();

site.use(postcss());
site.use(sass());
site.use(terser({
  options: {
    module: false,
  },
}));
site.use(svgo());
site.use(metas());
site.ignore("README.md", "CHANGELOG.md");
site.copy("img/favicon.ico", "favicon.ico");

export default site;
