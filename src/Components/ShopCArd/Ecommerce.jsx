import React, {  useState } from "react";
import lap from "../../assets/LaptopImg.jpg";
import head from "../../assets/head.jpg";
import kerala from "../../assets/KeralaDance.png";
import phoneImg from "../../assets/PhoneImg.jpg";

const Ecommerce = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1000, image: lap },
    { id: 2, name: "Phone", price: 500, image: phoneImg },
    { id: 3, name: "Headphones", price: 200, image: head },
    { id: 4, name: "Tab", price: 400, image: lap },
  ];
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((pre) => {
      const existingItem = pre.find((item) => item.id == product.id);
      console.log(existingItem);

      if (existingItem) {
        
        
       return  pre.map((item) =>
          item.id == product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
       return  [...pre, { ...product, quantity: 1 }];
      }
    });
  };
  const onDelete=(d)=>{
    setCart((pre)=>pre.filter((item)=>item.id!=d))
  
  }
  const totalAmount= cart.reduce((total,current)=>total+current.price*current.quantity,0)


  return (
    <>
      <div className=" flex justify-center m-7 font-bold text-5xl ">
        Shopping Cart
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item,index) => (
          <div key={item.id} className="border h-70 m-10 rounded-2xl">
            <img className="rounded-2xl h-45 w-full" src={item.image} alt="" />

            <h2 className="text-center text-lg font-semibold">{item.name}</h2>
            <h2 className="text-center text-gray-700">{item.price}</h2>
            <button
              onClick={() => addToCart(item)}
              className="ml-23 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 text-center"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center m-7 font-bold text-3xl text-gray-700">
        Your Cart
      </div>
     
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cart.map((item) => (
           
            <div key={item.id} className="border h-80 m-10 rounded-2xl">
            <img className="rounded-2xl h-45 w-full" src={item.image} alt="" />

            <h2 className="text-center text-lg font-semibold">{item.name}</h2>
            <h2 className="text-center text-gray-700"><span className="text-black">Price</span>:{item.price}</h2>
              <div className="flex justify-evenly"><span className="text-center text-black ">Qty: {item.quantity}</span>
              <span className="text-black "> Amount: ${item.price * item.quantity}</span></div>
              <button onClick={()=>onDelete(item.id)} className="border bg-red-700 text-white rounded-2xl p-2 ml-30 ">Delete</button>


              
            </div>
            
          ))}
        </div>)}
        <p>Total Amount:{totalAmount}</p>
    </>
  );
};

export default Ecommerce;
