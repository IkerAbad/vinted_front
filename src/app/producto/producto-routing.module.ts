import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'producto', redirectTo: 'producto/index', pathMatch: 'full'},
  { path: 'producto/index', component: IndexComponent },
  { path: 'producto/view/:productoId', component: ViewComponent },
  { path: 'producto/create', component: CreateComponent},
  { path: 'producto/edit/:productoId', component: EditComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ProductoRoutingModule { }
