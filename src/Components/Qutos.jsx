import React, { useState, useEffect } from "react";

const Qutos = () => {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("http://api.quotable.io/random");
      // console.log(response);
      
      const data = await response.json();
      // console.log(data);
      
      setQuote(data.content)
      // console.log(quote);
      
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  // Fetch a quote when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <h2>Random Quote Generator</h2>
      <blockquote>
        <p>"{quote}"</p>
      </blockquote>
      <button onClick={fetchQuote} >
        Next Quote
      </button>
    </div>
  );
};

export default Qutos;
