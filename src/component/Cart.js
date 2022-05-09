//for sending all states in Cart, Redux is used.

import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart () {

    // let stateArray = useSelector( (state) => {return state})
    // console.log(stateArray.product[0]);

    let product = useSelector(state=>state.product);
    //console.log(product[0])

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
                product.map(function(a,i){
                    return(
                        <tr>
                        <td>{product[i].id}</td>
                        <td>{product[i].name}</td>
                        <td>{product[i].count}</td>
                        <td>4</td>
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