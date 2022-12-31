const container = document.getElementById('container');

/**
 * Crea una matriz de divs de side * side
 * cuando llega al final de una fila (i % modificado === 0)
 * pasa a la proxima filas
 */
function createSquareOfDivs(side) {
    const total = (side * side) + side;
    const modificado = side + 1;
    for (let i = 1; i < total; i++) {
        const div = document.createElement('div');
        if (i % modificado === 0) {
            div.style.cssText = "border: 0; height: 0; width: 100%";
        } else {
            div.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
        }

        container.appendChild(div);
    }
}

createSquareOfDivs(16);
