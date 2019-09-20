import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './shared/modules/material.module';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, 
            BrowserAnimationsModule,
            AppRoutingModule,
            ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
            MaterialModule
          ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
