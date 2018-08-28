import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { UserService } from "./user.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.userService.getToken();
        if (authToken){
            const authReq = req.clone({
                headers: req.headers.set('Authorization','Bearer ' + authToken)
            });
            return next.handle(authReq);
        }
        return next.handle(req);
    }
}
