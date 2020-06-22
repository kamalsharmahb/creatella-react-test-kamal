import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
import GlobalStateContext  from './context/GlobalState';

function App() {
  return (
    <GlobalStateContext.Provider>
      <Router>
        <Switch>
          <Route path="/">
            <HomeLayout/>
          </Route>
        </Switch>
      </Router>
    </GlobalStateContext.Provider>
  );
}

export default App;