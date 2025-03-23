import { useState } from 'react';

type Board = string[][];

const TicTacToe = () => {
    const [board, setBoard] = useState<Board>([
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
    ])
    const [winner, setWinner] = useState<string | null>(null)
    const [isXNext, setIsXNext] = useState<boolean>(true)

    const handleCellClick = (row: number, col:number) => {
        if(board[row][col]!=' ' || winner) return
        const newBoard = [...board];
        newBoard[row][col] = isXNext ? 'X' : 'O';
        setBoard(newBoard)
        setIsXNext(!isXNext)

        const win = checkWinner()
        if(win){
            setWinner(win)
        }

    }
  
    const checkWinner = (): string | null => {
        for (let i = 0; i < 3; i++) {
            // Check rows
            if (board[i][0] !== ' ' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
              return board[i][0];
            }
            // Check columns
            if (board[0][i] !== ' ' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
              return board[0][i];
            }
        }
        // diagnols
        if (board[0][0] !== ' ' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return board[0][0];
        }
        if (board[0][2] !== ' ' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            return board[0][2];
        }
        return null;
    }

    const handleReset= () => {
        setBoard([
            [' ',' ',' '],
            [' ',' ',' '],
            [' ',' ',' ']
        ])
        setWinner(null)
        setIsXNext(true)
    }

    return (
        <div className="text-center p-6">
            <h2 className="text-xl mb-4">{winner ? `Winner: ${winner}` : `Player ${isXNext ? 'X' : 'O'} Turn`}</h2>
            {/* Game Area */}
            <div className="inline-block border-2 border-gray-800">
             {board.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {row.map((cell, colIndex) => (
                    <div
                        key={colIndex}
                        className="w-20 h-20 flex items-center justify-center border border-gray-300 text-2xl font-bold cursor-pointer"
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                    >
                        {cell}
                    </div>
                    ))}
                </div>
                ))}
            </div>
            <button
                className='m-6 px-6 py-2 bg-blue-600 text-white'
                onClick={() => handleReset()}
                >
                Reset Game
            </button>
        </div>
    )

}

export default TicTacToe;