import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const products = [
      {
        id:11,
        name: '这是一首简单的小情歌',
        listIntro: 'this is list intro1',
        detailIntro:'this is detail intro1',
        price: 33,
        originalPrice:44,
        coverUrl: './assets/image/list-cover.jpg',
        richText:'这是商品详情 想试用markdown的语法来做',
        userPurchase:10,
      },
      {
        id:12,
        name: '唱出人们心头的曲折2',
        listIntro: 'this is list intro2',
        detailIntro:'this is detail intro2',
        price: 44,
        originalPrice:55,
        coverUrl: './assets/image/list-cover.jpg',
        // storeName:'FlowerPlus',
        // storeId:1,
        richText:'这是商品详情 想试用markdown的语法来做',
        userPurchase:12,
      },
      {
        id:13,
        name: '唱出人们心头的曲折3',
        listIntro: 'this is list intro3',
        detailIntro:'this is detail intro3',
        price: 55,
        originalPrice:66,
        coverUrl: './assets/image/list-cover.jpg',
        // storeName:'FlowerPlus',
        // storeId:1,
        richText:'这是商品详情 想试用markdown的语法来做',
        userPurchase:10,
      },
      {
        id:14,
        name: '唱出人们心头的曲折4',
        listIntro: 'this is list intro4',
        detailIntro:'this is detail intro4',
        price: 66,
        originalPrice:88,
        coverUrl: './assets/image/list-cover.jpg',
        // storeName:'FlowerPlus',
        // storeId:1,
        richText:'这是商品详情 想试用markdown的语法来做',
        userPurchase:10,
      },
    ];
    return{products}
  }

}
