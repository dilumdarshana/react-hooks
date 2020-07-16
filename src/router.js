import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from './history';
import { CounterProvider } from './contexts/counter';
import { SiteDataProvider } from './contexts/siteData';
import Header from './components/common/header';
import Footer from './components/common/footer';
import Home from './components/home';
import Users from './components/users';
import Form from './components/form';
import Play from './components/play';
import ErrorBoundary from './components/errorBoundary';

const router = () => (
    <BrowserRouter>
        <SiteDataProvider>
            <CounterProvider>
                <Route history={history}>
                    
                        <Header />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/users" exact component={Users} />
                            <Route path="/form" exact component={Form} />
                            <Route path="/play" exact component={Play} />
                        </Switch>
                        <ErrorBoundary>
                            <Footer />
                        </ErrorBoundary>
                </Route>
            </CounterProvider>
        </SiteDataProvider>
    </BrowserRouter>
);

export default router;
