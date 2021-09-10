import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UsersGuard } from "./users.guard";
import { InstructionsComponent } from "./instructions/instructions.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'sidenav', component: SidenavComponent, canActivate: [UsersGuard]},
  {path: 'home', component: HomeComponent, canActivate: [UsersGuard]},
  {path: 'instructions', component: InstructionsComponent, canActivate: [UsersGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
