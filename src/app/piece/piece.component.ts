import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-piece',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './piece.component.html',
  styleUrl: './piece.component.css'
})
export class PieceComponent {

@Input() color = "";
@Input() id = 0;
@Input() current_pos = 0;
}

export class single_piece{
 constructor(
 public id: number = 0,
 public init_pos: number = 0,
 public current_pos: number = 1000,
 public color: string = "white"
 ){}


}