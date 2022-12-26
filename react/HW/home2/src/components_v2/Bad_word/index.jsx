import React, { useState } from 'react';
import '../Bad_word/bad_words.scss'

const WordsArray = (props) => {

    return (
        <div className='bad_words_inner'>
           {/* {console.log(props)} */}
           {props.censorWords.join(', ')}
       </div>
    )
    
}


export default WordsArray