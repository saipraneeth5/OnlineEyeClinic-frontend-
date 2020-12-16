import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './module/doctor/doctor.component';
import { PatientComponent } from './module/patient/patient.component';
import { ReportComponent } from './module/report/report.component';
import { AppointmentComponent } from './module/appointment/appointment.component';
import { SpectaclesComponent } from './module/spectacles/spectacles.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { TestsComponent } from './module/tests/tests.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DoctorServiceComponent } from './service/doctor-service/doctor-service.component';
import { AppointmentServiceComponent } from './service/appointment-service/appointment-service.component';
import { PatientServiceComponent } from './service/patient-service/patient-service.component';
import { ReportServiceComponent } from './service/report-service/report-service.component';
import { SpectaclesServiceComponent } from './service/spectacles-service/spectacles-service.component';
import { TestsServiceComponent } from './service/tests-service/tests-service.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    ReportComponent,
    AppointmentComponent,
    SpectaclesComponent,
    HomepageComponent,
    GalleryComponent,
    TestsComponent,
    ContactUsComponent,
    NavbarComponent,
    DoctorServiceComponent,
    AppointmentServiceComponent,
    PatientServiceComponent,
    ReportServiceComponent,
    SpectaclesServiceComponent,
    TestsServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
