import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"

import {AllCatsPage} from './page/AllCatsPage'
import {CatHeader} from './components/CatHeader'
import {FavoriteCatsPage} from './page/FavoriteCatsPage'


function App() {
  return (
    <div>
        <BrowserRouter basename="/frontend-challenge.github.io">
          <CatHeader />

          <Switch>
            <Route exact path="/" component={AllCatsPage} />
            <Route exact path="/favorites" component={FavoriteCatsPage} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
