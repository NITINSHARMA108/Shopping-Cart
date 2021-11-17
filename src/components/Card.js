import React from 'react'

const Card = ({item,addtoCart}) => {
    return (
        <div className="card">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <p>₹{item.price}</p>
            <button onClick={(e)=>{
                e.preventDefault();
                addtoCart(item);
            }}>Add to Cart</button>
        </div>
    )
}

export default Card
