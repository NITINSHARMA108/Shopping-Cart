import React from 'react';
import Card from './Card';

const Homepage = ({items,addtoCart}) => {
    return (
        <div className="items">
            {items.map((item)=>{
                return <Card item={item} addtoCart={addtoCart} />

            })}
        </div>
    )
}

export default Homepage
