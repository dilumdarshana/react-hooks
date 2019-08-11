import React, { useCallback, useReducer, useContext, useEffect } from 'react';
import CouterContext from '../contexts/counter';
import SiteDataContext from '../contexts/siteData';

const Home = props => {
    const initialStates = { count: 10 };

    // If use reducer, then no need to think of useEffect hook
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    };

    const counterContext = useContext(CouterContext);
    const siteDataContext = useContext(SiteDataContext);
    const [state, dispatch] = useReducer(reducer, initialStates);

    useEffect(() => {
        siteDataContext.setPageTitle('Home');
    }, [siteDataContext]);

    // useCallback prevent function bind on each render
    const clickMe = useCallback(() => {
        counterContext.increaseCounter(state.count);
    }, [counterContext, state]);

    return (
        <div className="app-separator home-wrap">
            <p>
                My count is {state.count}
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            </p>
            <button className="btn-update-footer" onClick={clickMe}>
                Update Footer
            </button>
        </div>
    );
};

export default Home;
