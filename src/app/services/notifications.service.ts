import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  notifications: string[] = [
    'You have unread messages',
    'People are reacting to your posts',
    'Hamada sent you a friend request',
    // '',
    'Post shared successfully',
  ];

  getNotifications(): Observable<string> {
    // return interval(100)
    return new Observable((observer) => {
      let notificationId = 0;
      const timerId = setInterval(() => {
        if (notificationId >= this.notifications.length) {
          observer.complete();
          stopInterval();
          return;
        }
        const message = this.notifications[notificationId];

        if (message === '') {
          observer.error('empty message');
          stopInterval();
          return;
        }

        observer.next(this.notifications[notificationId]);
        notificationId++;
      }, 200);

      function stopInterval() {
        clearInterval(timerId);
      }

      return {
        unsubscribe() {
          stopInterval();
        },
      };
    });
  }

  getNumbers(): Observable<number> {
    return interval(100)

  }
}
