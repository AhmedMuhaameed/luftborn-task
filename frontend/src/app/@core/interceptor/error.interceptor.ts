import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ResponseDTO } from '../interfaces/common/response';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        this.messageService.add({
          life: 10000,
          severity: 'error',
          summary: 'Error',
          detail: `Something went wrong`,
        });
        throw error;
      }),
      tap((response) => {
        if (response.type == 4) {
          let responseBody: ResponseDTO<any> = response.body as any;
          if (!responseBody.isSuccess) {
            this.messageService.add({
              life: 10000,
              severity: 'error',
              summary: 'Error',
              detail: `${responseBody.message}`,
            });
          }
        }
      })
    );
  }
}
