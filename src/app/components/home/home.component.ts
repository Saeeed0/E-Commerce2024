import { Component } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  subscribtion!:Subscription;
  constructor(private _NotificationsService: NotificationsService) {}
  ngOnInit(): void {
    // this._NotificationsService.getNotifications().subscribe(
    //   (notifications) => {
    //     console.log(notifications);
    //   },
    //   (err) => {
    //     console.log('Error: ', err);
    //   },
    //   () => {
    //     console.log('complete!!!');
    //   }
    // );
    this.subscribtion=this._NotificationsService.getNotifications().pipe(
      // map(notification=>notification+' Ali'),
      filter(msg=>msg.startsWith('Hamada'))
    ).subscribe({
      next: (notifications) => {
        console.log(notifications);
      },
      error: (err) => {
        console.log('Error: ', err);
      },
      complete: () => {
        console.log('Complete!!!');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
