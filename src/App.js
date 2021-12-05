import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Start from './components/Start';
import Game from './components/Game';
import GameState from './context/game/gameState'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";

function App() {

  return (
    <>
    <GameState>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route exact path="/gamestarted">
          <Game />
        </Route>
      </Switch>
    </Router>
    </GameState>
    </>
  );
}

export default App;
