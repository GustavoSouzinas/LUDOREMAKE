import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-win-modal',
  imports: [],
  templateUrl: './win-modal.component.html',
  styleUrl: './win-modal.component.css'
})
export class WinModalComponent implements OnInit{

ngOnInit(): void {
  this.ShowPlayer();
}
@Input() defined_player = 0;
@Input() input_player = 0;

victory_player = "";

  ShowPlayer(){
    switch(this.input_player){
          case 0: this.victory_player = "green"; break;
          case 1: this.victory_player = "yellow"; break;
          case 2: this.victory_player = "orange"; break
          case 3: this.victory_player = "blue"; break;
          default: this.victory_player = "";
    }  
  }

  HasWon(){
    if(this.input_player === this.defined_player){
    return "You've WON! Congrats!"
    } else {
      return "You've LOST! Nice try..."
    
    }
  
  }
}
