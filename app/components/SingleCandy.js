import React from 'react';
import { getSingleCandyThunk } from '../reducers/index';
import { connect } from 'react-redux';

class SingleCandy extends React.Component {
  componentDidMount() {
    this.props.getSingleCandyThunk(this.props.match.params.id);
  }
  render() {
    const candy = this.props.candy;
    if (this.props.loading) return 'Loading...';
    return (
      <div>
        <h1>Here is your single candy:</h1>
        <img src={candy.imageUrl} />
        <h3>{candy.name}</h3>
        <h5>{candy.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
    candy: state.candy,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleCandyThunk: id => dispatch(getSingleCandyThunk(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCandy);
