import { configureStore, createSlice } from "@reduxjs/toolkit";

const details={
    balance:0,
    fullName:"",
    mobile:null
}
const transactions=[]
const userSlice=createSlice({
    name:"user",
    initialState:details,
    reducers:{
        updateMobile:(state,action)=>{
            state.mobile=action.payload;
        },
        updateName:(state,action)=>{
            state.fullName=action.payload;
        },
        withdraw:(state,action)=>{
            state.balance=state.balance-action.payload;
        },
        deposite:(state,action)=>{
            state.balance+=+action.payload;
        },
        reset:(state)=>{
            state.fullName="";
            state.mobile=null;
            state.balance=0;
        }
    }

});

const transactionSlice=createSlice({
    name: 'transaction',
    initialState:transactions,
    reducers: {
        addTransaction: (state, action) => {
            state.push(action.payload);
        }
    }
});

const store=configureStore({
    reducer:{
        user:userSlice.reducer,
        transaction:transactionSlice.reducer
    }
})
export default store;
export const {updateMobile,updateName,withdraw,deposite,reset}=userSlice.actions;
export const {addTransaction}=transactionSlice.actions;