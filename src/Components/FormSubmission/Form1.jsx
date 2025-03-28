import React, { useState } from "react";

const Form1 = () => {
  const [formData, setFormData] = useState({ name: "", age: "", phone: "" });
  const [submitted, setSubmitted] = useState([]);
  const [editingPhone, setEditingPhone] = useState(null);
  const [inputValue,setInputValue]=useState("")


  // Handle form submission
  const handleSubmit = (e) => {

    e.preventDefault(); // Prevent page refresh

    if (formData.name == "" || formData.age == "" || formData.phone == "") {
      alert("Please fill the form");
      return;
    }
 
    if (editingPhone !== null) {
      const updatedForm = submitted.map((item) =>
        item.phone === editingPhone ? { ...item, ...formData } : item
      );
      setSubmitted(updatedForm);
      setEditingPhone(null);
    }else{
      const duplicateNumber = submitted.some(
        (data) => data.phone == formData.phone
      );
      if (duplicateNumber) {
        alert("This phone number is already submitted");
        return;
      }
      setSubmitted([...submitted, formData]);
    
    }
     
   
    setFormData({ name: "", age: "", phone: "" });
  };
  

  const handleChange = (e) => {
    console.log("e", e);

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);


    const onEdit = (phone) => {
    const itemToEdit = submitted.find((data) => data.phone === phone);
  console.log(itemToEdit);
  
    setFormData(itemToEdit);
    setEditingPhone(phone);
  };


  const onDelete = (d) => {
    console.log(d);

    setSubmitted((pre) => pre.filter((item) => item.phone != d));
  };
 
  
  const filterItem = submitted.filter((item) =>
    (item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
     String(item.age).includes(inputValue) || 
     item.phone.includes(inputValue))
  );
  console.log("filter",filterItem);
  
  

  return (
    <>
      <h1 className=" ml-[40%] mt-2 font-bold">Form Submission</h1>
      <div className="flex justify-center mt-5">
        <div className="  border w-[500px] h-[300px] ">
          <form action="" onSubmit={handleSubmit}>
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
                className="w-full border-b-2 border-gray-300  py-2"
              />
              <div className="flex gap-2">
                <input
                  type="phone"
                  name="phone"
                  placeholder=" Phone Number (+91)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300  py-2"
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
      
      <input onChange={(e)=>setInputValue(e.target.value)} className="border ml-20 p-2 mb-10" type="text" placeholder="Search by " />

      {filterItem.length > 0 && (
  <div className="overflow-x-auto">
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

export default Form1;
