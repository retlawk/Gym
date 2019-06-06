import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { UpperComponent } from './components/upper/upper.component';
import { LowerComponent } from './components/lower/lower.component';
import { TimerComponent } from './components/timer/timer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimerFormatPipe } from './pipes/timer-format.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { QuoteFaderComponent } from './archive-components/quote-fader/quote-fader.component';
import { Upper2019AprilComponent } from './archive-components/upper2019-april/upper2019-april.component';
import { Lower2019AprilComponent } from './archive-components/lower2019-april/lower2019-april.component';
import { Upper2019MayComponent } from './archive-components/upper2019-may/upper2019-may.component';
import { Lower2019MayComponent } from './archive-components/lower2019-may/lower2019-may.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ArchiveComponent,
    UpperComponent,
    LowerComponent,
    TimerComponent,
    TimerFormatPipe,
    QuoteFaderComponent,
    Upper2019AprilComponent,
    Lower2019AprilComponent,
    Upper2019MayComponent,
    Lower2019MayComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
