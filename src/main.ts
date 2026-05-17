import { bootstrapApplication } from '@angular/platform-browser';
<<<<<<< HEAD
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
=======
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch(err => console.error(err));
>>>>>>> 782a5ea (TP3 - Directives, Pipes et Services)
