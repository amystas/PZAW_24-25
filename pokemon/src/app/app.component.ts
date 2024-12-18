import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MainPageComponent } from "./main-page/main-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokemon';
  types :string[] = []
  handleTypeChange(e :string[]) :void{
    this.types = e;
  }
}
