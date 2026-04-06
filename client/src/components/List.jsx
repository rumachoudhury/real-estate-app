import React from "react";
import Card from "../components/Card";

function List({ posts }) {
  return (
    <div className="list ">
      {posts?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
