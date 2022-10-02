import { Component } from "react";
import '../containers/container2.scss';
import Counter from '../counter/Counter';


class Container extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="green_container">
                <Counter />
            </div>
        )
    }
}

export default Container;
