import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  producto: Producto = {
    selected: false,
    id: 1,
    nombre: 'Product Name',
    categoria: 'Product Category',
    estado: 'Product Status',
    marca: 'Product Brand',
    detalles: 'Product Details',
    talla: 'talla',
    precio: 9.99,
    user_id: 123
  };

  constructor(
    public productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

   ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('productoId'));
      this.productoService.find(id).subscribe((data: Producto) => {
        this.producto = data;
      });
    });
  }

}
