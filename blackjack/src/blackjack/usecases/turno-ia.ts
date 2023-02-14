import { pedirCarta, valorCarta } from "./";
import { crearCartaComputadora } from './crear-cartas-html';

export const turnoIA = (puntosMinimos: number, puntajeComputadora: HTMLElement ,deck: string[] = []): void => {

    let puntosComputadora: number = 0
    
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = puntosComputadora + valorCarta(carta);
         
        puntajeComputadora!.innerHTML = `${puntosComputadora}`;

        crearCartaComputadora(carta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {

        if (puntosComputadora === puntosMinimos) {
            alert('Empate')
        } else if (puntosMinimos > 21) {
            alert('La computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana')
        } else {
            alert('Computadora gana')
        }
    }, 100);
}
