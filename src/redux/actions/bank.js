import { DEPOSIT_MONEY, WITHDRAW_MONEY, RESET_ACOUNT } from "./const";

const deposit = () => {
  return {
    type: DEPOSIT_MONEY,
    payload: 10,
  };
};

const withdraw = () => {
  return {
    type: WITHDRAW_MONEY,
    payload: -10,
  };
};

const reset = () => {
  return {
    type: RESET_ACOUNT,
  };
};

export { deposit, withdraw, reset };
