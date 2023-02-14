/* Funcion para barajear el deck */
export function randomizar(deck: string[]) {
    let i, j, temp;
    for (i = deck.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
    return deck;
  };
/* ----------------------------------- */