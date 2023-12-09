import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SdlcComponent } from './components/sdlc/sdlc.component';
import { FilesComponent } from './components/files/files.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InitiationFormComponent } from './components/sdlc/forms/initiation/initiation-form.component';
import { FormsLayoutComponent } from './components/sdlc/forms/forms-layout/forms-layout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RequirementComponent } from './components/sdlc/forms/requirement/requirement.component';
import { DesignComponent } from './components/sdlc/forms/design-form/design.component';
import { SdlcSidebarComponent } from './components/sdlc/sdlc-sidebar/sdlc-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SdlcComponent,
    FilesComponent,
    InitiationFormComponent,
    FormsLayoutComponent,
    RequirementComponent,
    DesignComponent,
    SdlcSidebarComponent,
  ],
  imports: [
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
