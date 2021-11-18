import React from 'react'

import {Link} from 'react-router-dom';

import Cartitem from './Cartitem';
import Total from './Total';
const Cart = ({cart,total,increaseQuantity,decreaseQuantity}) => {
    let array;
    function sortCart(c){
        array=c.sort((a,b)=>a.id-b.id);
        console.log(array);
        return array
        
    }
    

    return (
        cart.length!==0?
        <div style={{height:'80vh',overflowY:'auto',marginTop:'15vh'}}>
        <div class="cart-list">
            {sortCart(cart).map((c)=>{
                return <Cartitem details={c} total={total}  decreaseQuantity={decreaseQuantity}  increaseQuantity={increaseQuantity} />
            })}
            
        </div>
        <Total total={total} />
        </div>:
        <div style={{textAlign:'center',height:'80vh',overflowY:'auto',marginTop:'15vh'}}>
            <h2>No items in Cart</h2>
            <Link to="/">Add Items</Link>
        </div>
    )
}

export default Cart
