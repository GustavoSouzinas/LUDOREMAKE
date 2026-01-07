import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpacesComponent } from "./spaces/spaces.component";
import { CirclePiecesComponent } from "./circle-pieces/circle-pieces.component";
import { SquareComponent } from "./square/square.component";
import { SingleSpaceComponent } from "./single-space/single-space.component";
import { PieceComponent, single_piece } from "./piece/piece.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpacesComponent, CirclePiecesComponent, SquareComponent, SingleSpaceComponent, PieceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  player1_pieces: single_piece[]=[]
  player2_pieces: single_piece[]=[] 
  
  dice_result: number = 0;



  ngOnInit(): void {
    this.Player1_pieces();
    this.Player2_pieces();
  }

  Player1_pieces(){
    for(let i=0; i<4; i++){
      const item = new single_piece()
      item.id = i
      item.color = "green"
      item.id++
      item.current_pos = 1000;
      item.init_pos = 48
      this.player1_pieces.push(item)
    }
  }
  
   Player2_pieces(){
    for(let i=0; i<4; i++){
      const item = new single_piece()
      item.id = i
      item.color = "yellow"
      item.id++
      this.player2_pieces.push(item)
    }
  }

  RollDice(){
   this.dice_result = Math.floor(Math.random()*6) + 1;
   this.checkDiceResult();
  }

  checkDiceResult(){
    if(this.dice_result === 6 && this.player1_pieces[0].current_pos === 1000){
    this.player1_pieces[0].current_pos = this.player1_pieces[0].init_pos
    }else if(this.player1_pieces[0].current_pos < 1000){
     this.player1_pieces[0].current_pos = (this.player1_pieces[0].current_pos + this.dice_result) % 52
    }
  }

  title = 'LUDOREMAKE';
  player1_Color = "green"
  player2_Color = "yellow"
  player3_Color = "orange"
  player4_Color = "blue"

}
