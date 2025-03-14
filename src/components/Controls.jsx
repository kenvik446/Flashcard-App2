import React from 'react'

const Controls = ({ onNext, onPrev, onShuffle }) => {
    return (
        <div className='controls'>
            <button onClick={onPrev}>Previous</button>
            <button onClick={onNext}>Next</button>
            <button onClick={onShuffle}>Shuffle Cards </button>
        </div>
    );
};

export default Controls;