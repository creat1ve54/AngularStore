import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import AppComponent from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { SliderComponent } from './components/slider/slider.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { MainComponent } from './pages/main/main.component';
import { CatalogMaleComponent } from './pages/catalog-male/catalog-male.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import * as angular from "swiper/angular";
import { CatalogItemComponent } from './components/catalog-item/catalog-item.component';
import { SliderItemComponent } from './components/slider-item/slider-item.component';
import { SearchCatalogItemComponent } from './components/search-catalog-item/search-catalog-item.component';
import { CreateCatalogComponent } from './components/create-catalog/create-catalog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    SliderComponent,
    CatalogComponent,
    CatalogMaleComponent,
    MainComponent,
    CatalogItemComponent,
    SliderItemComponent,
    SearchCatalogItemComponent,
    CreateCatalogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    angular.SwiperModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
