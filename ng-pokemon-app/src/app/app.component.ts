import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1> welcome to {{pokemonList[0]}}</h1>`
})
export class AppComponent implements OnInit{
  pokemonList =[ 'Bulbizarre','Salameche', 'Carapuce'];

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon('Bulbizarre')
  }
// method select Pokemon 

  selectPokemon(pokemonName : string) {
    console.log(`vos avez clique sur le ${pokemonName}`)
  }
}
