import { Component, Input, SimpleChanges } from '@angular/core';
import { PokedexCardComponent } from "../pokedex-card/pokedex-card.component";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [PokedexCardComponent, HttpClientModule, NgFor],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  @Input() public selectedTypes? :string[];

  allPokemons :any[] = []
  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges)
  {
    if (changes['selectedTypes'] && this.selectedTypes?.length) {
      console.log(this.selectedTypes);
      this.allPokemons = [];
      this.selectedTypes!.map((type) => {
        this.http.get<any[]>(`http://localhost:8000/pokemon/type/${type}`)
        .subscribe(data => {
          this.allPokemons = this.removeDuplicates([...this.allPokemons, ...data]);
        })
    });
    } else {
      this.allPokemons = [];
    }
  }

  private removeDuplicates(pokemons: any[]): any[] {
    const uniqueIds = new Set();
    return pokemons.filter((pokemon) => {
      if (uniqueIds.has(pokemon.id)) {
        return false;
      }
      uniqueIds.add(pokemon.id);
      return true;
    });
  }
}