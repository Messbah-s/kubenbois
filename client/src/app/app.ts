import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
  private baseUrl = environment.API_URL;

  constructor(private httpClient: HttpClient) {
  }

  getHello() {
    this.httpClient.get(`${this.baseUrl}/hello`).subscribe();
  }
}
