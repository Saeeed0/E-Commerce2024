import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';
import { OrderComponent } from './components/order/order.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  {
    path: 'aboutus',
    component: AboutUsComponent,
    children: [
      { path: 'vision', component: VisionComponent },
      { path: 'values', component: ValuesComponent },
    ],
  },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'product', component: ProductsComponent },
  { path: '**', component: NotFoundComponent },
];
