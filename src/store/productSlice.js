import { createSlice } from '@reduxjs/toolkit';


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
        // increaseCount(state, id) {
        //     state[id.payload].id += 1
        // }

        // increaseCount(state, id){
        //     for(let i = 0; i < state.length; i++){
        //         if(state[i].id === id.payload){
        //             state[i].count += 1;
        //         }
        //     }
        // }

        increaseCount(state, action){
            let num = state.findIndex((a)=>{
                return a.id === action.payload
            })
            state[num].count++;
        },

        addCartList(state, action){
            state.push({id: action.payload.id, name: action.payload.title, count: 1})
            
        }

        // increaseCount(state, id) {
        //     console.log(state[0].id)
        //     console.log(id.payload);
        // }
    }
})

export let { increaseCount, addCartList } = product.actions;


export default product