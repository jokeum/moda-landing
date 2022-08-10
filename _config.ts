import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import parcelCss from "lume/plugins/parcel_css.ts";
import terser from "lume/plugins/terser.ts";
import svgo from "lume/plugins/svgo.ts";
import metas from "lume/plugins/metas.ts";
import inline from "lume/plugins/inline.ts";

const site = lume();

site.use(sass());
site.use(parcelCss());
site.use(terser({
  options: {
    module: false,
  },
}));
site.use(svgo());
site.use(metas());
site.use(inline());

site.ignore("README.md", "LICENSE");

site.copy("img/favicon.ico", "favicon.ico");
site.copy("assets");
site.copy("404.html");

export default site;
