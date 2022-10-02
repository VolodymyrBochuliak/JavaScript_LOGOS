import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        
        
    }
        
    render() {
        
        const handleChangeNumber = () => {
            const value = Math.round(Math.random() * 10e3);
            
        };

        return (
            <div>
                <div>
                    {/* Counter: {number} */}
                </div>
                <button onClick = {handleChangeNumber}>
                    Update
                </button>
            </div>
        )
    }
    

    
}

export default Counter;
