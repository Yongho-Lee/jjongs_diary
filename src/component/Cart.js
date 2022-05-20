//for sending all states in Cart, Redux is used.

import { Table } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { memo, useState } from 'react';
import { increaseCount} from '../store/productSlice';
import { changeName, changeItem } from '../store/userSlice'


function Cart () {

    // let stateArray = useSelector( (state) => {return state})
    // console.log(stateArray.product[0]);

    let product = useSelector(state=>state.product);
    let user = useSelector(state=>state.user);
    //console.log(product[0])
    let dispatch = useDispatch();

    //memo test count
    let [count2, setCount] = useState(0)

    return (
        <>
        <div>
            <p> {user.name}'s cart</p> <Button onClick={()=>{
                dispatch(changeName())
            }}> ? </Button>
            <p> has {user.item} item(s) in cart</p>
            <button onClick={()=>{
                dispatch(changeItem())
            }}> Item + </button>

            <button onClick={()=>{
                dispatch(changeItem(10))
            }}> Item +10 </button>
            <Table>

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                {
                    //return문과 중괄호는 생략 가능함. 
                product.map(function(a,i){
                    return(
                        <tr key={i}>
                            <td >{i+1}</td>
                            <td>{product[i].name}</td>
                            <td>{product[i].count}</td>
                        <td>
                            {/* <button onClick={()=>{
                                dispatch(changeCount({type:i}))
                            }}>
                                +
                            </button> */}
                            <button onClick={()=>{
                                dispatch(increaseCount(product[i].id))
                            }}>
                                +
                            </button>
                        </td>
                    </tr>
                    )
                })}
                </tbody>
            </Table>
        </div>

        {/* memo render test */}
        <Child></Child>
        <button onClick={() => { setCount(count2+1)}}>+</button>
        </>
    )

}

let Child = memo( function () {
    console.log("rendered")
    return <div> memo render test </div>
})

export default Cart;   