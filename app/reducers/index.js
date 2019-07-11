import axios from 'axios';

const initialState = {
  candies: [],
  candy: {},
  loading: true,
};

//Action Types
const GET_CANDIES = 'GET_CANDIES';
const GET_SINGLE_CANDY = 'GET_SINGLE_CANDY';

//Action Creators
const getCandies = candies => ({
  type: GET_CANDIES,
  candies,
});

const getSingleCandy = candy => ({
  type: GET_SINGLE_CANDY,
  candy,
});

//Thunks
export const getCandiesThunk = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/candies');
      dispatch(getCandies(data));
    } catch (err) {
      console.log('ERROR getting candies', err);
    }
  };
};

export const getSingleCandyThunk = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/candies/${id}`);
      dispatch(getSingleCandy(data));
    } catch (err) {
      console.log('ERROR getting single candy', err);
    }
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      return {
        ...state,
        candies: action.candies,
        loading: false,
      };
    case GET_SINGLE_CANDY:
      return {
        ...state,
        candy: action.candy,
        loading: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
