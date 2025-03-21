import {
  HttpEventType,
  HttpHandlerFn,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { tap } from 'rxjs';

export function myInterceptor(req: HttpRequest<any>, next: HttpHandlerFn) {
  console.log(req);
  let modifiedReq = req;
  if (req.method == 'POST') {
    modifiedReq = req.clone({
      headers: req.headers.append('my-header', 'myds'),
    });
    console.log(modifiedReq);
  }

  return next(modifiedReq).pipe(
    tap((event) => {
      if (event.type == HttpEventType.Response) {
        console.log(event);

        if (event.status == 200) {
        } else if (event.status == 500) {
        }
      }
    })
  );
}
