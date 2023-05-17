import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { PedidoService } from 'src/app/pedido/pedido.service';
import { StorageService } from 'src/app/_services/storage.service';
import { Pedido } from 'src/app/pedido/pedido';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  productos: Producto[] = [];
  pedidos:Pedido[]=[];
  currentUser:any;
  currentProducto: Producto | undefined;
  // currentProducto: Producto = {};
  currentIndex = -1;
  currentPage = 0;
  pageSize = 10;
  page: number = 0;
totalPages: number = 0;
totalElements: number = 0;

  title = '';
  Array: any;
  private _: any;
prod: any;

  constructor(
    private productoService: ProductoService,
    private pedidoService:PedidoService,
    private storageService: StorageService
  ) {}

  ngOnInit(): any {
    this.retrievePageableListOfProducts(this.page,this.totalElements);
    this.currentUser = this.storageService.getUser();
  }

  objectKeys(objeto: any) {
    const keys = Object.keys(objeto);

    console.log(keys); // echa un vistazo por consola para que veas lo que hace "Object.keys"

    return keys;
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
  retrievePageableListOfProducts(pageNumber: number, pageSize: number): any {
    this.productoService
      .getDataProductoPaginado(pageNumber, pageSize)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.productos = data.content;
          this.totalPages = data.totalPages;
          this.totalElements=data.totalElements;

        },
        error: (e) => console.error(e),
      });
  }
  onPageChange(event: any) {
    this.page = event.page;
    this.totalElements = event.totalE;
    this.retrievePageableListOfProducts(this.page, this.totalElements);
  }


  refreshList(): void {
    this.retrieveProducts();
    // this.currentProducto = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(producto: Producto, index: number): void {
    // this.currentProducto = producto;
      this.productos[index].selected = !this.productos[index].selected;
  }
  retrievePedidos(): any {
    this.pedidoService.getAll().subscribe({
      next: (data) => {
        this.pedidos = data.content;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
  deleteProducto(id: number): any {
    this.productoService.delete(id).subscribe({
      next: (data) => {
        console.log(data);
        this.retrievePageableListOfProducts(this.page, this.pageSize);
      },
      error: (e) => console.error(e),
    });
  }
  // searchTitle(): void {
  //   this.currentProducto = undefined;
  //   this.currentIndex = -1;

  //   this.productoService.findByTitle(this.title)
  //     .subscribe(
  //       data => {
  //         this.productos = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  // deleteAllTutorials(): void {



  // removeAllTutorials(): void {
  //   this.productoService.deleteAll()
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.refreshList();
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  // searchTitle(): void {
  //   this.currentProducto = {};
  //   this.currentIndex = -1;

  //   this.productoService.(this.title)
  //     .subscribe({
  //       next: (data) => {
  //         this.tutorials = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }
  // productos: Producto[]=[]
  // // newProducto!:Producto
  // // private router!:Router
  // // form!:FormGroup;

  // //Paginacion
  //  page : number = 0
  //  totalElements: number = 0
  //  totalPages: number = 0
  //  numResults: number = 10

  // constructor(public productoService: ProductoService) { }

  // /**
  //  * Write code on Method
  //  *
  //  * @return response()
  //  */
  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.productoService.getAll().subscribe((data:Producto[])=>{
  //     this.productos= data
  //     console.log(this.productos)
  //   })
  // }
  // //   // this.productoService.getDataProductoPaginado(this.page,
  // //   //   this.numResults).subscribe((data:any )  =>{ //: { content: Peticion[]; size: Number; totalPages: Number; }
  // //   //   this.productos = data.content;
  // //   //   this.totalElements = data.size;
  // //   //   this.totalPages = data.totalPages;
  // //   //   console.log(data);

  // //     });

  // //   this.getProductosByPage(this.page, this.numResults)

  // // }

  // // public onOpenModal(producto: Producto, mode:string):void{
  // //   const container = document.getElementById('main-container');
  // //   const button = document.createElement('button');
  // //   button.type = 'button';
  // //   button.style.display = 'none';
  // //   button.setAttribute('data-toggle', 'modal');

  // //   if(mode==='edit'){
  // //     this.newProducto=producto;
  // //     button.setAttribute('data-target','#updateAutorModal')
  // //   }
  // //   container!.appendChild(button);
  // //   button.click();
  // // }

  // deletePost(id:number){
  //   this.productoService.delete(id).subscribe(res=>{
  //     this.productos=this.productos.filter(item=>item.id !== id);
  //     console.log('Post deleted successfully')
  //   })
  // }
  // //paginacion
  //  goToPage(event:any){
  //  this.getProductosByPage(event.page,event.totalE );
  //  }

  //  getProductosByPage(page: Number, numberOfElements: Number) {
  //    this.productoService.getDataProductoPaginado(page,
  //    numberOfElements).subscribe((data )  =>{ //: { content: Peticion[]; size: Number; totalPages: Number; }
  //    this.productos = data.content;
  //    this.totalElements = data.size;
  //    this.totalPages = data.totalPages;
  //    console.log(data);

  //    });
  //    }
  // }
}
