// import React, { useState, useCallback, useMemo } from "react";
// import lap from "../../assets/LaptopImg.jpg";
// import head from "../../assets/head.jpg";
// import phoneImg from "../../assets/PhoneImg.jpg";

// const Ecommerce = () => {
//   const products = [
//     { id: 1, name: "Laptop", price: 1000, image: lap },
//     { id: 2, name: "Phone", price: 500, image: phoneImg },
//     { id: 3, name: "Headphones", price: 200, image: head },
//     { id: 4, name: "Tab", price: 400, image: lap },
//   ];

//   const [cart, setCart] = useState([]);

//   // Add to Cart
//   const addToCart = useCallback((product) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   }, []);

//   // Remove from Cart
//   const removeFromCart = useCallback((id) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   }, []);

//   // Increase Quantity
//   const increaseQuantity = useCallback((id) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   }, []);

//   // Decrease Quantity
//   const decreaseQuantity = useCallback((id) => {
//     setCart((prevCart) =>
//       prevCart
//         .map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   }, []);

//   // Calculate Total Price
//   const totalPrice = useMemo(() => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   }, [cart]);

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h1 className="text-4xl font-bold text-center mb-8">🛍️ Shopping Cart</h1>

//       {/* Product List */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="border rounded-lg shadow-md p-4 text-center"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-40 object-cover mb-3"
//             />
//             <h3 className="text-lg font-semibold">{product.name}</h3>
//             <p className="text-gray-700">${product.price}</p>
//             <button
//               className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
//               onClick={() => addToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Cart Section */}
//       <h2 className="text-2xl font-semibold mt-10">🛒 Your Cart</h2>
//       {cart.length === 0 ? (
//         <p className="text-gray-500">Your cart is empty.</p>
//       ) : (
//         <div className="mt-4 space-y-4">
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="flex justify-between items-center p-4 border rounded-lg shadow-md"
//             >
//               <div>
//                 <h3 className="text-lg font-semibold">{item.name}</h3>
//                 <p>Quantity: {item.quantity}</p>
//                 <p>Total: ${item.price * item.quantity}</p>
//               </div>
//               <div className="flex space-x-2">
//                 <button
//                   className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//                   onClick={() => increaseQuantity(item.id)}
//                 >
//                   +
//                 </button>
//                 <button
//                   className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
//                   onClick={() => decreaseQuantity(item.id)}
//                 >
//                   -
//                 </button>
//                 <button
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Total Price */}
//       <h3 className="text-xl font-bold mt-6">Total Price: ${totalPrice}</h3>
//     </div>
//   );
// };

// export default Ecommerce;
import React, { useState } from "react";

const Test = () => {
  const [formData, setFormData] = useState({ name: "", age: "", phone: "" });
  const [submitted, setSubmitted] = useState([]);
  const [editingPhone, setEditingPhone] = useState(null);
  const [inputValue, setInputValue] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    if (formData.name === "" || formData.age === "" || formData.phone === "") {
      alert("Please fill the form");
      return;
    }

    if (editingPhone !== null) {
      const updatedForm = submitted.map((item) =>
        item.phone === editingPhone ? { ...item, ...formData } : item
      );
      setSubmitted(updatedForm);
      setEditingPhone(null);
    } else {
      const duplicateNumber = submitted.some(
        (data) => data.phone === formData.phone
      );
      if (duplicateNumber) {
        alert("This phone number is already submitted");
        return;
      }
      setSubmitted([...submitted, formData]);
    }

    setFormData({ name: "", age: "", phone: "" });
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Edit record
  const onEdit = (phone) => {
    const itemToEdit = submitted.find((data) => data.phone === phone);
    setFormData(itemToEdit);
    setEditingPhone(phone);
  };

  // Delete record
  const onDelete = (phone) => {
    setSubmitted((prev) => prev.filter((item) => item.phone !== phone));
  };

  // Filter items based on search query
  const filterItem = submitted.filter(
    (item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      item.age.toLowerCase().includes(inputValue.toLowerCase()) ||
      item.phone.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <h1 className="ml-[40%] mt-2 font-bold">Form Submission</h1>
      <div className="flex justify-center mt-5">
        <div className="border w-[500px] h-[300px]">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 m-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                value={formData.name}
                className="w-full border-b-2 border-gray-300 py-2"
              />

              <input
                type="number"
                name="age"
                placeholder="Enter your age"
                onChange={handleChange}
                value={formData.age}
                className="w-full border-b-2 border-gray-300 py-2"
              />
              <div className="flex gap-2">
                <input
                  type="phone"
                  name="phone"
                  placeholder="Phone Number (+91)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 py-2"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-700 text-amber-50 p-2 rounded-2xl"
              >
                {editingPhone ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Search Box */}
      <div className="flex justify-center mt-5">
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2 rounded-lg"
          placeholder="Search by name, age, or phone"
        />
      </div>

      {/* Display Filtered Records */}
      {filterItem.length > 0 && (
        <div className="overflow-x-auto mt-5">
          <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr className="text-left">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Age</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              {filterItem.map((data, index) => (
                <tr key={index} className="hover:bg-gray-100 transition">
                  <td className="px-6 py-4">{data.name}</td>
                  <td className="px-6 py-4">{data.age}</td>
                  <td className="px-6 py-4">{data.phone}</td>
                  <td className="px-6 py-4 flex space-x-3">
                    <button
                      onClick={() => onEdit(data.phone)}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(data.phone)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Test;
