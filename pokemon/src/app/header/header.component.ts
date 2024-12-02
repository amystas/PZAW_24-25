import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  pokemonTypes :any;

  constructor(private http: HttpClient) {
    this.http.get<any>("http://localhost:8000/pokemon/types")
    .subscribe(data => {this.pokemonTypes = data});
  }

  allSelectedTypes :string[] = []
  @Output() public selectedTypes = new EventEmitter<string[]>();

  onChange(value :string) :void {
    if (this.allSelectedTypes.includes(value)) {
      this.allSelectedTypes = this.allSelectedTypes.filter((item) => item !== value);
    } else {
      this.allSelectedTypes.push(value);
    }
    console.log(this.allSelectedTypes);
    this.selectedTypes.emit([...this.allSelectedTypes]);
  }

}
