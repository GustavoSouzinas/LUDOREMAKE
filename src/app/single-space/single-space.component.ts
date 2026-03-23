import { CommonModule } from '@angular/common';
import { Component, Output, Input, EventEmitter, SimpleChanges} from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';
import { PieceComponent, single_piece } from "../piece/piece.component";

type Piece = {
    current_pos: number
    id: number
    player_id: number
    color: string
    disabled: boolean
  }

let counter = 0
let final_counter = 2000

@Component({
  selector: 'app-single-space',
  imports: [CommonModule, PieceComponent],
  templateUrl: './single-space.component.html',
  styleUrl: './single-space.component.css'
})
export class SingleSpaceComponent implements OnInit, OnChanges {
  

  Style_pieces: Piece[] = []

  number: number | null = null;
  final_number: number | null = null;
  current_player: number = 0;

  ngOnInit(){ 
  if(this.count){
      this.number = counter;
      counter++;
  }
  if(this.final_count){
    this.final_number = final_counter
    final_counter++
  }
  }

  @Output() sp_piece_selected = new EventEmitter<number>();
  @Output() sp_player_selected = new EventEmitter<number>();
  @Input() color = "";
  @Input() show_star = false;
  @Input() show_arrow = false;
  @Input() count = true;
  @Input() final_count = false;
  @Input() selected_piece = 0;
  @Input() selected_player = 0;
  @Input() p1_pieces: single_piece[]=[]
  @Input() p2_pieces: single_piece[]=[]
  @Input() p3_pieces: single_piece[]=[]
  @Input() p4_pieces: single_piece[]=[]

  get local_pieces(): Piece[]{
    return [
    ...this.p1_pieces.filter(p => p.current_pos === this.number), 
    ...this.p2_pieces.filter(p => p.current_pos === this.number),
    ...this.p3_pieces.filter(p => p.current_pos === this.number),
    ...this.p4_pieces.filter(p => p.current_pos === this.number),
    
    ...this.p1_pieces.filter(p => p.current_pos === this.final_number), 
    ...this.p2_pieces.filter(p => p.current_pos === this.final_number),
    ...this.p4_pieces.filter(p => p.current_pos === this.final_number),
    ...this.p3_pieces.filter(p => p.current_pos === this.final_number),
    ]
  }

  get canGrow(): boolean{
    return this.local_pieces.length < 3;
  }

  get minWidth(): number{
    return this.local_pieces.length > 9 ? 12:17
  }

  ngOnChanges(changes: SimpleChanges): void {
     
  }

  sp_piece_selected_pass(id: number){
    this.sp_piece_selected.emit(id);
  }

  sp_player_selected_pass(p: number){
    this.sp_player_selected.emit(p);
  }
}

export class single_space{
  constructor (
  public star: boolean = false,
  public arrow: boolean = false,
  public color: string = "white",
  public count: boolean = true,
  public final_count = false
  ){}

}