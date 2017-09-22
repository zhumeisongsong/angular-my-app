import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms'

import {Address} from './address';
import {District, provinces, cities, districts} from './chinese-districts';

import {AddressService} from './address.service';

@Component({
  selector: 'address-detail',
  templateUrl: './address-detail.component.html',
  styles: ['./address-detail.component.scss']
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
      province: ['', Validators.required],
      city: ['', Validators.required],
      district: ['', Validators.required],
      address: ['', Validators.required],
      isDefault: ''
    })
  }

  ngOnChanges() {
    this.addressForm.reset({
      consignee: this.address.consignee,
    })
  }

  ngSubmit() {
    alert('in');
    this.address = this.prepareSaveAddress();
    this.addressService.updateAddress(this.address).subscribe();
    this.ngOnChanges();
  }

  prepareSaveAddress(): Address {
    const formModel = this.addressForm.value;

    const saveAddress: Address = {
      id: this.address.id,
      consignee: formModel.consignee as string,
      mobile: formModel.mobile as string,
      province: formModel.province as string,
      city: formModel.city as string,
      district: formModel.district as string,
      address: formModel.address as string,
    };

    return saveAddress;
  };

}
