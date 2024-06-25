import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { TrackfileComponent } from './trackfile/trackfile.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserServiceService } from './user-service.service';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { TrackformComponent } from './trackform/trackform.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdmindashComponent } from './admindash/admindash.component';
import { HoddashComponent } from './hoddash/hoddash.component';
import { SOdashComponent } from './sodash/sodash.component';
import { MasterComponent } from './master/master.component';
import { AhwalformComponent } from './ahwalform/ahwalform.component';
import { TransferformComponent } from './transferform/transferform.component';
import { EmpdashComponent } from './empdash/empdash.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FormComponent,
    TrackfileComponent,
    ChangepassComponent,
    SidebarComponent,
    HomeComponent,
    LogoutComponent,
    TrackformComponent,
    AdmindashComponent,
    HoddashComponent,
    SOdashComponent,
    MasterComponent,
    AhwalformComponent,
    TransferformComponent,
    EmpdashComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [UserServiceService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
