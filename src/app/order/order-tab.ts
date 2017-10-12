export class OrderTab {
  id:number;
  name: string;
  title: string;
  iconUrl:string;
}

export const ORDERTABS =[
  {
    id: 1,
    name:'purchase',
    title:'待付款',
    iconUrl:'../../assets/image/icon/pay.svg'
  },
  {
    id: 2,
    name:'deliver',
    title:'待收货',
    iconUrl:'../../assets/image/icon/deliver.svg'
  },
  {
    id: 3,
    name:'finish',
    title:'已完成',
    iconUrl:'../../assets/image/icon/order.svg'
  },
];

