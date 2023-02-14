export const valorCarta = (carta: string) => {

    const valor: string = carta.substring(0, carta.length - 1); /* El metodo substring regres aun nuevo string cortado en base a la posicion inicial y un final que pdemos definir*/
  
    return (Number.isNaN(Number(valor))) ? 
                (valor === 'A') ? 11 : 10
                : parseInt(valor)

    
};