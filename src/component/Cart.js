//for sending all states in Cart, Redux is used.

import { Table } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { increaseCount} from '../store/productSlice';
import { changeName, changeItem } from '../store/userSlice'
import { Button } from 'react-bootstrap';


function Cart () {

    // let stateArray = useSelector( (state) => {return state})
    // console.log(stateArray.product[0]);

    let product = useSelector(state=>state.product);
    let user = useSelector(state=>state.user);
    //console.log(product[0])
    let dispatch = useDispatch();

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
                            <td >{product[i].id}</td>
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


        </>
    )

}



export default Cart;   