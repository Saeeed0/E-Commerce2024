import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  newUser: any = {};
  registerationForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerationForm = fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],

      email: ['saeed@gmail.com', Validators.email],

      password: ['saeed112243433', Validators.pattern(/^[a-zA-Z0-9]{6,12}/)],

      address: fb.group({
        city: ['cairo', Validators.minLength(4)],
        street: ['123 street'],
      }),

      phones: fb.array([['01223403439']]),
    });
  }
  // registerationForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3),
  //     Validators.maxLength(20),
  //   ]),

  //   email: new FormControl('saeed@gmail.com', Validators.email),

  //   password: new FormControl(
  //     'saeed112243433',
  //     Validators.pattern(/^[a-zA-Z0-9]{6,12}/)
  //   ),

  //   address: new FormGroup({
  //     city: new FormControl('cairo', Validators.minLength(4)),
  //     street: new FormControl('123 street'),
  //   }),

  //   phones: new FormArray([new FormControl('01223403439')]),
  // });

  register() {
    this.newUser = this.registerationForm.value;

    console.log(this.newUser);
  }

  update() {
    // ////////
    // ////...........

    this.registerationForm.patchValue({
      name: 'fdfd',
      email: 'saeed@gmail.com',
      // password: 'saeed112243433',
      address: { city: 'cairo', street: '123 street' },
      phones: ['01223403439'],
    });

    //or
    // this.registerationForm.setValue({
    //   name: 'fdfd',
    //   email: 'saeed@gmail.com',
    //   password: 'saeed112243433',
    //   address: { city: 'cairo', street: '123 street' },
    //   phones: ['01223403439'],
    // });
    // //..............
  }

  get name() {
    return this.registerationForm.get('name');
  }
  get phones() {
    return this.registerationForm.get('phones') as FormArray;
  }

  addNewPhone() {
    this.phones.push(new FormControl(''));
  }
}
