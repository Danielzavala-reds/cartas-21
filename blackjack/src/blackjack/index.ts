import { crearDeck, crearCartaJugador ,pedirCarta, valorCarta, turnoIA } from "./usecases";


let deck: string[]         = [] 
let tipos: string[]        = ['C', 'D', 'H', 'S']
const especiales: string[] = ['A','J','Q','K']

let puntosJugador:number     = 0,
    puntosComputadora:number = 0;

// Selectors
export const btnNW       = document.querySelector('#btnNW'),
      btnPedirCarta      = document.querySelector('#btnPedirCarta'),
      btnStop            = document.querySelector('#btnStop'),
      computadoraCartas  = document.querySelector('#computadora-cartas'),
      jugadorCartas      = document.querySelector('#jugador-cartas'),
      puntajeComputadora = document.querySelector('#puntajeComputadora'),
      puntajeJugador     = document.querySelector('#puntajeJugador');

deck = crearDeck(tipos, especiales);

// Eventos
btnPedirCarta?.addEventListener('click', () => {
    
    const carta   = pedirCarta(deck);
    puntosJugador = puntosJugador + valorCarta(carta);

    console.log(puntosJugador);

    puntajeJugador!.innerHTML = `${puntosJugador}`;

    crearCartaJugador(carta);

    if(puntosJugador > 21){
        console.warn('Has perdido');
        (btnPedirCarta as HTMLButtonElement).disabled = true;
        (btnStop as HTMLButtonElement).disabled = true;
        turnoIA(puntosJugador, (puntajeComputadora as HTMLElement),  deck);

    } else if(puntosJugador === 21){
        (btnPedirCarta as HTMLButtonElement).disabled = true;
        (btnStop as HTMLButtonElement).disabled = true;
        console.warn('21!!!!');
        turnoIA(puntosJugador, (puntajeComputadora as HTMLElement), deck);
    }
});

btnStop?.addEventListener('click', () => {
    (btnPedirCarta as HTMLButtonElement).disabled = true;
    (btnStop as HTMLButtonElement).disabled       = true;

    turnoIA( puntosJugador, (puntajeComputadora as HTMLElement), deck );
});

btnNW?.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    puntajeComputadora!.innerHTML = `${puntosComputadora}`
    puntajeJugador!.innerHTML     = `${puntosJugador}`

    jugadorCartas!.innerHTML     = ``;
    computadoraCartas!.innerHTML = ``;

    (btnPedirCarta as HTMLButtonElement).disabled = false;
    (btnStop as HTMLButtonElement).disabled       = false;
})


// TODO: Borrar
// console.log(16);
// turnoIA( 16 );




