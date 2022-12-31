const container = document.getElementById('container');

/**
 * Crea una matriz de divs de side * side
 * cuando llega al final de una fila (i % modificado === 0)
 * pasa a la proxima filas
 */
function createSquareOfDivs(side) {
    const totalSpaceOcupied = 16 * 16 * 25 * 25;
    const sideOfDiv = Math.sqrt(totalSpaceOcupied / (side * side));
    const total = (side * side) + side;
    const modificado = side + 1;
    for (let i = 1; i < total; i++) {
        const div = document.createElement('div');
        if (i % modificado === 0) {
            div.style.cssText = "border: 0; height: 0; width: 100%";
        } else {
            let estilo = `border: 1px solid black; height: ${sideOfDiv}px; width: ${sideOfDiv}px;`;
            div.style.cssText = estilo;
        }

        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';

        });
        container.appendChild(div);
    }
}
createSquareOfDivs(16);

const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', () => {
    let squares = parseInt(prompt('How many squares per side?'));
    container.innerHTML = '';
    createSquareOfDivs(squares);
});
