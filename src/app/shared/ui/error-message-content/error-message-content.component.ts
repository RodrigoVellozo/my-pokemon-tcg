import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-error-message-content',
  standalone: true,
  imports: [
    BrowserModule
  ],
  templateUrl: './error-message-content.component.html',
  styleUrl: './error-message-content.component.scss'
})
export class ErrorMessageContentComponent {
  @Input() name!: string;

}
