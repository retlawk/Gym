import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { DayoneComponent } from './archive-components/dayone/dayone.component';
import { DaytwoComponent } from './archive-components/daytwo/daytwo.component';
import { UpperComponent } from './components/upper/upper.component';
import { LowerComponent } from './components/lower/lower.component';
import { VisualsComponent } from './components/visuals/visuals.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'upper', component: UpperComponent },
  { path: 'lower', component: LowerComponent },
  { path: 'visuals', component: VisualsComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'archive-dayone-april2019', component: DayoneComponent },
  { path: 'archive-daytwo-april2019', component: DaytwoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
