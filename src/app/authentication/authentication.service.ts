import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HelpersService } from '../shared/services/helpers.service';
import { catchError } from 'rxjs/operators';
import { Response } from '../shared/DTO/response.model';
import { Registration } from '../shared/DTO/registration.model';
import { Login } from '../shared/DTO/login.model';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(// private userService: UserService,
              private http: HttpClient,
              private helpersService: HelpersService
            ) { }

  login(payload: {email: string, password: string}) {
    const data = {
      email: payload.email,
      hashedPassword: this.helpersService.hashToSHA256(payload.password),
    };
    return this.http.post<Response<Login>>(environment.postLoginUrl,data)
      .pipe(
        catchError(this.helpersService.handleError('login'))
      );
  };

  register(payload: {username: string, email: string, password: string}) {
    const data= {
      username: payload.username,
      hashedPassword: this.helpersService.hashToSHA256(payload.password),
      email: payload.email
    };
    return this.http.post<Response<Registration>>(environment.postRegistrationUrl, data)
    .pipe(
      catchError(this.helpersService.handleError('registration'))
    );
  }
}
