import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {useState,useEffect} from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Header from './components/Header';
import Cart from './components/Cart';
import items from './components/constants/items';

function App() {
  
  const [objects,setobjects]=useState(0);
  const [total,settotal]=useState(0);
  const [cart,setcart]=useState([]);

  const addtoCart=(obj)=>{
    //obj={...obj,quantity:1};
    console.log(cart);
    let flag=false;
    /*cart.map((x)=>{
      if(x.id===obj.id)
      {
        flag=true;
        
      }
    })*/
    //updated
    cart.forEach((x)=>{
      if(x.id===obj.id)
      {
        flag=true;
        
      }
    })

    if(flag===true){
        setcart((cart)=>{
          return cart.filter((s1)=>s1.id!==obj.id);
        })
        let q;
        cart.forEach((c)=>{
          if(c.id===obj.id){
            q=c.quantity;
          }
        })
        setcart((cart)=>{
          return [...cart,{...obj,quantity:q+1}];
        })
    }
    else if(flag===false){
      obj={...obj,quantity:1};
      setcart((cart)=>{
        return [...cart,obj];
      })
      setobjects((object)=>{
        return object+1;
      })
    }
    settotal((total)=>{
      return total+obj.price; 
    })
  
  }

  const increaseQuantity =(obj)=>{
     setcart((cart)=>{
      return cart.filter((s1)=>s1.id!==obj.id);
    })
    
    let q;
    cart.forEach((c)=>{
      if(c.id===obj.id){
        q=c.quantity;
      }
    })
     setcart((cart)=>{
      return [...cart,{...obj,quantity:q+1}];
    })
    settotal((total)=>{
      return total+obj.price;
    })
     

  }

  
  

  const decreaseQuantity= (obj)=>{
     setcart((cart)=>{
      return cart.filter((s1)=>s1.id!==obj.id);
    })
    let q;
    /*cart.map((c)=>{
      if(c.id===obj.id){
        q=c.quantity;
      }
    })*/
    cart.forEach(c => {
      if(c.id===obj.id){
        q=c.quantity;
      }
    });
    if(q>1){
       setcart((cart)=>{
        return [...cart,{...obj,quantity:q-1}];
      })
    }
    else
    {
      setobjects((objects)=>{
        return objects-1;
      })
    }
    settotal((total)=>{
      return total-obj.price;
    })
   
  }


  useEffect(()=>{
    console.log(cart);
    console.log(objects);
  })
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header objects={objects} />
        <Routes>
          
          <Route exact path="/" element={<Homepage items={items} addtoCart={addtoCart}/>} />
          <Route exact path="/cart" element={<Cart cart={cart} total={total}   decreaseQuantity={decreaseQuantity}  increaseQuantity={increaseQuantity}/>}   />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
