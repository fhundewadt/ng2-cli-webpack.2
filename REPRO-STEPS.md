**1. OS.**
Linux  4.6.4-1-ARCH #1 SMP PREEMPT Mon Jul 11 19:12:32 CEST 2016 x86_64 GNU/Linux

**2. Versions.**
angular-cli: 1.0.0-beta.11-webpack.2
node: 6.3.1

**3. Repro steps.**
`ng new dash`

`ng generate component dashboard`

Run `ng serve` and watch out for the changes

Move content from `./index.ts` to `app/index.ts` and delete it

Add `app/dashboard/dashboard.routes.ts` and content

```
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

export const dashboardRoutes: Routes = [
  {
    path       : 'dashboard',
    component  : DashboardComponent,
    canActivate: [ AuthGuardService ],
  }
];
```

Add `app/app.routes.ts` and content

```
import { Routes, provideRouter } from "@angular/router";

import { dashboardRoutes } from './dashboard/dashboard.routes';

const routes: Routes = [
  ...dashboardRoutes,
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' },
];
export const appRouterProviders = [
  provideRouter(routes)
];
```

modify `app/app.module.ts` adding imports and providers

```
...
import { DashboardComponent } from './dashboard/dashboard.component';
...
@NgModule({
  imports        : [
    ...
    RouterModule,
  ],
  providers      : [
    appRouterProviders,
  ],
  ...
})
...
```

Add a new component where no route is needed `ng generate shared/cmpnt`

The `ng generate component` is messing with me.
Locate `/shared/` folder in project root and copy contents of `index.ts` to `root/src/app/shared/index.ts` and delete the the `root/shared` folder

Add `<router-outlet></router-outlet>` to `app/app.component.html`

Wait on webpack rebuild

```
Version: webpack 2.1.0-beta.18
Time: 4353ms
              Asset       Size  Chunks             Chunk Names
     main.bundle.js    2.41 MB    0, 2  [emitted]  main
polyfills.bundle.js     228 kB    1, 2  [emitted]  polyfills
          inline.js    4.96 kB       2  [emitted]  inline
           main.map    2.84 MB    0, 2  [emitted]  main
      polyfills.map     287 kB    1, 2  [emitted]  polyfills
         inline.map    5.13 kB       2  [emitted]  inline
         index.html  477 bytes          [emitted]  
chunk    {0} main.bundle.js, main.map (main) 2.37 MB {1} [initial] [rendered]
chunk    {1} polyfills.bundle.js, polyfills.map (polyfills) 195 kB {2} [initial] [rendered]
chunk    {2} inline.js, inline.map (inline) 0 bytes [entry] [rendered]
Child html-webpack-plugin for "index.html":
         Asset    Size  Chunks       Chunk Names
    index.html  2.4 kB       0       
    chunk    {0} index.html 342 bytes [entry] [rendered]
```

The browser hangs at `Loading...`

**4. The log given by the failure.**
```
zone.js:101
GET http://localhost:4200/app.component.css 404 (Not Found)
scheduleTask @ zone.js:101
ZoneDelegate.scheduleTask @ zone.js:336
Zone.scheduleMacroTask @ zone.js:273
(anonymous function) @ zone.js:122
send @ VM148:3
XHRImpl.get @ xhr_impl.js:52
DirectiveNormalizer._fetch @ directive_normalizer.js:43
(anonymous function) @ directive_normalizer.js:145
DirectiveNormalizer._loadMissingExternalStylesheets @ directive_normalizer.js:145
DirectiveNormalizer.normalizeExternalStylesheets @ directive_normalizer.js:127
(anonymous function) @directive_normalizer.js:74
ZoneDelegate.invoke @ zone.js:323
Zone.run @ zone.js:216
(anonymous function) @ zone.js:571
ZoneDelegate.invokeTask @ zone.js:356
Zone.runTask @ zone.js:256
drainMicroTaskQueue @ zone.js:474

zone.js:461 
Unhandled Promise rejection: Failed to load app.component.css ; Zone: <root> ; Task: Promise.then ; Value: Failed to load app.component.css
consoleError @ zone.js:461
_loop_1 @ zone.js:490
drainMicroTaskQueue @ zone.js:494
ZoneTask.invoke @ zone.js:426

zone.js:463 
Error: Uncaught (in promise): Failed to load app.component.css(…)
consoleError @ zone.js:463
_loop_1 @ zone.js:490
drainMicroTaskQueue @ zone.js:494
ZoneTask.invoke @ zone.js:426
```

**5. Mention any other details that might be useful.**
N/A
