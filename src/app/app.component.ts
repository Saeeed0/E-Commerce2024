import { Component } from '@angular/core';
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrderComponent } from './components/order/order.component';



@Component({
  selector: 'app-root',
  imports: [FooterComponent ,NavbarComponent,OrderComponent

  ],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerceApp';
}
