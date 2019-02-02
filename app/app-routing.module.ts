import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompdemoComponent } from './compdemo/compdemo.component';
import { ApplyComponent } from './apply/apply.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:"home",component:CompdemoComponent},
{path:"appl",component:ApplyComponent},
{path:"login",component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
