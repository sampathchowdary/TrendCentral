'use client';  // Add this directive for client-side rendering

import { useState } from 'react';

import GameList from "../components/playground/GameList";
import GamePlayground from "../components/playground/GamePlayground";

const Playground: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const gameNames = ['TicTacToe', 'Counter', 'ContactForm', 'ConditionalRendering', 'Accordion', 'DragDrop'];

  return (
    <div>
      <section className="flex flex-col md:flex-row max-w-7xl mx-auto p-6 space-y-8 md:space-y-0">
        <div className="md:w-1/3 bg-gray-100 p-4">
          <GameList 
            gameNames={gameNames} 
            onGameSelect={setSelectedGame} 
          />
        </div>
        <div className="md:w-2/3 bg-white p-4">
          {selectedGame ? (
            <GamePlayground game={selectedGame} />
          ) : (
            <div className="text-center text-lg text-gray-500">Select a game </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Playground;
