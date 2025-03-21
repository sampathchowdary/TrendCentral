import React from 'react';

// games
import TicTacToe from './TicTacToe';

interface GamePlaygroundProps {
  game: string;
}

const GamePlayground: React.FC<GamePlaygroundProps> = ({ game }) => {
    let gameComponent = null

    if(game === 'TicTacToe') {
        gameComponent = <TicTacToe />
    }
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Now Playing: {game}</h2>
      <div className="h-96 bg-gray-200 rounded-md flex justify-center items-center">
        { gameComponent ? (
            gameComponent
        ) : <p className="text-xl text-gray-500">Game Playground for {game}</p>
        }
      </div>
    </div>
  );
};

export default GamePlayground;
