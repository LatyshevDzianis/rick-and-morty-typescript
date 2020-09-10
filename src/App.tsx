import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";

import Header from "./components/blocks/Header";
import Characters from "./components/pages/Characters";
import Episodes from "./components/pages/Episodes";
import Locations from "./components/pages/Locations";
import CharacterDetails from "./components/pages/CharacterDetails";
import EpisodeDetails from "./components/pages/EpisodeDetails";
import LocationDetails from "./components/pages/LocationDetails";
import {
  CHARACTERS_URL,
  CHARACTER_DETAILS_URL,
  EPISODES_URL,
  EPISODE_DETAILS_URL,
  LOCATIONS_URL,
  LOCATION_DETAILS_URL,
  MAIN_ROUTE,
} from "./constants/routes";

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
`;

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path={MAIN_ROUTE}>
            <Redirect to={CHARACTERS_URL} />
          </Route>
          <Route path={CHARACTERS_URL} exact component={Characters} />
          <Route path={CHARACTER_DETAILS_URL} component={CharacterDetails} />
          <Route path={EPISODES_URL} exact component={Episodes} />
          <Route path={EPISODE_DETAILS_URL} component={EpisodeDetails} />
          <Route path={LOCATIONS_URL} exact component={Locations} />
          <Route path={LOCATION_DETAILS_URL} component={LocationDetails} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
