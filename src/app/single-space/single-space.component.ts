import { CommonModule } from '@angular/common';
import { Component, input, Input} from '@angular/core';
import { OnInit } from '@angular/core';
import { PieceComponent, single_piece } from "../piece/piece.component";

type Piece = {
    current_pos: number
    id: number
    color: string
  }

let counter = 0

@Component({
  selector: 'app-single-space',
  imports: [CommonModule, PieceComponent],
  templateUrl: './single-space.component.html',
  styleUrl: './single-space.component.css'
})
export class SingleSpaceComponent implements OnInit {

  Style_pieces: Piece[] = []

  number: number | null = null;

  canGrow: boolean = true;
  minWidth: number = 17
  ngOnInit(){ 
  if(this.count){
      counter++;
      this.number = counter;
    }
    
  this.changeStytle()
    }

  @Input() color = "";
  @Input() show_star = false;
  @Input() show_arrow = false;
  @Input() count = true;
  @Input() pieces: single_piece[]=[]

  get local_pieces(): Piece[]{
    return this.pieces.filter(p => p.current_pos === this.number)
  }

  changeStytle(){
  if(this.local_pieces.length > 9){
    this.minWidth = 10
  }
  if(this.local_pieces.length > 3){
    this.canGrow = false
  }
  }

}

export class single_space{
  constructor (
  public star: boolean = false,
  public arrow: boolean = false,
  public color: string = "white",
  public count: boolean = true
  ){}
  
  }