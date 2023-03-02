const cells = document.querySelectorAll('.cell');
let turn = 'X';

function play() {
    cells.forEach(cell => {
        cell.addEventListener('click', e => {
            if (e.target.textContent === '') {
                e.target.textContent = turn;
                checkWin();
                turn = turn === 'X' ? 'O' : 'X';
            }
        });
    });
}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (cells[a].textContent !== '' && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) {
            alert(`${cells[a].textContent} wins!`);
            reset();
        }
    }
}

function reset() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
}

play();
