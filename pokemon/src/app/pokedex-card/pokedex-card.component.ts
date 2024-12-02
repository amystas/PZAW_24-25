import { NgFor } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokedex-card',
  standalone: true,
  imports: [NgFor, HttpClientModule],
  templateUrl: './pokedex-card.component.html',
  styleUrl: './pokedex-card.component.css'
})
export class PokedexCardComponent {
  @Input() pokemon :any;
  imagePath :string = "";
  id? :string;

  ngOnInit() {
    this.id = this.pokemon.id;
    console.log(this.id)

    this.http.get<any>("http://localhost:8000/pokemon/images/" + this.id)
    .subscribe(data => {
      this.imagePath = `assets/images/${data.url}`
      console.log(this.imagePath)
    })
  }
  constructor(private http: HttpClient) {}
}


