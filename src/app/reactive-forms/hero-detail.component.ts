import {Component, Input, OnChanges} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Address, Hero, states} from './data-model';
import {HeroService} from "./hero.service";

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent implements OnChanges {
  @Input() hero: Hero;

  heroForm: FormGroup; //Explicitly declare
  // nameChangeLog: string[] = [];
  states = states;

  constructor(private fb: FormBuilder,
              private heroService: HeroService) {
    //inject FormBuilder
    this.createForm(); //Call createForm in the constructor
    // this.logNameChange();
  }

  createForm() {
    this.heroForm = this.fb.group({ //a factory method that creates a FormGroup
      name: ['', Validators.required], //the FormControl called "name"
      secretLairs: this.fb.array([]), //a FormGroup with a new address
      power: '',
      sidekick: ''
    })
  }

  ngOnChanges() {
    this.heroForm.reset({ //reset the form flags
      name: this.hero.name,
    });
    this.setAddresses(this.hero.addresses);
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  };

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  //TODO:remove

  onSubmit() {
    this.hero = this.prepareSaveHero();
    this.heroService.updateHero(this.hero).subscribe();
    this.ngOnChanges();
  }

  revert() {
    this.ngOnChanges();
  }

  prepareSaveHero(): Hero {
    const formModel = this.heroForm.value;

    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );

    const saveHero: Hero = {
      id: this.hero.id,
      name: formModel.name as string,
      addresses: secretLairsDeepCopy
    };
    return saveHero;

  }

  // logNameChange() {
  //   const nameControl = this.heroForm.get('name');
  //   nameControl.valueChanges.forEach(
  //     (value: string) => this.nameChangeLog.push(value)
  //   );
  // }

}
