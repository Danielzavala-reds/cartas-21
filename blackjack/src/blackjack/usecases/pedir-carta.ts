export const pedirCarta = (deck: string[]): string => {

    

    if(deck.length === 0){
        throw 'Las cartas ya se terminaron'
    }

    const cartaTomada = deck.pop(); 

    // console.log(deck)
    // console.log({cartaTomada})
    return cartaTomada!; /* Colocamos un ! para indicarle a TS que siempre se va a tomar una carta */
}