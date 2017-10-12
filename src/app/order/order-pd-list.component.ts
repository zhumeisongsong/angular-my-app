import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';

import{ProductService}from '../product/product.service';

import {Product} from '../product/product';

@Component({
  selector: 'order-pd',
  templateUrl: 'order-pd-list.component.html',
  styleUrls: ['order-pd-list.component.scss']
})

export class OrderPdListComponent implements OnInit {
  @Input('stateFlag') stateFlag: boolean;
  @Input('idList') idList: any;
  products: Product[] = [];

  totalModel = [];
  order: object;

  @Output() orderTotal = new EventEmitter<any>();

  constructor(private productService: ProductService,) {
  }

  ngOnInit() {
    //products cyclic fetch
    this.productService.getProduct(this.idList)
      .then(product => {
        product.count = 1;
        product.orderIndex = 1;

        this.products.push(product);

        this.totalModel.push(
          {"price": product.price, "count": 1}
        );

        this.emitTotalInfo(this.totalModel);
      });
  }

  emitTotalInfo(totalModel) {
    let countTotal = this.countTotal(totalModel);

    this.order = {
      "price": countTotal.price,
      "count": countTotal.count,
    };

    this.orderTotal.emit(this.order);
  }

  countTotal(totalModel) {
    let price: number = 0;
    let count: number = 0;
    let countTotal: object;

    for (let item of totalModel) {
      price = +item.price * item.count;
      count = +item.count;
    }

    return countTotal = {"price": price, "count": count};
  }

  //change product number
  inputCount(index: number, count: any) {
    if (count == '0') {
      alert('输入超出范围');
      this.totalModel[index - 1].count = 1;
      this.products[index - 1].count = 1;
    }else{
      this.totalModel[index - 1].count = count;
        this.emitTotalInfo(this.totalModel);
    }
  }

  addCount(index: number) {
    if (this.totalModel[index - 1].count == 99) {
      return this.totalModel[index - 1].count = 99;
    } else {
      this.totalModel[index - 1].count++;
      this.products[index - 1].count++;

      this.emitTotalInfo(this.totalModel);
    }
  }

  minusCount(index: number) {
    if (this.totalModel[index - 1].count === 1) {
      return this.totalModel[index - 1].count = 1;
    } else {
      this.totalModel[index - 1].count--;
      this.products[index - 1].count--;
      this.emitTotalInfo(this.totalModel);
    }
  }

}
