import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() selectOne: any;
  constructor() { }
  averageRating: String
  ngOnInit() {
    this.getAvg(this.selectOne);
  }
  getAvg(selectOne){
    console.log("in getavg", selectOne)
    var sum=0;
    for(let comment of selectOne.comments){
      sum+=comment.rating
    }
    if(sum>0){
      this.averageRating=(sum/(selectOne.comments.length)).toString().substring(0,3);
    }else{
      this.averageRating = "0";
    }
    console.log(this.averageRating)
    return this.averageRating
  }
}
