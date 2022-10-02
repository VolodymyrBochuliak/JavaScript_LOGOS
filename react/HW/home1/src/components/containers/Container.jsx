import { Component } from "react";
import '../containers/container.scss';
import Counter from '../counter/Counter';


class Container extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="yellow_container">
                <Counter />
            </div>
        )
    }
}

export default Container;
