import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserComponentComponent } from '../user-component/user-component.component';
import { CommonModule } from '@angular/common';
import { PlaceholderComponentComponent } from '../placeholder-component/placeholder-component.component';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [
    FormsModule,
    UserComponentComponent,
    CommonModule,
    PlaceholderComponentComponent,
    NgxPaginationModule,
  ],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.scss',
})
export class SearchComponentComponent {
  username: string = '';
  dataReceived: boolean = false;
  projectDataReceived: boolean = false;
  // User Data Array
  dataArray: {} = {};
  // User Project Array
  projectArray: {} = {};
  links: any;
  httpClient = inject(HttpClient);

  Submit(): void {
    this.httpClient
      .get(`https://api.github.com/users/${this.username}`)
      .subscribe((data) => {
        console.log(data);

        this.dataArray = data;
        this.dataReceived = true;
      });

    // Fetching Projects done by users
    // this.httpClient
    //   .get(` https://api.github.com/users/${this.username}/repos?per_page=10`)
    //   .subscribe((projectData) => {
    //     console.log(projectData);
    //     this.projectArray = projectData;
    //     this.projectDataReceived = true;
    //   });

    fetch(`https://api.github.com/users/${this.username}/repos`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.projectArray = data;
        this.projectDataReceived = true;
        this.username = '';
      })
      .catch((error) => {
        console.error(
          'There has been a problem with your fetch operation:',
          error
        );
      });
  }
}
