import React from 'react'
import Cartitem from './Cartitem';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Total from './Total';
const Cart = ({cart,total,calTotal,increaseQuantity,decreaseQuantity}) => {
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
                return <Cartitem details={c} total={total} calTotal={calTotal} decreaseQuantity={decreaseQuantity}  increaseQuantity={increaseQuantity} />
            })}
            
        </div>
        <Total total={total} />
        </div>:
        <div style={{textAlign:'center',height:'80vh',overflowY:'auto',marginTop:'15vh'}}>
            <h2>No items in Cart</h2>
            <Link to="/Shopping-Cart/">Add Items</Link>
        </div>
    )
}

export default Cart
