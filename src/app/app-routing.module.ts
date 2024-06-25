import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { TrackfileComponent } from './trackfile/trackfile.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoutComponent } from './logout/logout.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { HoddashComponent } from './hoddash/hoddash.component';
import { SOdashComponent } from './sodash/sodash.component';
import { AhwalformComponent } from './ahwalform/ahwalform.component';
import { TrackformComponent } from './trackform/trackform.component';
import { AuthGuard } from './auth-guard.service';  // Import AuthGuard
import { EmpdashComponent } from './empdash/empdash.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { component: LoginComponent, path: '' },
  { component: LoginComponent, path: 'login' },
  { component: HeaderComponent, path: 'home' },
  {component:DashboardComponent,path:'dashboard'},
  { component: SidebarComponent, path: 'sidebar' },
  {
    path: 'CEO', component: AdmindashComponent, canActivate: [AuthGuard], data: { role: 'admin' }
  },
  { path: 'HOD', component: HoddashComponent, canActivate: [AuthGuard], data: { role: 'hod' } },
  { path: 'SO', component: SOdashComponent, canActivate: [AuthGuard], data: { role: 'so' } },
  { path: 'EMP', component: EmpdashComponent, canActivate: [AuthGuard], data: { role: 'emp' } },

  { component: FormComponent, path: 'form' },
  { component: AhwalformComponent, path: 'ahwalform' },
  { component: TrackformComponent, path: 'transferform' },
  {
    component: TrackfileComponent, path: 'trackfile'
  },

  { component: ChangepassComponent, path: 'changpss' },
  { component: LogoutComponent, path: 'logout' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
