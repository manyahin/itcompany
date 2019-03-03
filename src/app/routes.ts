import { CanActivate, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { ServicesComponent } from './pages/services.component';
import { GalleryComponent } from './pages/gallery.component';
import { ProjectsComponent } from './pages/projects.component';
import { WebProjectsComponent } from './pages/web-projects/web-projects.component';
import { MobileProjectsComponent } from './pages/mobile-projects.component';

import { ConfirmGuard } from './confirm.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'projects', component: ProjectsComponent, canActivate: [ConfirmGuard] },
  { path: 'web-projects', component: WebProjectsComponent },
  { path: 'mobile-projects', component: MobileProjectsComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];
