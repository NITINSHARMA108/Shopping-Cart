import React from 'react'



const Cartitem = ({details,increaseQuantity,decreaseQuantity,calTotal}) => {
    
    console.log(details);
 
    return (
        <div className="cart-it">
            <div className="image">
                <img src={details.img} alt={details.name} />
            </div>
            <div className="info">
                <p>{details.name}</p>
                <h4>₹ {details.price*details.quantity}</h4>
                <div>
                    <span  className="sub" onClick={(e)=>{
                        e.preventDefault();
                        decreaseQuantity(details);
                    }}>-</span>

                    <span>{details.quantity}</span>

                    <span className="add" onClick={ (e)=>{
                        e.preventDefault();
                        increaseQuantity(details);
                    }}>+</span>
                </div>
            </div>
            
        </div>
    )
}

export default Cartitem
