import React from 'react';
import { getCandiesThunk } from '../reducers/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class AllCandies extends React.Component {
  componentDidMount() {
    this.props.getCandiesThunk();
  }
  render() {
    const candies = this.props.candies;
    if (this.props.loading) return 'Loading...';
    return (
      <div>
        <h1>These are all of your candies!</h1>
        {candies.map(candy => (
          <div key={candy.id}>
            <img className="candy-img" src={candy.imageUrl} />
            <Link to={`/candies/${candy.id}`}>
              <h3>{candy.name}</h3>
            </Link>
            <h5>{candy.description}</h5>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCandiesThunk: () => dispatch(getCandiesThunk()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCandies);
