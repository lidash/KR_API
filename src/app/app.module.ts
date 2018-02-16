import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FreeapiComponent } from './freeapi/freeapi.component';
import { HttpClientModule } from '@angular/common/http';
import { FreeapiService } from './freeapi.service';

@NgModule({
  declarations: [
    AppComponent,
    FreeapiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FreeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
