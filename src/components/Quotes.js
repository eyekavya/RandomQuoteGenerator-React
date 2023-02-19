/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import QuotesItems from "./QuotesItems";

function Quotes({ category = "happiness" }) {
  const [btnText, setBtnText] = useState("Generate Quote");
  const [disableBtn, setDisableBtn] = useState(false);
  const [quotes, setQuotes] = useState([]);

  const updateQuotes = async (empty) => {
    setBtnText("loading...");
    setDisableBtn(true);
    await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.REACT_APP_QUOTES_API,
      },
    }).then((res) => {
      res.text().then((txt) => {
        if (empty === "empty") {
          setQuotes([JSON.parse(txt)[0]]);
        } else {
          setQuotes([JSON.parse(txt)[0], ...quotes]);
        }
      });
    });
    setBtnText("Generate Quote");
    setDisableBtn(false);
  };

  useEffect(() => {
    updateQuotes("empty");
  }, [category]);

  return (
    <>
      <div className="text-center my-5">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={updateQuotes}
          disabled={disableBtn}
        >
          {btnText}
        </button>
      </div>
      <div className="container my-5">
        {quotes?.map((e, i) => {
          return (
            <QuotesItems
              key={i}
              category={e?.category}
              quote={e?.quote}
              author={e?.author}
            />
          );
        })}
      </div>
    </>
  );
}

export default Quotes;
