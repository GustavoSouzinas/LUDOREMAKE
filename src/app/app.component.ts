import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpacesComponent } from "./spaces/spaces.component";
import { CirclePiecesComponent } from "./circle-pieces/circle-pieces.component";
import { SquareComponent } from "./square/square.component";
import { SingleSpaceComponent } from "./single-space/single-space.component";
import { PieceComponent, single_piece } from "./piece/piece.component";
import { CommonModule } from '@angular/common';
import { WinModalComponent } from "./win-modal/win-modal.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpacesComponent, CirclePiecesComponent, SquareComponent, SingleSpaceComponent, PieceComponent, CommonModule, WinModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  player1_pieces: single_piece[]=[]
  player2_pieces: single_piece[]=[]
  player3_pieces: single_piece[]=[]
  player4_pieces: single_piece[]=[]
  
  player_turn:boolean = true
  defined_player_number:number = 0;
  defined_player_color:string = "";
  current_player:number = 0;
  selected_piece!:number;
  selected_piece_color: string = "";
  dice_result: number = 0;
  victorious_player: number = 0;
  show_win: boolean = false;
  play_dice: boolean = false;

  ngOnInit(): void {
    this.initialSetup();
    this.Player1_pieces();
    this.Player2_pieces();
    this.Player3_pieces();
    this.Player4_pieces();
  }

  initialSetup(){
  this.defined_player_number = Math.floor(Math.random() * 4)

  //Futuro refatoramento
  switch(this.defined_player_number){
      case 0: this.defined_player_color = "green"; break;
      case 1: this.defined_player_color = "yellow"; break;
      case 2: this.defined_player_color = "orange"; break;
      case 3: this.defined_player_color = "blue"; break;
    }
}

  Player1_pieces(){
    for(let i=0; i<4; i++){
      const item = new single_piece()
      item.id = i
      item.player_id = 0;
      item.final_pos = 45
      item.final_enter = 2015
      item.final_exit = 2019
      item.square_enter = 2039
      item.color = "green"
      if(item.player_id===this.defined_player_number){
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
      item.player_id = 1
      item.final_pos = 6
      item.final_enter = 2000
      item.final_exit = 2004
      item.square_enter = 2024
      item.color = "yellow"
       if(item.player_id===this.defined_player_number){
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
      item.player_id = 2
      item.final_pos = 32
      item.final_enter = 2010
      item.final_exit = 2014
      item.square_enter = 2034
      item.color = "orange"
       if(item.player_id===this.defined_player_number){
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
      item.player_id = 3
      item.final_pos = 19,
      item.final_enter = 2005,
      item.final_exit = 2009,
      item.square_enter = 2029,
      item.color = "blue"
      if(item.player_id===this.defined_player_number){
      item.disabled = false
      }
      item.id++
      item.current_pos = 1000;
      item.init_pos = 21
      this.player4_pieces.push(item)
    }
  }

leaveCircle(){
const pieces = this.getPlayerPieces();
pieces[this.selected_piece].current_pos = pieces[this.selected_piece].init_pos
}

movePiece(){
const pieces = this.getPlayerPieces();

 pieces[this.selected_piece].current_pos += this.dice_result
 console.log(pieces[this.selected_piece].current_pos)
}

loopBoard(){
const pieces = this.getPlayerPieces();

if(pieces[this.selected_piece].current_pos > 51){
  pieces[this.selected_piece].current_pos -= 52
  pieces[this.selected_piece].has_looped = true
}
}

LockPlayer(){
const pieces = this.getDefinedPlayerPieces();
if(this.current_player !== this.defined_player_number){
  for(let i=0; i < 4; i++){
  pieces[i].disabled = true
  }
}else {
  for(let i=0; i < 4; i++){
  pieces[i].disabled = false
    }
  }
}

enterCatwalk(){
let spaces_left: number;
const pieces = this.getPlayerPieces();
if(pieces[this.selected_piece].has_looped === true && pieces[this.selected_piece].current_pos > pieces[this.selected_piece].final_pos){

  spaces_left = pieces[this.selected_piece].current_pos - pieces[this.selected_piece].final_pos

  const result = pieces[this.selected_piece].final_enter + spaces_left - 1  
  if(result> pieces[this.selected_piece].final_exit){
  pieces[this.selected_piece].current_pos = pieces[this.selected_piece].final_exit
  }else pieces[this.selected_piece].current_pos = result 
}
}

PlayTurn(){
  if(this.show_win != true){
    this.dice_result = Math.floor(Math.random() * 6 + 1);
    this.play_dice = true
    setTimeout(()=> this.TurnStages(), 1200)
  }
}

  TurnStages(){
    this.play_dice = false
    this.checkDiceResult();
    
    setTimeout(() => {
      if(this.show_win != true){
        this.NextTurn();
        this.LockPlayer();

        if(this.current_player !== this.defined_player_number){
          this.player_turn = false
          setTimeout(()=> this.EnemyAi(), 800)
        } else{
          this.player_turn = true
        }
      }
    })
  
  } 


  NextTurn(){
    if (this.dice_result !== 6) {
    this.current_player = (this.current_player + 1) % 4;
      }
  }

  EnemyAi(){
  this.dice_result = Math.floor(Math.random() * 6 + 1);

  const pieces = this.getPlayerPieces();

  const moveablePieces = pieces.filter(p=> {

  if(p.current_pos === p.square_enter) return false

  if(p.current_pos === 1000 && this.dice_result !== 6) return false

  return true 
  })
  
  if(moveablePieces.length === 0){
    this.TurnStages()
    return
  }

  const randomPiece = moveablePieces[Math.floor(Math.random() *  moveablePieces.length)]

  const index = pieces.indexOf(randomPiece)
  this.selected_piece = index
  this.TurnStages();
  }

  enterSquare(){
    const pieces = this.getPlayerPieces();
    if(pieces[this.selected_piece].current_pos > pieces[this.selected_piece].final_exit){
        pieces[this.selected_piece].current_pos = pieces[this.selected_piece].square_enter
      }
  }

  canCatWalk(){
    let diff: number;
    const pieces = this.getPlayerPieces();
        
    diff = pieces[this.selected_piece].final_exit - pieces[this.selected_piece].current_pos + 1

    if(this.dice_result === diff){
      pieces[this.selected_piece].current_pos += diff
      }
  }

  checkDiceResult(){
    let pieces: single_piece[]=[];
    switch(this.current_player){
      case 0: pieces = this.player1_pieces; break;
      case 1: pieces = this.player2_pieces; break;
      case 2: pieces = this.player3_pieces; break;
      case 3: pieces = this.player4_pieces; break;
    }

    //Se estiver dentro do círculo
    if(this.dice_result === 6 && pieces[this.selected_piece].current_pos === 1000){

      this.leaveCircle();

    // Se estiver fora do circulo
    }else if(pieces[this.selected_piece].current_pos < 1000){

      this.movePiece();
      this.loopBoard();
      this.enterCatwalk();

      // Se estiver dentro da passarela
      } else if(pieces[this.selected_piece].current_pos>1999){

        this.canCatWalk();
        this.enterSquare();  

      } 
  }
  


  PlayerWon(result: {player: number; isFull: boolean}){
    const {player, isFull} = result
    this.victorious_player = result.player
    this.show_win = result.isFull
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

  getDefinedPlayerPieces(): single_piece[] {
  switch(this.defined_player_number){
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
