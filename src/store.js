import { configureStore, createSlice } from '@reduxjs/toolkit'

let product = createSlice({

    name: 'product',
    initialState: [{
        id: 0,
        name: "White and Black",
        count: 2
    },
    {
        id: 2,
        name : 'Grey Yordan',
        count : 1
    }],
    reducers: {
        changeCount(state){
            return state + 1
        }
    }
})

export let { changeCount } = product.actions;


export default configureStore({
    reducer: {
        product : product.reducer
    }
})