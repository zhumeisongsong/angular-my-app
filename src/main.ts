import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

// // The browser platform without a compiler
// import { platformBrowser } from '@angular/platform-browser';
//
// // The app module factory produced by the static offline compiler
// import { AppModuleNgFactory } from './app/app.module.ngfactory';
//
// // Launch with the app module factory.
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
