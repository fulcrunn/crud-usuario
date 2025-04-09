import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.scss'
})
export class InputFormComponent {
  @Input() placeholder: string = '';
  @Input() type: string = 'text'; // text, email, password, etc.
}
