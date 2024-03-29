import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import {AuthService} from "./services/auth.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.method == 'DELETE' || req.method == 'POST' || req.method == 'PUT' || req.method == 'GET') {
      const authToken = this.authService.getToken();
      const authRequest = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });
      return next.handle(authRequest);
    } else {
      return next.handle(req);
    }
  }
}
