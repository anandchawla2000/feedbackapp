import { useState } from "react";
import { Card } from "./Compnent/Card";
import { UpperPart } from "./Compnent/UpperPart";

function App() {
  const [data, updatedata] = useState([]);
  const dataupdate = (value) => updatedata([...data, value]);
  const datafilter = (id) => {
    // alert(id)
    const filterdata = data.filter((value) => {
      console.log(value.id);
      console.log(id);
      return value.id !== id;
    });
    updatedata(filterdata);
  };
  return (
    <>
      <div className="containerfluid">
        <div className="header tac">
          <h1>Feedback UI</h1>
        </div>
        <div className="container">
          <UpperPart updatefunc={dataupdate} />
          {data.length === 0 ? (
            <div className="nofeedback tac">
              <h2>No Feedback</h2>
            </div>
          ) : (
            data.map((value, index) => {
              // console.log(value.id);
              return <Card Value={value} key={index} data={datafilter} />;
            })
          )}
        </div>
      </div>
    </>
  );
}

export default App;
