import React, { useCallback, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const Header = props => {
    const doNavigate = useCallback(
        path => {
            props.history.push(path);
        },
        [props]
    );

    return (
        <div className="app-separator">
            <h2>WELCOME!</h2>
            <nav className="navigation">
                <ul>
                    <li>
                        <button onClick={() => doNavigate('/')}>Home</button>
                    </li>
                    <li>
                        <button onClick={() => doNavigate('/users')}>Users</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default withRouter(Header);
