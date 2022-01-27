import React from "react";
//import "./detailsPage.css";
const Information = ({ book }) => {
  return (
    <div className="details">
      <div className="image">
        <img src={book.url} alt="" />
      </div>

      <div className="detail">
        <p>Book Name : {book.BookName}</p>
        <p>Published : {book.Published}</p>
        <p>Author : {book.Author}</p>
        <p>Price : {book.Price}</p>
      </div>
    </div>
  );
};

export default Information;
