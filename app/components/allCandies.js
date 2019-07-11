import React from 'react';
import { getCandiesThunk } from '../reducers/index';
import { connect } from 'react-redux';

class AllCandies extends React.Component {
  componentDidMount() {
    this.props.getCandiesThunk();
  }
  render() {
    const candies = this.props.candies;
    return (
      <div>
        <main>
          <h1>These are all of your candies!</h1>
          {candies.map(candy => (
            <div key={candy.id}>
              <img src={candy.imageUrl} />
              <h3>{candy.name}</h3>
              <h5>{candy.description}</h5>
            </div>
          ))}
        </main>
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
