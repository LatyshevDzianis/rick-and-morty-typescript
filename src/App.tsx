import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from "./components/blocks/Header";
import Characters from "./components/pages/Characters";
import Episodes from "./components/pages/Episodes";
import Locations from "./components/pages/Locations";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/characters" exact component={Characters}/>
        <Route path="/episodes" exact component={Episodes}/>
        <Route path="/locations" exact component={Locations}/>
      </Switch>
    </Router>
  );
}

export default App;
