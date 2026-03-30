import { Component, OnInit } from '@angular/core';
import { SpacesComponent } from "./spaces/spaces.component";
import { CirclePiecesComponent } from "./circle-pieces/circle-pieces.component";
import { SquareComponent } from "./square/square.component";
import { SinglePiece } from "./piece/piece.component";
import { CommonModule } from '@angular/common';
import { WinModalComponent } from "./win-modal/win-modal.component";

@Component({
  selector: 'app-root',
  imports: [SpacesComponent, CirclePiecesComponent, SquareComponent, CommonModule, WinModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  player1Pieces: SinglePiece[] = []
  player2Pieces: SinglePiece[] = []
  player3Pieces: SinglePiece[] = []
  player4Pieces: SinglePiece[] = []


  definedPlayerNumber: number = 0;
  diceResult: number = 0;
  currentPlayer: number = 0;
  selectedPiece: number = -1;
  victoriousPlayer: number = 0;
  definedPlayerColor: string = "";
  selectedPieceColor: string = "";
  playerTurn: boolean = true
  showWin: boolean = false;
  playDice: boolean = false;
  diceRolled: boolean = false;
  showDiceNumber: boolean = false
  readonly safePositions = [2, 15, 28, 41];

  ngOnInit(): void {
    this.initialSetup();
    this.createPlayer1Pieces();
    this.createPlayer2Pieces();
    this.createPlayer3Pieces();
    this.creatPlayer4Pieces();
  }

  initialSetup() {
    this.definedPlayerNumber = Math.floor(Math.random() * 4)
    this.currentPlayer = this.definedPlayerNumber
    switch (this.definedPlayerNumber) {
      case 0: this.definedPlayerColor = "green"; break;
      case 1: this.definedPlayerColor = "yellow"; break;
      case 2: this.definedPlayerColor = "orange"; break;
      case 3: this.definedPlayerColor = "blue"; break;
    }
  }

  createPlayer1Pieces() {
    for (let i = 0; i < 4; i++) {
      const item = new SinglePiece()
      item.id = i + 1
      item.playerId = 0;
      item.finalPos = 45
      item.finalEnter = 2015
      item.finalExit = 2019
      item.squareEnter = 2039
      item.color = "green"
      if (item.playerId === this.definedPlayerNumber) {
        item.disabled = false
      }
      item.currentPos = 1000;
      item.initPos = 47
      this.player1Pieces.push(item)
    }
  }

  createPlayer2Pieces() {
    for (let i = 0; i < 4; i++) {
      const item = new SinglePiece()
      item.id = i + 1
      item.playerId = 1
      item.finalPos = 6
      item.finalEnter = 2000
      item.finalExit = 2004
      item.squareEnter = 2024
      item.color = "yellow"
      if (item.playerId === this.definedPlayerNumber) {
        item.disabled = false
      }
      item.currentPos = 1000;
      item.initPos = 8
      this.player2Pieces.push(item)
    }
  }

  createPlayer3Pieces() {
    for (let i = 0; i < 4; i++) {
      const item = new SinglePiece()
      item.id = i + 1
      item.playerId = 2
      item.finalPos = 32
      item.finalEnter = 2010
      item.finalExit = 2014
      item.squareEnter = 2034
      item.color = "orange"
      if (item.playerId === this.definedPlayerNumber) {
        item.disabled = false
      }
      item.currentPos = 1000;
      item.initPos = 34
      this.player3Pieces.push(item)
    }
  }

  creatPlayer4Pieces() {
    for (let i = 0; i < 4; i++) {
      const item = new SinglePiece()
      item.id = i + 1
      item.playerId = 3
      item.finalPos = 19
      item.finalEnter = 2005
      item.finalExit = 2009
      item.squareEnter = 2029
      item.color = "blue"
      if (item.playerId === this.definedPlayerNumber) {
        item.disabled = false
      }
      item.currentPos = 1000
      item.initPos = 21
      this.player4Pieces.push(item)
    }
  }

  playTurn() {
    if (this.currentPlayer !== this.definedPlayerNumber) return;
    if (!this.showWin && !this.diceRolled) {
      this.diceResult = Math.floor(Math.random() * 6 + 1);
      this.diceRolled = true
      this.playDice = true

      setTimeout(() => {
        this.playDice = false
        this.showDiceNumber = true

        const pieces = this.getPlayerPieces();
        const hasMoveable = pieces.some(p => {
          if (p.currentPos === p.squareEnter) return false;
          if (p.currentPos === 1000 && this.diceResult !== 6) return false;
          return true;
        });

        if (!hasMoveable) {
          setTimeout(() => {
            this.selectPiece(1)
          },600);
        }

      }, 820);
    }
  }

  turnStages() {

    this.checkDiceResult();

    setTimeout(() => {
      if (!this.showWin) {
        this.nextTurn();
        this.lockPlayer();

        if (this.currentPlayer !== this.definedPlayerNumber) {
          this.playerTurn = false

          setTimeout(() => this.enemyAi(), 800)
        } else {
          this.playerTurn = true
          this.selectedPiece = -1
        }
      }
    })
  }

  nextTurn() {
    if (this.diceResult !== 6) {
      this.currentPlayer = (this.currentPlayer + 1) % 4;
    }
  }

  lockPlayer() {
    const pieces = this.getDefinedPlayerPieces();
    if (this.currentPlayer !== this.definedPlayerNumber) {
      for (let i = 0; i < 4; i++) {
        pieces[i].disabled = true
      }
    } else {
      for (let i = 0; i < 4; i++) {
        pieces[i].disabled = false
      }
    }
  }

  enemyAi() {
    this.diceResult = Math.floor(Math.random() * 6 + 1);
    const pieces = this.getPlayerPieces();

    const moveablePieces = pieces.filter(p => {

      if (p.currentPos === p.squareEnter) return false

      if (p.currentPos === 1000 && this.diceResult !== 6) return false

      return true
    })

    if (moveablePieces.length === 0) {
      this.turnStages()
      return
    }

    const randomPiece = moveablePieces[Math.floor(Math.random() * moveablePieces.length)]

    const index = pieces.indexOf(randomPiece)
    this.selectedPiece = index
    this.turnStages();
  }

  leaveCircle() {
    const pieces = this.getPlayerPieces();
    pieces[this.selectedPiece].currentPos = pieces[this.selectedPiece].initPos
  }

  movePiece() {
    const pieces = this.getPlayerPieces();

    pieces[this.selectedPiece].currentPos += this.diceResult
    console.log(pieces[this.selectedPiece].currentPos)
  }

  loopBoard() {
    const pieces = this.getPlayerPieces();

    if (pieces[this.selectedPiece].currentPos > 51) {
      pieces[this.selectedPiece].currentPos -= 52
      pieces[this.selectedPiece].hasLooped = true
    }
  }



  checkCapture() {
    const pieces = this.getPlayerPieces();
    const currentPos = pieces[this.selectedPiece].currentPos;

    if (currentPos === 1000 || currentPos > 1999) return;

    if (this.safePositions.includes(currentPos)) return;

    const allPlayersPieces = [
      this.player1Pieces,
      this.player2Pieces,
      this.player3Pieces,
      this.player4Pieces,
    ];

    const enemyEnter = allPlayersPieces
      .filter(playerPieces => playerPieces !== pieces)
      .flatMap(playerPieces => playerPieces.filter(p => p.currentPos === currentPos));

    if (enemyEnter.length >= 2) return;

    if (enemyEnter.length === 1) {
      enemyEnter[0].currentPos = 1000;
    }
  }

  enterCatwalk() {
    let spaces_left: number;
    const pieces = this.getPlayerPieces();
    if (pieces[this.selectedPiece].hasLooped === true && pieces[this.selectedPiece].currentPos > pieces[this.selectedPiece].finalPos) {

      spaces_left = pieces[this.selectedPiece].currentPos - pieces[this.selectedPiece].finalPos

      const result = pieces[this.selectedPiece].finalEnter + spaces_left - 1
      if (result > pieces[this.selectedPiece].finalExit) {
        pieces[this.selectedPiece].currentPos = pieces[this.selectedPiece].finalExit
      } else pieces[this.selectedPiece].currentPos = result
    }
  }

  enterSquare() {
    const pieces = this.getPlayerPieces();
    if (pieces[this.selectedPiece].currentPos > pieces[this.selectedPiece].finalExit) {
      pieces[this.selectedPiece].currentPos = pieces[this.selectedPiece].squareEnter
    }
  }

  canCatWalk() {
    let diff: number;
    const pieces = this.getPlayerPieces();

    diff = pieces[this.selectedPiece].finalExit - pieces[this.selectedPiece].currentPos + 1

    if (this.diceResult === diff) {
      pieces[this.selectedPiece].currentPos += diff
    }
  }

  checkDiceResult() {
    let pieces = this.getPlayerPieces();

    //Se estiver dentro do círculo
    if (this.diceResult === 6 && pieces[this.selectedPiece].currentPos === 1000) {

      this.leaveCircle();
      this.checkCapture();

      // Se estiver fora do circulo
    } else if (pieces[this.selectedPiece].currentPos < 1000) {

      this.movePiece();
      this.loopBoard();
      this.enterCatwalk();
      this.checkCapture();


      // Se estiver dentro da passarela
    } else if (pieces[this.selectedPiece].currentPos > 1999) {

      this.canCatWalk();
      this.enterSquare();

    }
  }

  playerWon(result: { player: number; isFull: boolean }) {
    this.victoriousPlayer = result.player
    this.showWin = result.isFull
  }


  selectPiece(id: number) {
    if (!this.diceRolled) return;

    this.selectedPiece = id - 1
    const pieces = this.getPlayerPieces();
    this.selectedPieceColor = pieces[this.selectedPiece].color

    this.showDiceNumber = false;
    this.diceRolled = false;
    this.turnStages();
    console.log(this.selectedPiece)
  }

 

  getPlayerPieces(): SinglePiece[] {
    switch (this.currentPlayer) {
      case 0: return this.player1Pieces;
      case 1: return this.player2Pieces;
      case 2: return this.player3Pieces;
      case 3: return this.player4Pieces;
      default: return []
    }
  }

  getDefinedPlayerPieces(): SinglePiece[] {
    switch (this.definedPlayerNumber) {
      case 0: return this.player1Pieces;
      case 1: return this.player2Pieces;
      case 2: return this.player3Pieces;
      case 3: return this.player4Pieces;
      default: return []
    }
  }

  // FUNÇÃO DEBUG
  debugSkip() {
    if (this.showWin) return;

    this.diceResult = Math.floor(Math.random() * 6 + 1);

    const pieces = this.getPlayerPieces();

    const moveablePieces = pieces.filter(p => {
      if (p.currentPos === p.squareEnter) return false;
      if (p.currentPos === 1000 && this.diceResult !== 6) return false;
      return true;
    });

    if (moveablePieces.length === 0) {
      this.turnStages();
      return;
    }

    const randomPiece = moveablePieces[Math.floor(Math.random() * moveablePieces.length)];
    this.selectedPiece = pieces.indexOf(randomPiece);
    this.turnStages();
  }

  debugDice() {
    this.diceResult = 6;
  }


  title = 'LUDO';
  player1_Color = "green"
  player2_Color = "yellow"
  player3_Color = "orange"
  player4_Color = "blue"

}
