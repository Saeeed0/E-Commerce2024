import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contacts',
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
  standalone:true,
})
export class ContactsComponent {
  @ViewChild('userNameInp') myInput!:ElementRef; /// ! non null assertion operator
  

  constructor() {
    console.log(this.myInput);
  }
ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  console.log(this.myInput);
 this.myInput.nativeElement.value='saeed' 
}

}
