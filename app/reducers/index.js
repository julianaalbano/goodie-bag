import axios from 'axios';

const initialState = {
  candies: [],
};

//Action Type
const GET_CANDIES = 'GET_CANDIES';

//Action Creator
const getCandies = candies => ({
  type: GET_CANDIES,
  candies,
});

//Thunk
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

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      return {
        ...state,
        candies: action.candies,
      };
    default:
      return state;
  }
};

export default rootReducer;
