import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompdemoComponent } from './compdemo/compdemo.component';
import { ApplyComponent } from './apply/apply.component';
import { LoginComponent } from './login/login.component';
import {ServicedemoService} from './servicedemo.service';

@NgModule({
  declarations: [
    AppComponent,
    CompdemoComponent,
    ApplyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServicedemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
