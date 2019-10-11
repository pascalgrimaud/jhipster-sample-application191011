import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSampleApplication191011SharedModule } from 'app/shared/shared.module';
import { JhipsterSampleApplication191011CoreModule } from 'app/core/core.module';
import { JhipsterSampleApplication191011AppRoutingModule } from './app-routing.module';
import { JhipsterSampleApplication191011HomeModule } from './home/home.module';
import { JhipsterSampleApplication191011EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSampleApplication191011SharedModule,
    JhipsterSampleApplication191011CoreModule,
    JhipsterSampleApplication191011HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSampleApplication191011EntityModule,
    JhipsterSampleApplication191011AppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class JhipsterSampleApplication191011AppModule {}
