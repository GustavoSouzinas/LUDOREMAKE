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
  player3_pieces: single_piece[]=[]
  player4_pieces: single_piece[]=[]
  
  defined_player:string = "";
  current_player:number = 0;
  selected_piece:number = 0;
  selected_piece_color: string = "";
  dice_result: number = 0;


  ngOnInit(): void {
    this.initialSetup();
    this.Player1_pieces();
    this.Player2_pieces();
    this.Player3_pieces();
    this.Player4_pieces();
  }

  initialSetup(){
  const players = ["green","yellow","blue","orange"]
  this.defined_player = players[Math.floor(Math.random() * players.length)]
}

  Player1_pieces(){
    for(let i=0; i<4; i++){
      const item = new single_piece()
      item.id = i
      item.final_pos = 46
      item.final_enter = 2015
      item.color = "green"
      if(item.color===this.defined_player){
      item.disabled = false
      }
      item.id++
      item.current_pos = 1000;
      item.init_pos = 47
      this.player1_pieces.push(item)
    }
  }
  
   Player2_pieces(){
    for(let i=0; i<4; i++){
      const item = new single_piece()
      item.id = i
      item.final_pos = 7
      item.final_enter = 2000
      item.final_exit = 2005
      item.square_enter = 2024
      item.color = "yellow"
       if(item.color===this.defined_player){
      item.disabled = false
      }
      item.id++
      item.current_pos = 1000;
      item.init_pos = 8
      this.player2_pieces.push(item)
    }
  }

  Player3_pieces(){
  for(let i=0; i<4; i++){
      const item = new single_piece()
      item.id = i
      item.final_pos = 33
      item.final_enter = 2010
      item.final_exit = 2015
      item.square_enter = 2034
      item.color = "orange"
       if(item.color===this.defined_player){
      item.disabled = false
      }
      item.id++
      item.current_pos = 1000;
      item.init_pos = 34
      this.player3_pieces.push(item)
    }
  }

  Player4_pieces(){
    for(let i=0; i<4; i++){
      const item = new single_piece()
      item.id = i
      item.final_pos = 20,
      item.final_enter = 2005,
      item.final_exit = 2010,
      item.square_enter = 2029,
      item.color = "blue"
      if(item.color===this.defined_player){
      item.disabled = false
      }
      item.id++
      item.current_pos = 1000;
      item.init_pos = 21
      this.player4_pieces.push(item)
    }
  }

  RollDice(){
   this.dice_result= 1;
   this.checkDiceResult();
  }

  checkDiceResult(){
    let pieces: single_piece[]=[];
    switch(this.current_player){
      case 0: pieces = this.player1_pieces; break;
      case 1: pieces = this.player2_pieces; break;
      case 2: pieces = this.player3_pieces; break;
      case 3: pieces = this.player4_pieces; break;
    }
    if(this.dice_result === 1 && pieces[this.selected_piece].current_pos === 1000){

      pieces[this.selected_piece].current_pos = pieces[this.selected_piece].init_pos

    }else if(pieces[this.selected_piece].current_pos < 1000 || pieces[this.selected_piece].current_pos>1999){

      if(pieces[this.selected_piece].current_pos === 51){
      pieces[this.selected_piece].current_pos = 0
      } else{
      pieces[this.selected_piece].current_pos = (pieces[this.selected_piece].current_pos + this.dice_result)
      console.log(pieces[this.selected_piece].current_pos)
      }

      if(pieces[this.selected_piece].current_pos === pieces[this.selected_piece].final_pos){
        pieces[this.selected_piece].current_pos = pieces[this.selected_piece].final_enter
      }

      if(pieces[this.selected_piece].current_pos === pieces[this.selected_piece].final_exit){
        pieces[this.selected_piece].current_pos = pieces[this.selected_piece].square_enter
      }
    }
  }

  selectPiece(id: number){
    this.selected_piece = id - 1

  const pieces = this.getPlayerPieces();
  this.selected_piece_color = pieces[this.selected_piece].color
    console.log(this.selected_piece)
  }

  selectPlayer(p: number){
    this.current_player = p
    console.log(this.current_player)
  }


  getPlayerPieces(): single_piece[] {
  switch(this.current_player){
      case 0: return this.player1_pieces; break;
      case 1: return this.player2_pieces; break;
      case 2: return this.player3_pieces; break;
      case 3: return this.player4_pieces; break;
      default: return []
    }
  }




  title = 'LUDOREMAKE';
  player1_Color = "green"
  player2_Color = "yellow"
  player3_Color = "orange"
  player4_Color = "blue"

}
