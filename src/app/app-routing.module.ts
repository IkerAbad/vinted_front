import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { IndexComponent } from './producto/index/index.component';
import { ViewComponent } from './producto/view/view.component';
import { CreateComponent } from './producto/create/create.component';
import { EditComponent } from './producto/edit/edit.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  //ProductoRouting
  { path: 'producto', redirectTo:'producto/index', pathMatch: 'full'},
  { path: 'producto/index', component: IndexComponent },
  { path: 'producto/:productoId/view', component: ViewComponent },
  { path: 'producto/create', component: CreateComponent},
  {path: 'producto/delete', component:IndexComponent},
  { path: 'producto/view/:productoId', component: ViewComponent },
  { path: 'producto/edit/:productoId', component: EditComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
