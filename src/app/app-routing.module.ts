import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { UpperComponent } from './components/upper/upper.component';
import { LowerComponent } from './components/lower/lower.component';
import { TimerComponent } from './components/timer/timer.component';
import { Upper2019AprilComponent } from './archive-components/upper2019-april/upper2019-april.component';
import { Lower2019AprilComponent } from './archive-components/lower2019-april/lower2019-april.component';
import { Upper2019MayComponent } from './archive-components/upper2019-may/upper2019-may.component';
import { Lower2019MayComponent } from './archive-components/lower2019-may/lower2019-may.component';
import { QuoteFaderComponent } from './archive-components/quote-fader/quote-fader.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'upper', component: UpperComponent },
  { path: 'lower', component: LowerComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'quote-fader', component: QuoteFaderComponent },
  { path: 'archive-upper2019-april', component: Upper2019AprilComponent },
  { path: 'archive-lower2019-april', component: Lower2019AprilComponent },
  { path: 'archive-upper2019-may', component: Upper2019MayComponent },
  { path: 'archive-lower2019-may', component: Lower2019MayComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
