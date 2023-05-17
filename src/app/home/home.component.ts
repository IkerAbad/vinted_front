import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { ProductoService } from '../producto/producto.service';
import { StorageService } from 'src/app/_services/storage.service';
import { Producto } from '../producto/producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  productos: Producto[] = [];
  // currentProducto: Producto = {};
  totalPages = 0;
  currentIndex = -1;
  currentPage = 0;
  pageSize = 10;
  title = '';
  Array: any;
  page: any;
  private _: any;

  constructor(private userService: UserService,
    private productoService: ProductoService,
    private storageService: StorageService) { }

  ngOnInit(): void {
    this.retrieveProducts();
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });
  }
  retrieveProducts(): any {
    this.productoService.getAllProducto().subscribe({
      next: (data) => {
        this.productos = data.content;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

}
