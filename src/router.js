import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import history from "./history";
import { CounterProvider } from "./contexts/couter";
import { SiteDataProvider } from "./contexts/siteData";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Home from "./components/home/home";
import Users from "./components/users/users";

const router = () => (
  <BrowserRouter>
    <SiteDataProvider>
      <CounterProvider>
        <Route history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" exact component={Users} />
          </Switch>
          <Footer />
        </Route>
      </CounterProvider>
    </SiteDataProvider>
  </BrowserRouter>
);

export default router;
