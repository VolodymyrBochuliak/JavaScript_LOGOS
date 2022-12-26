import React, { useState } from 'react';
import Button from '../Button';
import WordsArray from '../Bad_word';
import '../Main/main.scss';

const Main = () => {

    const [censorText, setCensorText] = useState('');
    const [censorWords, setCensorWords] = useState([]);
    
    const [userText, setUserText] = useState([]);

    const addHandler = () => {
        setCensorWords([...censorWords, censorText]);
        setCensorText('');
    };
   
    const changeCensorTextHandler = (event) => {
        setCensorText(event.target.value);
    };

    const clearHandler = () => {
        setCensorWords([]);
        setUserText('');
    };

    const readUserText = (event) => {
        setUserText(event.target.value);
    };

    const changeUserText = () => {  
        const words = userText.split(' ');
        const newWords = words.map((word) => {
              return censorWords.includes(word)
              ? word.replace(word, "*".repeat(word.length))
              : word;
        });
          
        setUserText( newWords.join(' ') );
        
       console.log(userText);
    };

    return (
        <div className='main'>
            <div className='main_container'>
                <div className="bad_words_output">
                    <div className="words_output">
                        <div className="title">
                            <h4>Bad words:</h4>
                        </div>  
                        < WordsArray censorWords={censorWords} />
                    </div>
                </div>
                <div className='bad_words_input'>
                    <input onChange={changeCensorTextHandler} className='' value={censorText} placeholder="word here..." />
                    <Button onClick={addHandler} className='add_btn'>Add</Button>
                    <Button onClick={clearHandler} className='reset_btn'>Reset</Button>
                </div>
                <div>
                    <textarea  onChange={readUserText} className='text_input_area' value={userText} placeholder="text here..." />
                    <Button onClick={changeUserText} className='censor_btn'>Censor</Button>
                </div>
            </div>
        </div> 
    )
}
export default Main