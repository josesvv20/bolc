import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { UL, Nav, LINK, MainTitle, PageLayout, Element, ElementLayout, SecondaryTitle } from './AppStyle';

function App() {
  return (
      <Router>
        <div>
          <Nav>
            <div>svv logo</div>
            <UL>
              <li>
                <LINK to="/prosjektleder">Prosjektleder</LINK>
              </li>
              <li>
                <LINK to="/kontroll">Kontroll og godkjenning</LINK>
              </li>
              <li>
                <LINK to="/leverandor">Leverandører</LINK>
              </li>
            </UL>
          </Nav>

          <Switch>
            <Route path="/kontroll">
              <PageLayout>
                <MainTitle>Kontroll og godkjenning</MainTitle>
              </PageLayout>
            </Route>
            <Route path="/leverandor">
              <PageLayout>
                <MainTitle>Leverandør</MainTitle>
              </PageLayout>
            </Route>
            <Route path="/prosjektleder" >
              <PageLayout>
                <MainTitle>Prosjektleder</MainTitle>
                <ElementLayout>
                  <Element>Visualisering av Mengder: Stål og betong</Element>
                  <Element>Statuskoder som mengdene har</Element>
                  <Element>Forbrukt CO2</Element>
                  <Element>Armering betong</Element>
                  <Element>Mengder snakke med ISY PØ</Element>
                </ElementLayout>
              </PageLayout>
            </Route>
            <Route path="/" >
              <PageLayout>
                <MainTitle>Open Live Center</MainTitle>
                <SecondaryTitle>Bjørnafjorden Ferjefri E39 SVV</SecondaryTitle>
              </PageLayout>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
