import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CounterProvider } from './contexts/counter';
import { SiteDataProvider } from './contexts/siteData';
import DefaultLayout from './layouts/Default';
import Home from './components/home';
import Users from './components/users';
import Form from './components/form';
import Play from './components/play';
import Transition from './components/transition';
import Debounce from './components/debounce';
import LocalStorage from './components/localStorage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <SiteDataProvider>
            <CounterProvider>
              <Routes>
                <Route element={<DefaultLayout />}>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/users" exact element={<Users/>} />
                  <Route path="/form" exact element={<Form />} />
                  <Route path="/play" exact element={<Play />} />
                  <Route path="/transition" exact element={<Transition />} />
                  <Route path="/debounce" exact element={<Debounce />} />
                  <Route path="/localstorage" exact element={<LocalStorage />} />
                </Route>
              </Routes>
            </CounterProvider>
        </SiteDataProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
