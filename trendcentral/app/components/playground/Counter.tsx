
import React, { useState } from 'react';

const Counter:React.FC = () => {
    const [counter, setCounter] = useState<number>(0);

    const handleIncrement = () => {
        setCounter(counter+1);
    }
    const handleDecrement = () => {
        setCounter(counter-1);
    }

    return (
        <div className='flex flex-col items-center bg-gray-200'>
            <button className='px-6 py-2 items-center bg-blue-300 rounded-lg' onClick={handleIncrement}>Increment</button>
            <span className='text-3xl font-bold text-gray-800'>{counter}</span>
            <button className='px-6 py-2 items-center bg-red-300 rounded-lg' onClick={handleDecrement}>Decrement</button>
        </div>
    )
}
export default Counter;