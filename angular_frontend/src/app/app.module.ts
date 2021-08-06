import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { AtTopComponent } from './components/excersice_for_me/at-top/at-top.component';
import { MyButtonComponent } from './components/excersice_for_me/my-button/my-button.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSmallComponent } from './components/product-small/product-small.component';
import { ProductBigComponent } from './components/product-big/product-big.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AtTopComponent,
    MyButtonComponent,
    ProductListComponent,
    ProductSmallComponent,
    ProductBigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
