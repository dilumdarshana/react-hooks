import React, { Component } from 'react';
import CounterContext from './../../contexts/counter';

class Footer extends Component {
    static contextType = CounterContext;

    render() {
        return (
            <div className="app-separator">
                <p>My Counter {this.context.counter}</p>
                <h2>[Footer]</h2>
            </div>
        );
    }
}

export default Footer;
