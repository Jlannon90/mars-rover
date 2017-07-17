import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { RoverFormComponent } from './rover-form/rover-form.component';
import { UserPhotosListComponent } from './user-photos-list/user-photos-list.component';



const appRoutes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'rover',
  component: RoverFormComponent
},
{
  path: 'user/photos',
  component: UserPhotosListComponent
}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
