import React, { useState } from 'react';

const Add = () => {

    const WordsFromStorage = JSON.parse(localStorage.getItem('BadWords')) || [];
    const [words, setWords] = useState(WordsFromStorage);

    const updateWordList = newWord => {
        setWords([...words, newWord]);
        localStorage.setItem('BadWords', JSON.stringify([...words, newWord]));
    }

    return (
        <div>
           <button className='add_btn' onClick={updateWordList}>Add</button>
        </div>
    )
}

export default Add;