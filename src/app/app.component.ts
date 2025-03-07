import { Component } from '@angular/core';
import { FooterComponent } from "./components/footer/footer.component";
import { ProductsComponent } from "./components/products/products.component";
import { NavbarComponent } from "./components/navbar/navbar.component";



@Component({
  selector: 'app-root',
  imports: [FooterComponent, ProductsComponent, NavbarComponent 

  ],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerceApp';
}
