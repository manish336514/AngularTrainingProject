import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}
//Entry point
// Root component will be started up
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
