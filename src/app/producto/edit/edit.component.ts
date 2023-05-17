import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
   newProducto!: Producto
   prod!: Producto
   id!: number;
   form!: FormGroup;
   constructor(
     private route: ActivatedRoute,
     private router: Router,
     private productoService: ProductoService
     ) { }

 ngOnInit(): void {
  this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      categoria: new FormControl('', Validators.required),
      talla:new FormControl('',Validators.required),
      estado: new FormControl('', Validators.required),
      marca: new FormControl('', Validators.required),
      detalles: new FormControl('', Validators.required),
      user_id: new FormControl('2',Validators.required)
    });
  this.route.paramMap.subscribe(params => {
    const id = Number(params.get('productoId'));
    this.productoService.find(id).subscribe((data: Producto) => {
      this.newProducto = data;
    });

  });
      //  const id = this.route.snapshot.params['productoId'];
      //   this.productoService.find(this.id).subscribe((data: Producto) => {
      //     this.prod = data;
      //   });
   }
   updateProducto() {
    console.log(this.form.value);
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('productoId'));
      this.productoService.update(this.form.value, id)
      .subscribe((res:any) => {
        console.log('Producto updated successfully!');
        this.router.navigateByUrl('producto/index');
      });
    });
   }

          get f() {
           return this.form.controls;
         }


  }
