import React, { useState } from 'react';
import Button from '../Button';
import WordsArray from '../Bad_word';
import '../Main/main.scss';

const Main = () => {

    const [censorText, setCensorText] = useState('');
    const [censorWords, setCensorWords] = useState([]);
    
    const [userText, setUserText] = useState([]);

    // const [inputText, setInputText] = useState('');

    const addHandler = () => {
        setCensorWords([...censorWords, censorText]);
        setCensorText('')
        // console.log([...censorWords, censorText]);
    }
    
    // const showBadWords = () => {
    //     setCensorWords([...censorWords]);
    // }
    // let word = ['hello', 'what', 'is', 'your', 'name', '?'];
    
    // const changeInputTextHandler = (event) => {
    //     setInputText(event.target.value);
    // }
    
    const changeCensorTextHandler = (event) => {
        setCensorText(event.target.value);
    }

    const clearHandler = () => {
        setCensorWords([]);
        // console.log(censorWords);
    }

    const readUserText = (event) => {
        setUserText(event.target.value)
        // console.log(event.target.value)
    }

    const changeUserText = () => {
        userText.split(' ') 
        console.log(userText)
    }

    const censorHandler = () => {
        // console.log(censorWords);
        // console.log(inputText);
        censorWords.forEach(); ///////////////
    }
    return (
        <div className='main'>
            <div className='main_container'>
                <div className="bad_words_output">
                    <div className="words_output">
                        <div className="title">
                            <h4>Bad words:</h4>
                        </div>  
                        {/* < WordsArray showBadWords={showBadWords} word={word}/> */}
                        < WordsArray censorWords={censorWords} />
                    </div>
                </div>
                <div className='bad_words_input'>
                    <input onChange={changeCensorTextHandler} className='' value={censorText} placeholder="word here..." />
                    <Button onClick={addHandler} className='add_btn'>Add</Button>
                    <Button onClick={clearHandler} className='reset_btn'>Reset</Button>
                </div>
                <div>
                    {/* <input onChange={changeInputTextHandler} value={reviewText} placeholder="text here..." /> */}
                    <textarea  onChange={readUserText} className='text_input_area' placeholder="text here..." />
                    {/* <Button onClick={censorHandler} className='censor_btn'>Censor</Button> */}
                    <Button onClick={changeUserText} className='censor_btn'>Censor</Button>
                </div>
            </div>
        </div> 
    )
}
export default Main