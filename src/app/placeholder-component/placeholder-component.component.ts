import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './placeholder-component.component.html',
  styleUrl: './placeholder-component.component.scss',
})
export class PlaceholderComponentComponent {
  @Input() user: any;
  @Input() projectData: any;
}
