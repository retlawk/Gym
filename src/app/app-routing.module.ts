import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TimerComponent } from './components/timer/timer.component';
import { QuoteFaderComponent } from './archive-components/quote-fader/quote-fader.component';
import { RulesComponent } from './archive-components/rules/rules.component';
import { Day1Component } from './components/day1/day1.component';
import { Day2Component } from './components/day2/day2.component';
import { Day3Component } from './components/day3/day3.component';
import { Day4Component } from './components/day4/day4.component';
import { Upper201904Component } from './archive-components/upper2019-04/upper2019-04.component';
import { Lower201904Component } from './archive-components/lower2019-04/lower2019-04.component';
import { Upper201905Component } from './archive-components/upper2019-05/upper2019-05.component';
import { Lower201905Component } from './archive-components/lower2019-05/lower2019-05.component';
import { Upper201906Component } from './archive-components/upper2019-06/upper2019-06.component';
import { Lower201906Component } from './archive-components/lower2019-06/lower2019-06.component';
import { Lower201907Component } from './archive-components/lower2019-07/lower2019-07.component';
import { SchemeComponent } from './components/scheme/scheme.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'scheme', component: SchemeComponent },
  { path: 'day1', component: Day1Component },
  { path: 'day2', component: Day2Component },
  { path: 'day3', component: Day3Component },
  { path: 'day4', component: Day4Component },
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
  { path: 'archive-lower2019-07', component: Lower201907Component },
  { path: 'archive-lower2019-07', component: Lower201907Component },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
