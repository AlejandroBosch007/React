const initialState = {
  amount: 0,
};

const bankReducer =  (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT_MONEY":
      return { ...state, amount: state.amount + 10 };
    case "WITHDRAW_MONEY":
      return { ...state, amount: state.amount - 10 };
    case "RESET_ACOUNT":
      return { ...state, amount: initialState.amount };
    default:
      return state;
  }
};

export {bankReducer}