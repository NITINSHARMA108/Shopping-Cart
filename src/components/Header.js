import React from 'react'
import {Link} from 'react-router-dom';
const Header = ({objects}) => {
    return (
        <div>
            <nav style={{backgroundColor:'black',color:'white'}}>
                <Link style={{textDecoration:'none'}} to="/"><div><h1>Shopsy </h1></div></Link>
                <Link style={{textDecoration:'none'}} to="/cart"><div className="cart"><h1><i class="fas fa-shopping-cart"></i></h1>{objects===0?'':<span className="objects">{objects}</span>}</div></Link>
            </nav>
            
        </div>
    )
}

export default Header
