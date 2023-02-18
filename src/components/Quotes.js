import React, { useEffect, useState } from "react";
import QuotesItems from "./QuotesItems";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [btnText, setBtnText] = useState("Generate Quote");
  const [disableBtn, setDisableBtn] = useState(false);

  const updateQuotes = async () => {
    setBtnText("loading...");
    setDisableBtn(true);
    await fetch("https://api.api-ninjas.com/v1/quotes?category=happiness", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.REACT_APP_QUOTES_API,
      },
    }).then((res) => {
      res.text().then((txt) => {
        setQuotes([...quotes, JSON.parse(txt)[0]]);
      });
    });
    setBtnText("Generate Quote");
    setDisableBtn(false);
  };

  useEffect(() => {
    updateQuotes();
    console.log(9);
  }, []);

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
