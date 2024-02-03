import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { HttpClientModule } from '@angular/common/http'
import { NewsapiservicesService } from './services/newsapiservices.service';
import { TechnologyComponent } from './technology/technology.component';
import { BusinessComponent } from './business/business.component';
import { TechcrunchComponent } from './techcrunch/techcrunch.component';
import { DomainComponents } from './domain/domain.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnologyComponent,
    BusinessComponent,
    TechcrunchComponent,
    DomainComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
