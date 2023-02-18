import React, { useEffect, useState } from "react";
import QuotesItems from "./QuotesItems";

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  const updateQuotes = async () => {
    await fetch("https://api.api-ninjas.com/v1/quotes?category=happiness", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.REACT_APP_QUOTES_API,
      },
    }).then((res) => {
      res.text().then((txt) => {
        setQuotes(JSON.parse(txt));
      });
    });
  };

  useEffect(() => {
    updateQuotes();
  }, []);

  return (
    <>
    <div><button type="button" className="btn btn-outline-primary">Generate Quote</button></div>
      <div className="container my-5">
        
        <QuotesItems
         category={quotes[0]?.category}
         quote={quotes[0]?.quote}
         author={quotes[0]?.author}
         />
      </div>
    </>
  );
}

export default Quotes;
