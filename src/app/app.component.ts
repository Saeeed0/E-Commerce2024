import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, NavbarComponent, RouterOutlet, CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'e-commerceApp';
  language!: Observable<string>;
  dir: string = 'ltr';
  constructor(private store: Store<{ language: string }>) {
    this.language = store.select('language');
    this.language.subscribe((langVal) => {
      this.dir = langVal == 'en' ? 'ltr' : 'rtl';
    });
  }
}
