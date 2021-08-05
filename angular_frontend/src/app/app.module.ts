import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JustAComponentComponent } from './components/jsut_a_coponent/just-a-component/just-a-component.component';
import { HallowComponent } from './hallow/hallow.component';

@NgModule({
  declarations: [
    AppComponent,
    JustAComponentComponent,
    HallowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
