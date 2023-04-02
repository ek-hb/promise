import React, { useState } from "react";
import { ReactComponent as PassportIcon } from "./background_img/done.svg";

const Visa = () => {
  const doc = [
    { id: 0, status: "Start" },
    { id: 1, status: "Checking your passport..." },
    { id: 2, status: "Passport is checked" },
    { id: 3, status: "Checking your scans and copies..." },
    { id: 4, status: "Your scan ok" },
    { id: 5, status: "Passport checked" },
    { id: 6, status: "All scans is ok" },
    { id: 7, status: "Ua passport also ok" },
    { id: 8, status: "Marige - you meried" },
    { id: 9, status: "You don't have any children" },
    { id: 10, status: "You're  poor" },
  ];

  const [output, setOutput] = useState([]);
  const [count, setCount] = useState(0);

  const validation = () => {
    new Promise((resolve) => {
      setTimeout(() => {
        setOutput((prevOutput) => [...prevOutput, doc[0]]);
        resolve();
      }, 500);
    })
      .then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            setOutput((prevOutput) => [...prevOutput, doc[1]]);
            resolve(doc);
          }, 2000);
        });
      })
      .then((doc) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            setOutput((prevOutput) => [...prevOutput, doc[2]]);
            resolve(doc);
          }, 2000);
        });
      })
      .then((doc) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            setOutput((prevOutput) => [...prevOutput, doc[3]]);
            resolve(doc);
          }, 2000);
        });
      })
      .then((doc) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            setOutput((prevOutput) => [...prevOutput, doc[4]]);
            resolve(doc);
          }, 2000);
        });
      })
      .then((doc) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            setOutput((prevOutput) => [...prevOutput, doc[5]]);
            setOutput((prevOutput) => [...prevOutput, doc[6]]);
            setOutput((prevOutput) => [...prevOutput, doc[7]]);
            setOutput((prevOutput) => [...prevOutput, doc[8]]);
            setOutput((prevOutput) => [...prevOutput, doc[9]]);
            setOutput((prevOutput) => [...prevOutput, doc[10]]);
            resolve(doc);
          }, 2000);
        });
      })

      .catch(function (error) {
        console.error("error");
        setOutput(`Oops! Something went wrong: ${error}`);
      })
      .finally(() => {
        console.log("finish");
      });
  };

  console.log(count);
  console.log(output);

  return (
    <div className="container">
      <button className="validation" onClick={validation}>
        Audit
      </button>
      <ul className="ulHTML">
        {output.map((item) => (
          <li className="liItem" key={item.id}>
            <p className="pItem">{item.status}</p>
            {item.id === 2 && <PassportIcon className="svgIcon" />}
            {item.id === 5 && <PassportIcon className="svgIcon" />}
            {item.id === 7 && <PassportIcon className="svgIcon" />}
            {item.id === 10 && <PassportIcon className="svgIcon" />}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Visa;
