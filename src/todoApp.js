import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((response) => response.json())
      .then((data) => setQuotes(data.quotes.slice(0, 10)))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h1>Top 10 Quotes</h1>
      <ul>
        {quotes.map((value, index) => (
          <li key={index}>
            <p> {value.quote}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
