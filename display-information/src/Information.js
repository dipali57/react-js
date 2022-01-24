import React from "react";
//import "./detailsPage.css";
const Information = ({ book }) => {
  return (
    <div className="details">
      <div className="image">
        <img src={book.url} alt="" />
      </div>

      <div className="detail">
        <p>{book.BookName}</p>
        <p>{book.Published}</p>
        <p>{book.Author}</p>
        <p>{book.Price}</p>
      </div>
    </div>
  );
};

export default Information;
