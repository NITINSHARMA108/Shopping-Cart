import React from 'react'
import {useState} from 'react';
const Cartitem = ({details,increaseQuantity,decreaseQuantity,calTotal}) => {
    //const [quantity, setquantity] =useState(1);
    console.log(details);
    //const [price,setprice]=useState(details.price);
  /*  const incPrice=()=>{
        setprice((price)=>{
            return price+details.price;
        });
        increaseprice(details.price);

        
    }*/
   /* const decPrice=()=>{
        setprice((price)=>{
            return price-details.price;
        })

    }
*/
    return (
        <div className="cart-it">
            <div className="image">
                <img src={details.img} />
            </div>
            <div className="info">
                <p>{details.name}</p>
                <h4>₹ {details.price*details.quantity}</h4>
                <div>
                    <span  className="sub" onClick={async (e)=>{
                        e.preventDefault();
                        await decreaseQuantity(details);
                    }}>-</span>

                    <span>{details.quantity}</span>

                    <span className="add" onClick={async (e)=>{
                        e.preventDefault();
                      await  increaseQuantity(details);
                    }}>+</span>
                </div>
            </div>
            
        </div>
    )
}

export default Cartitem
