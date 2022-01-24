import React from "react";
import { Books } from "./Books"; //Default Import

const List = ({ setBook }) => {
  return (
    <div>
      <Books setBook={setBook} />
    </div>
  );
};

export default List;
