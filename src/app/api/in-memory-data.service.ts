import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const products = [
      {
        id: 1,
        productName: "这是一首简单的小情歌",
        listIntro: "唱出人们心头的曲折",
        detailIntro: "这是一首简单的小情歌,唱出人们心头的曲折,我想我很快乐，有一个歌颂者",
        price: 260,
        originalPrice: 300,
        coverUrl: "/assets/image/list-cover.jpg",
        userPurchase: 100,
        richText: "商品介绍详情",
      },
      {
        id: 2,
        productName: "222这是一首简单的小情歌",
        listIntro: "222唱出人们心头的曲折",
        detailIntro: "222这是一首简单的小情歌,唱出人们心头的曲折,我想我很快乐，有一个歌颂者",
        price: 220,
        originalPrice: 300,
        coverUrl: "/assets/image/list-cover.jpg",
        userPurchase: 99,
        richText: "222商品介绍详情",
      },
      {
        id: 3,
        productName: "333这是一首简单的小情歌",
        listIntro: "333唱出人们心头的曲折",
        detailIntro: "333这是一首简单的小情歌,唱出人们心头的曲折,我想我很快乐，有一个歌颂者",
        price: 200,
        originalPrice: 300,
        coverUrl: "/assets/image/list-cover.jpg",
        userPurchase: 88,
        richText: "333商品介绍详情",
      }
    ];

    const orders = [
      {
        id:1,
        userId:1,
        orderState:0,
        consignee: "smm",
        province: 22,
        city: 33,
        district: 18,
        address: "333333",
        mobile: "18108272714",
        totalCount:2,
        totalPrice:300,
    }
    ];

    const orderPds = [];


    const addresses = [
      {
        addresssId: 1,
        userId: 1,
        consignee: 'Whirlwind',
        mobile: '18108277715',
        province: 1,
        city: 11,
        district: 22,
        address: '这是一个美丽的地方',
        isDefault: 1,
        isPickup: 1
      },
    ];


    return {products, orders, orderPds, addresses};
  }

}
