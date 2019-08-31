import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TimerComponent } from './components/timer/timer.component';
import { QuoteFaderComponent } from './archive-components/quote-fader/quote-fader.component';
import { RulesComponent } from './archive-components/rules/rules.component';
import { Day1Component } from './archive-components/day1-2019-08/day1.component';
import { Day2Component } from './archive-components/day2-2019-08/day2.component';
import { Day3Component } from './archive-components/day3-2019-08/day3.component';
import { Day4Component } from './archive-components/day4-2019-08/day4.component';
import { Upper201904Component } from './archive-components/upper2019-04/upper2019-04.component';
import { Lower201904Component } from './archive-components/lower2019-04/lower2019-04.component';
import { Upper201905Component } from './archive-components/upper2019-05/upper2019-05.component';
import { Lower201905Component } from './archive-components/lower2019-05/lower2019-05.component';
import { Upper201906Component } from './archive-components/upper2019-06/upper2019-06.component';
import { Lower201906Component } from './archive-components/lower2019-06/lower2019-06.component';
import { Lower201907Component } from './archive-components/lower2019-07/lower2019-07.component';
import { SchemeComponent } from './components/scheme/scheme.component';
import { Upper201907Component } from './archive-components/upper2019-07/upper2019-07.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'scheme', component: SchemeComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'quote-fader', component: QuoteFaderComponent },
  { path: 'archive-upper2019-04', component: Upper201904Component },
  { path: 'archive-lower2019-04', component: Lower201904Component },
  { path: 'archive-upper2019-05', component: Upper201905Component },
  { path: 'archive-lower2019-05', component: Lower201905Component },
  { path: 'archive-upper2019-06', component: Upper201906Component },
  { path: 'archive-lower2019-06', component: Lower201906Component },
  { path: 'archive-upper2019-07', component: Upper201907Component },
  { path: 'archive-lower2019-07', component: Lower201907Component },
  { path: 'archive-day1', component: Day1Component },
  { path: 'archive-day2', component: Day2Component },
  { path: 'archive-day3', component: Day3Component },
  { path: 'archive-day4', component: Day4Component },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
