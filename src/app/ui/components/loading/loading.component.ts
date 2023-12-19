import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IgxIconModule } from 'igniteui-angular';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule, IgxIconModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

  @Input() isLoading = false;

  @Input() opacity = false;

}
