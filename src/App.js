import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import Homepage from './components/Homepage';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './components/Cart';
function App() {
  const items=[{id:1,name:"UNIFACTOR SHOES",price:2000,img:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ac12a40785644ffc8e02adb300e0f067_9366/Unifactor_Shoes_Grey_EX2192_01_standard.jpg'},
  {id:2,name:'Light weighted Sport shoes, Running Shoes, Training shoes, Cycling shoes, Gyming Shoes, Training & Gym Shoes For Men',img:'https://rukminim1.flixcart.com/image/880/1056/ks99aq80/shoe/c/l/5/7-805-red-waan-black-red-original-imag5v9y5ebbmdbg.jpeg?q=50',price:599},
  {id:3,name:'Panelled Lace-Up Casual Shoes',img:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12708626/2021/9/13/0da6e086-27a3-4343-bcaa-68950ab90d981631525023646-ADIDAS-Men-Sports-Shoes-8711631525023463-1.jpg',price:1199}
,{id:4,name:"Levi's Sneakers",img:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15593126/2021/10/20/d19e7eaf-767d-419a-94a1-e4219b30eb441634712443468-US-Polo-Assn-Men-Casual-Shoes-5791634712443145-1.jpg',price:1999},
{id:5,name:'Addidas',img:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12708626/2021/9/13/0da6e086-27a3-4343-bcaa-68950ab90d981631525023646-ADIDAS-Men-Sports-Shoes-8711631525023463-1.jpg',price:1619},
{id:6,name:"Nike Air Mag sneakers",img:'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15385034/2021/10/5/d03a0cf0-f3aa-4b04-9c33-43fd45912d8d1633421119333-Nike-Flex-Experience-Run-10-Mens-Running-Shoes-2051633421118-1.jpg',price:3599},
{id:7,name:'Anzarun Lite Sneakers',img:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/371128/03/sv01/fnd/IND/fmt/png/Anzarun-Lite-Unisex-Sneakers',price:2509},
{id:8,name:'Colourblock Lace-Up Casual Shoes',img:'https://assets.ajio.com/medias/sys_master/root/ha7/hb1/14874792624158/-473Wx593H-460494897-white-OUTFIT.jpg',price:1075},
{id:9,name:"PUMA Claw Men's Shoes",img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/381367/02/sv01/fnd/IND/fmt/png/PUMA-Claw-Men's-Shoes",price:2249},
{id:10,name:'Men White Mesh Training or Gym Non-Marking Shoes',img:'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/6/10/eff20b7a-4b3b-42bf-91ef-0802029c58201623264810143-1.jpg',price:2229}];

  const [objects,setobjects]=useState(0);
  const [total,settotal]=useState(0);
  const [cart,setcart]=useState([]);

  const addtoCart=async (obj)=>{
    //obj={...obj,quantity:1};
    console.log(cart);
    let flag=false;
    await cart.map((x)=>{
      if(x.id==obj.id)
      {
        flag=true;
        
      }
    })
    if(flag==true){
        setcart((cart)=>{
          return cart.filter((s1)=>s1.id!=obj.id);
        })
        let q;
        cart.map((c)=>{
          if(c.id==obj.id){
            q=c.quantity;
          }
        })
        setcart((cart)=>{
          return [...cart,{...obj,quantity:q+1}];
        })
    }
    else if(flag==false){
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

  const increaseQuantity=async (obj)=>{
     setcart((cart)=>{
      return cart.filter((s1)=>s1.id!=obj.id);
    })
    let q;
    cart.map((c)=>{
      if(c.id==obj.id){
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

  const caltotal=()=>{
    settotal((total)=>{
      let t=0;
      cart.map((c)=>{
        t=t+(c.quantity*c.price);
      })
      return t;
    })

  }
  

  const decreaseQuantity=async (obj)=>{
     setcart((cart)=>{
      return cart.filter((s1)=>s1.id!=obj.id);
    })
    let q;
    cart.map((c)=>{
      if(c.id==obj.id){
        q=c.quantity;
      }
    })
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

/*  const increaseprice=(p)=>{
    settotal((total)=>{
      return total+p;
    })
  }
*/
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
          <Route exact path="/cart" element={<Cart cart={cart} total={total} calTotal={caltotal}  decreaseQuantity={decreaseQuantity}  increaseQuantity={increaseQuantity}/>}   />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
