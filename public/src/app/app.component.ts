import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _httpService: HttpService){}
  newCake: Object;
  cakes :any;
  selectedCake: any;
  newRating: any;

  ngOnInit(){
    this.newCake = {baker:"", imageUrl:""}
    this.newRating = {rating:5, comment:""}
    this.getCakes();
  }

  onSubmit(newCake){
    let Observable = this._httpService.addCake(this.newCake);
    Observable.subscribe(data => {
      console.log("data from post:",data)
    })
    this.getCakes();

  }
  getCakes(){
    let tempObservable = this._httpService.showCakes();
    tempObservable.subscribe(data => {
      console.log("Got our cakes!" , data);
      this.cakes = data['cakes'];
    });
  }

  onSelect(id){
    let tempObservable = this._httpService.showCake(id);
    tempObservable.subscribe(data => {
      console.log("Got our cake!" , data);
      this.selectedCake = data['cake'];
    })
  }
  addRating(id,newRating){
    console.log(newRating)
    let Observable = this._httpService.addRating(id,newRating);
    Observable.subscribe(data => {
      console.log("data from new comment NOW in component.ts",data)
    })
    
  }
}
