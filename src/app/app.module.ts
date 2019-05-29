import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { DayoneComponent } from './archive-components/dayone/dayone.component';
import { DaytwoComponent } from './archive-components/daytwo/daytwo.component';
import { UpperComponent } from './components/upper/upper.component';
import { LowerComponent } from './components/lower/lower.component';
import { VisualsComponent } from './components/visuals/visuals.component';
import { Lower2019AprilComponent } from './archive-components/lower2019-april/lower2019-april.component';
import { Upper2019AprilComponent } from './archive-components/upper2019-april/upper2019-april.component';
import { TimerComponent } from './components/timer/timer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimerFormatPipe } from './pipes/timer-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ArchiveComponent,
    DayoneComponent,
    DaytwoComponent,
    UpperComponent,
    LowerComponent,
    VisualsComponent,
    Lower2019AprilComponent,
    Upper2019AprilComponent,
    TimerComponent,
    TimerFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxEchartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
