import React from "react";
import {Link} from "react-router-dom";
import { books } from "../data";
//import "./cars.css";
export const Books = ({setBook}) => {
  return (
    <div>
      {books.map((item,index) => {
        return (
          <Link to='/details' className="books" onClick={()=>setBook(item)} key={index} >
            <div className="book">{item.BookName}</div>
          </Link>
        );
      })}
    </div>
  );
};
