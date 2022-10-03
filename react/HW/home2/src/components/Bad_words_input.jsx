import React, { Component } from 'react';
import Add from './buttons/Add_btn';
import Reset from './buttons/Reset_btn';
import './Bad_words_input.scss';


class BadWordsInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    AddBadWord () {
        
    }

    render() {
        return (
            <div className="inner_bad_words_input">
                <input
                    type="text"
                    placeholder="word here..."
                    onChange={this.AddBadWord} >
                </input>
                < Add />
                < Reset />
          </div>
        )
    }
}

export default BadWordsInput;