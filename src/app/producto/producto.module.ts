import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ViewComponent } from './view/view.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    IndexComponent,
    PaginationComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  
  ]
})
export class ProductoModule { }
