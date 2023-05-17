import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Producto } from './producto';
import { UserService } from '../_services/user.service';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  private apiURL ="http://localhost:8080";
   /*------------------------------------------

  --------------------------------------------

  Http Header Options

  --------------------------------------------

  --------------------------------------------*/

  httpOptions = {

    headers: new HttpHeaders({

      'Content-Type': 'application/json',

    })

  }


  /*------------------------------------------

  --------------------------------------------

  Created constructor

  --------------------------------------------

  --------------------------------------------*/


  constructor(private httpClient:HttpClient) { }

  /**

   * Write code on Method

   *

   * @return response()

   */

  getAll(): Observable<any> {



    return this.httpClient.get(this.apiURL + '/producto/')

    .pipe(

      catchError(this.errorHandler)

    )

  }

  /**

   * Write code on Method

   *

   * @return response()

   */
  create(producto: Producto): Observable<any> {
    return this.httpClient.post(this.apiURL + '/producto/create/' + producto.user_id, producto, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }


  find(id:number):Observable<any>{
    console.log('id', id); // Add this line to check the value of id
    return this.httpClient.get(this.apiURL+'/producto/'+id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  update(producto:Producto, id:number): Observable<any> {

    return this.httpClient.put(this.apiURL + '/producto/edit/' + id, JSON.stringify(producto), this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/producto/delete/' + id, this.httpOptions)

    .pipe(
      catchError(this.errorHandler)
    )
  }

  getDataProductoPaginado(page: Number, numberOfElements: Number) {
   const url = `${this.apiURL}/producto?page=${page}&size=${numberOfElements}`;
   return this.httpClient.get<any>(url).pipe(

     catchError(this.errorHandler)

   )
}

getAllProducto(): Observable<any> {



  return this.httpClient.get(this.apiURL + '/producto')



  .pipe(

    catchError(this.errorHandler)

  )

}
update2(producto: Producto): Observable<any>{

  return this.httpClient.put(this.apiURL + '/producto/edit/' , producto, this.httpOptions)


  .pipe(

    catchError(this.errorHandler)

  )
 }
 errorHandler(error:any) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}

}
