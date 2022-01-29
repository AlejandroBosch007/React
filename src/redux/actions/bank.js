const DEPOSIT_MONEY = "DEPOSIT_MONEY"
const WITHDRAW_MONEY = "WITHDRAW_MONEY"
const RESET_ACOUNT = "RESET_ACOUNT"


const deposit = () => {
    return {
        type: DEPOSIT_MONEY,
        payload: 10
    }
}

const withdraw = () => {
    return {
        type: WITHDRAW_MONEY,
        payload: -10
    }
}

const reset = () => {
    return {
        type: RESET_ACOUNT,
        payload: -10
    }
}




export {deposit,withdraw,reset}