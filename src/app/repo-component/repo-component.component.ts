import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repo-component.component.html',
  styleUrl: './repo-component.component.scss',
})
export class RepoComponentComponent {
  @Input() repo: any;
}
