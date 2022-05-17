import { createSlice } from '@reduxjs/toolkit'


let user = createSlice({
    name: 'user',
    initialState: {name: 'jjong', item: 0},
    reducers: {
        changeName(state){
            state.name = 'cute ' + state.name;            
        },
        changeItem(state, action){            
            if(action.payload > 1){
                state.item += action.payload;
            }  
            else{state.item += 1; }        
        }
    }

})

export let { changeName, changeItem } = user.actions;


export default user