import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RepoComponentComponent } from '../repo-component/repo-component.component';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [CommonModule, RepoComponentComponent, NgxPaginationModule],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.scss',
})
export class UserComponentComponent {
  @Input() data: any;
  @Input() projectData: any;

  size: number = 10;
  page: number = 1;
}
