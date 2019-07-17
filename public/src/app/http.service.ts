import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  addCake(newCake){
    return this._http.post('/cakes',newCake);
  }

  showCakes(){
    return this._http.get('/cakes')
  }

  showCake(id){
    return this._http.get(`/cakes/${id}`)
  }
  addRating(id,newRating){
    console.log(newRating);
    return this._http.post(`/cakes/${id}`, newRating)
  }
}
