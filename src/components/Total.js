import React from 'react'

const Total = ({total}) => {
    return (
        <h2 style={{textAlign:'center',border:'1px solid black',width:'30%',margin:'40px auto',backgroundColor:'#BAB86C',cursor:'pointer'}}>
            Total Price : ₹{total}
        </h2>
    )
}

export default Total
