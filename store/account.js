import { createSlice } from "@reduxjs/toolkit";

export const accountDetails = createSlice({
    name: "account",
    initialState: {
        account: "",
        contract: {}
    },
    reducers: {
        setAccount: (state, action) => {
            state.account = action.payload;
        },
        setContract: (state, action) => {
            state.contract = action.payload;
        }
    }
})

export const { setAccount, setContract } = accountDetails.actions;

export default accountDetails.reducer;