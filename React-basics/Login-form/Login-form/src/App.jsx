import './App.css'

function LoginForm(){
      return (
         <>  
         <h1>Hello, welcome to my website</h1>
         <div className="comp">
         <input className='email'  type="text" Placeholder="Email"/>
         <input type="Password" Placeholder="Password"/>
         </div>
         <button className="btn">Login</button>
         <button className="btn">Sign up</button>
         </>
      )
    //  if(discountPrice){ 
    //   return ( 
    //     <div>
    //     {product} 
    //     <del><p>Price: {price}</p></del>
    //     <p>Discount price: {discountPrice}</p>
    //     <button>Add to Cart</button>
    //     </div>
    //   )
    //  }
    //  return ( 
    //     <div>
    //     {product} 
    //     <p>Price: {price}</p>
    //     <button>Add to Cart</button>
    //     </div>
    //   )

    // return (
    //   <>
    //   <p>{product}</p>
    //   {discountPrice? (
    //     <>
    //       <p><del>Price: {price}</del></p>
    //     </>
    //   ) : (
    //     <p> Price: {price}</p>
    //   )}
    //   <button>Add to Cart</button>
    //   </>
    // )
    }
    function App(){ 
      return ( 
        <>
       <LoginForm />
       </>
         )    
    }

export default App
