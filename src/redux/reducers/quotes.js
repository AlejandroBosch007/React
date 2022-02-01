import { SAVE_QUOTE,SAVING_QUOTE,SAVED_QUOTE,SAVE_QUOTE_ERROR } from "../actions/const";
const initialState = {
  quotes: [
    {
      id: 1,
      author: "Nemesis",
      quote: "STARS",
    },
    {
      id: 2,
      author: "Pikachu",
      quote: "Pika",
    },
    {
      id: 3,
      author: "Groot",
      quote: "I am Groot",
    },
    {
      id: 4,
      author: "Hodor",
      quote: "Hodor",
    },
  ],
  loading:false,
  error:{}

};

const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_QUOTE:
      return { ...state, quotes: [...state.quotes, action.quote] };
    case SAVING_QUOTE:
      return { ...state, loading: true };
    case SAVED_QUOTE:
      return { ...state, loading: false };
    case SAVE_QUOTE_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export { quotesReducer };
