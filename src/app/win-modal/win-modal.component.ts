import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-win-modal',
  imports: [],
  templateUrl: './win-modal.component.html',
  styleUrl: './win-modal.component.css'
})
export class WinModalComponent implements OnInit{

ngOnInit(): void {
  this.showPlayer();
}
@Input() definedPlayer = 0;
@Input() inputPlayer = 0;

victoryPlayer = "";

  showPlayer(){
    switch(this.inputPlayer){
          case 0: this.victoryPlayer = "Green"; break;
          case 1: this.victoryPlayer = "Yellow"; break;
          case 2: this.victoryPlayer = "Orange"; break
          case 3: this.victoryPlayer = "Blue"; break;
          default: this.victoryPlayer = "";
    }  
  }

  hasWon(){
    if(this.inputPlayer === this.definedPlayer){
    return "You've WON! Congrats!"
    } else {
      return "You've LOST! Nice try..."
    
    }
  
  }
}
