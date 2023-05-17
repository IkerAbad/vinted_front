import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!:FormGroup;

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
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
  };

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit() {
    console.log(this.form.value);
    this.productoService.create(this.form.value).subscribe((res:any) => {
      console.log('Producto created successfully!');
      this.router.navigateByUrl('producto/index');
    });
  }


}
