import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import ArticleListing from './pages/ArticleListing';
import Article from './pages/Article';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/article/:id">
            <Article />
        </Route>
        <Route path="/">
          <ArticleListing />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
