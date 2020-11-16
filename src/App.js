import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppContext from 'AppContext';

import Favorites from 'pages/Favorites';
import All from 'pages/All';

import './App.scss';
import AppHeader from 'components/AppHeader';
import Utils from 'common/Utils';

function App() {
  const [todoList, setTodoList] = useState(Utils.getListFromStorage());

  useEffect(() => {
    Utils.setListInStorage(todoList);
  }, [todoList]);

  return (
    <AppContext.Provider value={{ todoList, setTodoList }}>
      <Router>
        <div className="App">
          <div className="App-header">
            <AppHeader />
          </div>
          <Switch>
            <Route exact path="/" render={() => <All />} />
            <Route exact path="/fav" render={() => <Favorites />} />
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
