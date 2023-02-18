import React from "react";

function QuotesItems(props) {
  return (
    <>
      <div className="card my-4">
        <div className="card-header">{props.category}</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{props.quote}</p>
            <footer className="blockquote-footer">{props.author}</footer>
          </blockquote>
        </div>
      </div>
    </>
  );
}

export default QuotesItems;
