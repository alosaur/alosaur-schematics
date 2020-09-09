import { App } from "alosaur/mod.ts";
import { ViewRenderConfig } from "alosaur/src/models/view-render-config.ts";

import { HomeArea } from "./areas/home.area.ts";
import { CoreArea } from "./areas/core.area.ts";
import { engine, indexHtml } from "./engine.ts";

const app = new App({
  areas: [HomeArea, CoreArea],
  logging: false,
});

app.useViewRender({
  type: "angular",
  basePath: `${Deno.cwd()}/examples/angular/views/`,
  getBody: async (path: string, model: Object, config: ViewRenderConfig) =>
    await engine.render({ document: indexHtml, url: path }),
});

app.listen();
