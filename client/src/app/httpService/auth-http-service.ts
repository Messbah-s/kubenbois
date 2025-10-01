import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import LoginRequest = Kubenbois.LoginRequest;
import LoginResponse = Kubenbois.LoginResponse;
import RegisterRequest = Kubenbois.RegisterRequest;

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {
  baseUrl: string = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  public login(mail: string, password: string) {
    const data: LoginRequest = {
      username: mail,
      password: password,
    };
    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, data);
  }

  public register(data: RegisterRequest) {
    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/register`, data);
  }

  public refreshToken(refreshToken: string) {
    return this.http.post(
      `${this.baseUrl}/auth/refresh`,
      {},
      {
        observe: 'response',
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    );
  }
}
