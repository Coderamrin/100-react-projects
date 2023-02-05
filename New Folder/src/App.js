import "./App.css";
import { useState } from "react";

function App() {
  const [firstOp, setFirstOp] = useState();
  const [secondOp, setSecondOp] = useState();
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState();

  const getOparand = (e) => {
    if (firstOp && operator) {
      setSecondOp(e.target.textContent);
    } else {
      setFirstOp(e.target.textContent);
    }
  };

  const getOperator = (e) => {
    if (firstOp) {
      setOperator(e.target.textContent);
    }
  };

  const evaluate = (e) => {
    console.log("operator:", operator, "sign:", "+", operator === "+");
  };

  const allClear = (e) => {
    console.log(e.target.textContent);
  };

  const clearOne = (e) => {
    console.log(e.target.textContent);
  };

  const data = [
    {
      key: "AC",
      clickHandler: allClear,
    },
    {
      key: "C",
      clickHandler: clearOne,
    },
    {
      key: "%",
      clickHandler: getOparand,
    },
    {
      key: "clg",
    },
    {
      key: "1",
      clickHandler: getOparand,
    },
    {
      key: "2",
      clickHandler: getOparand,
    },
    {
      key: "3",
      clickHandler: getOparand,
    },
    {
      key: "+",
      clickHandler: getOperator,
    },
    {
      key: "4",
      clickHandler: getOparand,
    },
    {
      key: "5",
      clickHandler: getOparand,
    },
    {
      key: "6",
      clickHandler: getOparand,
    },
    {
      key: "-",
      clickHandler: getOperator,
    },
    {
      key: "7",
      clickHandler: getOparand,
    },
    {
      key: "8",
      clickHandler: getOparand,
    },
    {
      key: "9",
      clickHandler: getOparand,
    },
    {
      key: "X",
      clickHandler: getOperator,
    },
    {
      key: "0",
      clickHandler: getOparand,
    },
    {
      key: ".",
    },
    {
      key: "=",
      clickHandler: evaluate,
    },
    {
      key: "/",
      clickHandler: getOperator,
    },
  ];

  return (
    <div className="App h-screen flex justify-center items-center">
      <div className="calculator grid grid-cols-4 gap-4 bg-gray-900 text-white p-5">
        <div className="screen col-span-full bg-gray-700 h-[80px] rounded-sm text-right px-5 flex items-center justify-end text-3xl">
          {" "}
          {result ? (
            result
          ) : (
            <>
              {firstOp} {operator} {secondOp}
            </>
          )}
        </div>
        {data.map((item, i) => (
          <button
            onClick={item.clickHandler}
            className="bg-gray-700 w-[70px] h-[60px] flex justify-center items-center rounded-md text-3xl font-bold"
            key={i}
          >
            {" "}
            {item.key}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
