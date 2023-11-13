import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems : []
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
             console.log(state,action);
            let copyCurrentItems = [...state.cartItems]
            const index = copyCurrentItems.findIndex(item=>item.id === action.payload.id)
            console.log(index,'index');

            if(index === -1){
                copyCurrentItems.push({
                    ...action.payload,
                    quantity : 1
                })
            }
            else{
                copyCurrentItems[index] = {
                    ...copyCurrentItems[index],
                    quantity:copyCurrentItems[index].quantity+1,
                }
            }

            state.cartItems = copyCurrentItems;

        },

        removeFromCart : (state,action)=>{
            let updateCurrentItemsAfterRemove = [...state.cartItems]
            const indexOfRemovedItem = updateCurrentItemsAfterRemove.findIndex(item=>item.id === action.payload.id)

            const {quantity} = updateCurrentItemsAfterRemove[indexOfRemovedItem];
            if(quantity<=1){
                updateCurrentItemsAfterRemove = updateCurrentItemsAfterRemove.filter(item => item.id !== action.payload.id)
            }
            else{
                updateCurrentItemsAfterRemove[indexOfRemovedItem] = {
                    ...updateCurrentItemsAfterRemove[indexOfRemovedItem],
                    quantity : updateCurrentItemsAfterRemove[indexOfRemovedItem].quantity-1
                }
            }

            state.cartItems = updateCurrentItemsAfterRemove
        }
    }
})


export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer