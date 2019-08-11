import React, { useContext } from 'react';
import CounterContext from './../../contexts/counter';

const Footer = () => {
    const context = useContext(CounterContext);

    return (
        <div className="app-separator">
            <p>My Counter {context.counter}</p>
            <h2>[Footer]</h2>
        </div>
    );
};

export default Footer;
