import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { ServicesComponent } from './pages/services.component';
import { GalleryComponent } from './pages/gallery.component';
import { ProjectsComponent } from './pages/projects.component';
import { WebProjectsComponent } from './pages/web-projects.component';
import { MobileProjectsComponent } from './pages/mobile-projects.component';
import { HomeComponent } from './home.component';

import { ConfirmGuard } from './confirm.guard'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServicesComponent,
    GalleryComponent,
    ProjectsComponent,
    WebProjectsComponent,
    MobileProjectsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConfirmGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
