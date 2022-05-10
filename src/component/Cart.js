//for sending all states in Cart, Redux is used.

import { Table } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import store from '../store';
import { changeCount } from '../store'

function Cart () {

    // let stateArray = useSelector( (state) => {return state})
    // console.log(stateArray.product[0]);

    let product = useSelector(state=>state.product);
    //console.log(product[0])
    let dispatch = useDispatch();
    return (
        <>
        <div>
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
                        <tr>
                        <td>{product[i].id}</td>
                        <td>{product[i].name}</td>
                        <td>{product[i].count}</td>
                        <td>
                            <button onClick={()=>{
                                dispatch(changeCount())
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