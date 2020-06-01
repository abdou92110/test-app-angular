import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from  './pokemons/pokemon';
import { POKEMONS } from './pokemons/mock-pokemon';


@Component({
    selector:'pokemon-app',
    templateUrl :`./app/app.component.html`
})
export class AppComponent implements OnInit {

private pokemons: Pokemon [];
private title: string= "liste des pokémons";


ngOnInit() {
    this.pokemons = POKEMONS;
 }

 selectPokemon(pokemon : Pokemon){
     alert("vous avez cliqueé sur "+pokemon.name);
 }
}