import React from "react";

const Item = ({ quote }) => {

  return (
    <div className="bg-gray-200 mb-5 px-5 py-5 rounded">
      <p className="text-xl mb-2">{quote.content}</p>

      <p className="text-gray-600">
        {quote.author} | <a href="/#">Tweet</a>
      </p>
    </div>
  );
};

export default Item;
