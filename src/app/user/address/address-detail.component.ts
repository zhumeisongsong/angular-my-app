import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms'

import {Address} from './address';
import {provinces, cities, districts} from './chinese-districts';

import {AddressService} from './address.service';

@Component({
  selector: 'address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.scss']
})

export class AddressDetailComponent implements OnChanges {


  @Input() address: Address;


  addressForm: FormGroup;
  provinces = provinces;
  cities = cities;
  districts = districts;

  constructor(private fb: FormBuilder,
              private addressService: AddressService) {
    //inject FormBuilder
    this.createForm();
  }

  createForm() {
    this.addressForm = this.fb.group({
      consignee: ['', Validators.required],
      mobile: ['', Validators.required],
      province: [, Validators.required],
      city: [, Validators.required],
      district: [, Validators.required],
      address: ['', Validators.required],
    })
  }

  ngOnChanges() {
    this.addressForm.reset({
      consignee: this.address.consignee,
    })
  }

  ngSubmit() {
    alert('in');
    // this.address = this.prepareSaveAddress();
    // this.addressService.updateAddress(this.address).subscribe();
    // this.ngOnChanges();
  }

  prepareSaveAddress(): Address {
    const formModel = this.addressForm.value;

    const saveAddress: Address = {
      addressId: this.address.addressId,
      userId:localStorage.getItem('UserId'),
      consignee: formModel.consignee as string,
      mobile: formModel.mobile as string,
      province: formModel.province as number,
      city: formModel.city as number,
      district: formModel.district as number,
      address: formModel.address as string,
    };

    return saveAddress;
  };

}
