import React from 'react';
import AllCandies from './allCandies';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          Goodie Bag!
          <Link to="/">Home</Link>
          <Link to="/candies">All Candies</Link>
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
          <Route exact path="/" />
          <Route exact path="/candies" component={AllCandies} />
        </main>
      </div>
    </Router>
  );
};

export default Root;
