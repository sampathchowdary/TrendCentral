import React from 'react';

interface GameListProps {
  gameNames: string[];
  onGameSelect: (game: string | null) => void;
}

const GameList: React.FC<GameListProps> = ({ gameNames, onGameSelect }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Games</h2>
      <ul>
        {gameNames.map((game, index) => (
          <li
            key={index}
            className="cursor-pointer p-2 hover:bg-gray-200 rounded"
            onClick={() => onGameSelect(game)}
          >
            {game}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
