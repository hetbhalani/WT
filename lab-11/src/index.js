import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const data = [
  {
    name: "Het",
    age: "18",
    discription: "qwert",
  },
  {
    name: "Het",
    age: "18",
    discription: "qwert",
  },
  {
    name: "Het",
    age: "18",
    discription: "qwert",
  },
  {
    name: "Het",
    age: "18",
    discription: "qwert",
  },
  {
    name: "Het",
    age: "18",
    discription: "qwert",
  },
  {
    name: "Het",
    age: "18",
    discription: "qwert",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <div className="container">
      <div className="row">
        {data.map((item)=>(
          <div className='col-3'>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">Age: {item.age}</p>
              <p className="card-text">Description: {item.discription}</p>
            </div>
          </div>
        </div>

        ))}
      </div>
    </div>
  </>
);
