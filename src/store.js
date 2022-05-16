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
        // changeCount(state, i){
        // state[i.payload.type].count++;
        // }
        changeCount(state) {
            state.count += 1;
        }
    }
})

export let { changeCount } = product.actions;

let user = createSlice({
    name: 'user',
    initialState: 'jjong',
    reducers: {
        changeName(state){
            return 'john';            
        }
    }

})

export let { changeName } = user.actions;



export default configureStore({
    reducer: {
        product : product.reducer,
        user: user.reducer
    }
})