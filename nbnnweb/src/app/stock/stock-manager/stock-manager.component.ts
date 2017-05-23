import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})
export class StockManagerComponent implements OnInit {
 private  stocks:Array<Stock>;
  constructor() { }

  ngOnInit() {

    this.stocks=[
      new Stock(1,'000001','深发展',20.00,'金融',3,['金融']),
      new Stock(1,'000001','深发展',20.00,'金融',2,['金融'])
    ];
  }
}

export class Stock{
  constructor(
    public id:number,
    public code:string,
    public name:string,
    public price:number,
    public  desc:string,
    public  rating:number,
    public  categories:Array<string>
  ){

  }

}
