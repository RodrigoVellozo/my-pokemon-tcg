import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message-content',
  standalone: true,
  imports: [],
  templateUrl: './error-message-content.component.html',
  styleUrl: './error-message-content.component.scss'
})
export class ErrorMessageContentComponent {
  @Input() name!: string;

}
