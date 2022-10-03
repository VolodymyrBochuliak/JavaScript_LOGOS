import React, { Component } from 'react';
import './Bad_words_output.scss';
import Add from './buttons/Add_btn';

class BadWordsOutput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // badWords: []
        };
    }

    render() {
        return (
            <div className="inner_bad_words_output">
                <div className="words_output">
                    <div className="title">
                        <h4>Bad words :</h4>
                    </div>  
                    <div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default BadWordsOutput;

