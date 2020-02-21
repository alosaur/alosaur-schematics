import { App } from 'alosaur/mod.ts';

import { HomeArea } from './areas/home/home.area.ts';

const app = new App({
  areas: [HomeArea]
});

app.useStatic({
    root: `${Deno.cwd()}/examples/static/www`,
    index: "index.html",
    baseRoute: '/www/' // or undefined for default route /
});
app.listen();

