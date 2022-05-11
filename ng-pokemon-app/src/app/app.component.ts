import { Component ,OnInit } from '@angular/core';
import { POKEMONS } from './mok-pokemon-List';
import { Pokemon } from './Pokemons';


@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon []  = POKEMONS;

  ngOnInit() {
    console.table(this.pokemonList);
   }
// method select Pokemon 

  selectPokemon(event : MouseEvent) {
    const index: number = + (event.target as HTMLInputElement).value
    console.log(`vos avez clique sur le ${this.pokemonList[index].name}`)
  }
}
