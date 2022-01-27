import React from "react";
import { Books } from "../BookInfo/Books"; //Default Import

const List = ({ setBook }) => {
  return (

    <div class="list">
      <Books setBook={setBook} />
    </div>
  );
};

export default List;
