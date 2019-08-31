import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TimerComponent } from './components/timer/timer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimerFormatPipe } from './pipes/timer-format.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { QuoteFaderComponent } from './archive-components/quote-fader/quote-fader.component';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RulesComponent } from './archive-components/rules/rules.component';
import { Upper201904Component } from './archive-components/upper2019-04/upper2019-04.component';
import { Lower201904Component } from './archive-components/lower2019-04/lower2019-04.component';
import { Upper201905Component } from './archive-components/upper2019-05/upper2019-05.component';
import { Lower201905Component } from './archive-components/lower2019-05/lower2019-05.component';
import { Upper201906Component } from './archive-components/upper2019-06/upper2019-06.component';
import { Lower201906Component } from './archive-components/lower2019-06/lower2019-06.component';
import { Upper201907Component } from './archive-components/upper2019-07/upper2019-07.component';
import { Lower201907Component } from './archive-components/lower2019-07/lower2019-07.component';
import { Day1Component } from './archive-components/day1-2019-08/day1.component';
import { Day2Component } from './archive-components/day2-2019-08/day2.component';
import { Day3Component } from './archive-components/day3-2019-08/day3.component';
import { Day4Component } from './archive-components/day4-2019-08/day4.component';
import { SchemeComponent } from './components/scheme/scheme.component';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ArchiveComponent,
    Day1Component,
    Day2Component,
    Day3Component,
    Day4Component,
    TimerComponent,
    TimerFormatPipe,
    QuoteFaderComponent,
    Upper201904Component,
    Lower201904Component,
    Upper201905Component,
    Lower201905Component,
    Upper201906Component,
    Lower201906Component,
    Upper201907Component,
    Lower201907Component,
    RulesComponent,
    SchemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxEchartsModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ 
    provide: HAMMER_GESTURE_CONFIG, 
    useClass: MyHammerConfig 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
