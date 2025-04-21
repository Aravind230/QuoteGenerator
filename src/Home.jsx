import { useState } from "react";
import Quotes from "./quotes";
const Body = () => {
  const [data, setdata] = useState(Quotes[0]);
  const getrandomquote = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    setdata(Quotes[randomIndex]);
  };
  return (
    <>
      <div
        className="container w-75 h-25 border border-dark rounded-4 p-4"
        style={{
          marginTop: "200px",
        }}
      >
        <div className="container text-center ">
          <h2 className="bg-info">Quote Generator</h2>
          <h4 className="fst-italic mt-4">
            <strong>Quote : </strong>
            {data.text}
          </h4>
          <p className="fst-italic mt-4">
            <strong>Author : </strong>
            {data.author}
          </p>
          <button onClick={getrandomquote} className="btn btn-primary mt-3">
            Get a Quote
          </button>
        </div>
      </div>
    </>
  );
};
export default Body;
