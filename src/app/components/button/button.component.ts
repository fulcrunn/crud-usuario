import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
[x: string]: any;
  @Input() textButton: string ;
  @Input() size: string;

  ImprimeConsole() { /* teste da função (click) */
    console.log("Aqui");}

}
