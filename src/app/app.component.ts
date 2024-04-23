import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponentComponent } from './search-component/search-component.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SearchComponentComponent,
    HttpClientModule,
    NgxPaginationModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Project using Github API';
}
