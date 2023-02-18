import React, { useEffect, useState } from "react";
import QuotesItems from "./QuotesItems";

function Quotes() {
  const [articles, setArticles] = useState([]);

  const updateQuotes = async () => {
    await fetch("https://api.api-ninjas.com/v1/quotes?category=happiness", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.REACT_APP_QUOTES_API,
      },
    }).then((res) => {
      res.text().then((txt) => {
        console.log(JSON.parse(txt));
      });
    });
  };

  useEffect(() => {
    updateQuotes();
  }, []);

  return (
    <>
      <div className="container my-5">
        <QuotesItems />
      </div>
    </>
  );
}

export default Quotes;
