import React, { Suspense } from 'react';

// games
// import TicTacToe from './TicTacToe';
const TicTacToe = React.lazy(() => import('./TicTacToe'))
const Counter = React.lazy(() => import('./Counter'))
const ContactForm = React.lazy(() => import('./ContactForm'))

interface GamePlaygroundProps {
  game: string;
}

const GamePlayground: React.FC<GamePlaygroundProps> = ({ game }) => {
    let gameComponent = null

    if(game === 'TicTacToe') {
        gameComponent = (
          <Suspense fallback={<p> Loading... Tic Tac Toe</p>}>
            <TicTacToe />
          </Suspense>
        )
    }
    if(game === 'Counter') {
      gameComponent = (
        <Suspense fallback={<p> Loading... Tic Tac Toe</p>}>
          <Counter />
        </Suspense>
      )
  }
  if(game === 'ContactForm') {
    gameComponent = (
      <Suspense fallback={<p> Loading... Tic Tac Toe</p>}>
        <ContactForm />
      </Suspense>
    )
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
