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
  userdataReceived: boolean = false;
  projectDataReceived: boolean = false;
  // User Data Array
  dataArray: {} = {};
  // User Project Array
  projectArray: {} = {};

  noUserData: string = '';
  noRepoData: string = '';

  httpClient = inject(HttpClient);

  Submit(): void {
    // this.httpClient
    //   .get(`https://api.github.com/users/${this.username}`)
    //   .subscribe((data) => {
    //     console.log(data);

    //     this.dataArray = data;
    //     this.dataReceived = true;
    //   });

    fetch(`https://api.github.com/users/${this.username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.dataArray = data;
        this.userdataReceived = true;
        this.username = '';
      })
      .catch((error) => {
        console.error(
          'There has been a problem with your fetch operation:',
          error
        );
        this.noUserData = 'Not found';
      });

    // Fetching Projects done by users

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
        this.noRepoData = 'Not Found';
      });
  }
}
