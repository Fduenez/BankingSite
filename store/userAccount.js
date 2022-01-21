import {createSlice} from "@reduxjs/toolkit";

const initialState = {
     name: "john Doe",
     accounts : [
         {
               nameOfAccount: "advantage savings -3278",
               balance: "$17,000"
         },
          {
               nameOfAccount: "advantage college -0213",
               balance: "$10,000"
          }
     ],
     recentTransactions: [
          {
               id: "1208369",
               nameOfTransaction: "STEAMGAMES.COM 343456445 01/18 PURCHASE 3457-45679 WA",
               dateOfTransaction: "January 18, 2022",
               priceOfTransaction: "$30"
          },
          {
               id: "26451",
               nameOfTransaction: "STEAMGAMES.COM 343456445 01/18 PURCHASE 3457-45679 WA",
               dateOfTransaction: "January 18, 2022",
               priceOfTransaction: "$30"
          },
          {
               id: "12912",
               nameOfTransaction: "STEAMGAMES.COM 343456445 01/18 PURCHASE 3457-45679 WA",
               dateOfTransaction: "January 18, 2022",
               priceOfTransaction: "$30"
          },
          {
               id: "10931",
               nameOfTransaction: "STEAMGAMES.COM 343456445 01/18 PURCHASE 3457-45679 WA",
               dateOfTransaction: "January 18, 2022",
               priceOfTransaction: "$30"
          }
     ]
}

const userAccountSlice = createSlice({
     name: "userAccount",
     initialState: initialState,
     reducers: {
          addNewAccount(state, action){
              state.accounts.push({nameOfAccount: action.nameOfAccount, balance: action.balance});
          }
     }
})

export const userAccountActions = userAccountSlice.actions;
export default userAccountSlice.reducer;