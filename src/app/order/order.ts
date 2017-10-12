export class Order {
  userId: number;

  orderState: number;
  totalPrice: number;
  userNote: string;

  consignee: string;
  province: number;
  city: number;
  district: number;
  address: string;
  mobile: string;

  orderId?: number;
}
