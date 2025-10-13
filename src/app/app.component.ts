import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpacesComponent } from "./spaces/spaces.component";
import { CirclePiecesComponent } from "./circle-pieces/circle-pieces.component";
import { SquareComponent } from "./square/square.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpacesComponent, CirclePiecesComponent, SquareComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LUDOREMAKE';
  player1_Color = "green"
  player2_Color = "yellow"
  player3_Color = "orange"
  player4_Color = "blue"
}
