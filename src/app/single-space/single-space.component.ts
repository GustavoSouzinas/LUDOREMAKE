import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-single-space',
  imports: [CommonModule],
  templateUrl: './single-space.component.html',
  styleUrl: './single-space.component.css'
})
export class SingleSpaceComponent {

  @Input() data: any;
  @Input() show_star = false;
  @Input() show_arrow = false;
}
