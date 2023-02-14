import { jugadorCartas, computadoraCartas } from "..";

export const crearCartaJugador = (carta: string) => {
    const mostrarCartas = document.createElement('img');
    mostrarCartas.src   = `../dist/assets/cartas/${carta}.png`;
    mostrarCartas.classList.add('card');
    jugadorCartas?.append(mostrarCartas);
}

export const crearCartaComputadora = (carta: string) => {
    const mostrarCartas = document.createElement('img');
    mostrarCartas.src   = `../dist/assets/cartas/${carta}.png`;
    mostrarCartas.classList.add('card');
    computadoraCartas?.append(mostrarCartas);
}