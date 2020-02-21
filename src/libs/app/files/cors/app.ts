import { App, CorsBuilder } from 'alosaur/mod.ts';

import { HomeArea } from './areas/home/home.area.ts';

const app = new App({
  areas: [HomeArea]
});

app.useCors(
  new CorsBuilder()
  .WithOrigins('*')
  .AllowAnyMethod()
  .AllowAnyHeaders()
);

app.listen();
