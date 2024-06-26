import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const data = [
    {
        name:'product 1',
        id:1
    },
    {
        name:'product 2',
        id:2
    },
    {
        name:'product 3',
        id:3
    }
]


const initialState = {
    productList : [],
    isLoading : false,
    isFailed : false
}

export const callProductListApi = createAsyncThunk('/product/callProductlistApi', async function(){
    try{
        const apiResponse = await fetch('https://dummyjson.com/products')
        const result = await apiResponse.json()
        return result;
    }catch(error){
        console.log(error);
    }
})

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        getProducts : (state)=>{
            state.productList = data
        }
    },
    extraReducers:{
        [callProductListApi.pending]:(state)=>{
            state.isLoading = true;
        },
        [callProductListApi.fulfilled]:(state,action)=>{
            const {products} = action.payload
            state.isLoading= false;
            state.productList = products;
        },
        [callProductListApi.rejected]:(state)=>{
            state.isLoading = false;
            state.isFailed = true;
        }
    }
})

export const {getProducts} = productSlice.actions;
export default productSlice.reducer;