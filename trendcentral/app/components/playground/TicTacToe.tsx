import { useState } from 'react';

type Board = string[][];

const TicTacToe = () => {
    const [board, setBoard] = useState<Board>([
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
    ])

    return (
        <>
            <h1>Tic Tac Toe</h1>
            <h2>Player's Turn</h2>
        </>
    )

}

export default TicTacToe;