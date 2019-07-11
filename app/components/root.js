import React from 'react';
import AllCandies from './allCandies';
import Home from './Home';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import SingleCandy from './SingleCandy';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/candies">All Candies</Link>
        </nav>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/candies" component={AllCandies} />
          <Route exact path="/candies/:id" component={SingleCandy} />
        </main>
      </div>
    </Router>
  );
};

export default Root;
