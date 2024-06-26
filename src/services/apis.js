const REACT_APP_BASE_URL = "https://bank-app-server.onrender.com/api/v1";

export const transactionEndpoints = {
        DEPOSITE_API : REACT_APP_BASE_URL + "/transaction/deposit",
        WITHDRAW_API: REACT_APP_BASE_URL + "/transaction/withdraw",
        HISTORY_API: REACT_APP_BASE_URL + "/transaction/allTransaction",
}
