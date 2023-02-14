import { randomizar } from "./randomizar-deck";


export const crearDeck = (tiposDeCarta:string[], tiposEspeciales:string[]): string[] => {

   /* La idea es que mientras vayamos haciendo funciones las vayamos protegiendo con validaciones o documentación */
   
   let deck: string[] = []
    
    for(let i = 2; i <= 10; i++){
        for(let tipo of tiposDeCarta  ){

            deck.push( i + tipo)
        }
    }

    for(let tipo of tiposDeCarta){
        for(let especial of tiposEspeciales){
            deck.push(especial + tipo)
        }
    }

    // console.log(deck); /* Antes de randomizar */
    deck = randomizar(deck);
    console.log(deck); /* Despues de randomizar */

    return deck;
}

