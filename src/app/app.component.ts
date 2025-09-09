import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpacesComponent } from "./spaces/spaces.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpacesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LUDOREMAKE';
}
