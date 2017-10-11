export class Address {
  id = 0; //default add new
  consignee = '';
  mobile = '';
  province ='';
  city = '';
  district='';
  address ='';
}

export const addresses: Address[] = [
  {
    id: 1,
    consignee: 'Whirlwind',
    mobile:'18108277715',
    province: 'CA',
    city: 'Anywhere',
    district:'青羊区',
    address: '这是一个美丽的地方',

  },
  {
    id: 2,
    consignee: 'Whirlwinwwwwd',
    mobile:'18108276615',
    province: 'MD',
    city: 'Anywhere',
    district:'青羊区',
    address: '这是一个丑陋的地方',

  },
];
