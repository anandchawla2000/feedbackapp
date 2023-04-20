import { useState } from "react";
import { RadioButtonPart } from "./RadiobuttonPart";
import { v4 as uuidv4 } from 'uuid';
export const UpperPart = ({updatefunc}) => {
  const [inputValue, setInput] = useState("");
  const [selected, setselected] = useState("5");
  const [btn, setbtn] = useState(true);
  const selectupdate = (value) => setselected(value);
  const senddata = () => {
    const detail = {
      id: uuidv4(),
      Rating: selected,
      feedback: inputValue,
    };
    // console.log(detail);
    updatefunc(detail)
    setInput("");
    setbtn(true)
  };
  return (
    <>
      <div className="box">
        <div className="boxhead">
          <h2>How would you rate your service with us?</h2>
        </div>
        <RadioButtonPart Value={selectupdate} />
        <div className="inputcontainer">
          <div className="inputbox">
            <input
              type="text"
              placeholder="Enter Feedback"
              onChange={(e) => {
                if (e.target.value.length >= 6) {
                  setInput(e.target.value);
                  setbtn(false);
                } else {
                  setInput(e.target.value);
                  setbtn(true);
                }
              }}
              value={inputValue}
              name="data"
            ></input>
            <button disabled={btn} onClick={senddata}>
              Send
            </button>
          </div>
        </div>
        <div className="tac textmsg">
            <p>Feedabck Must be more than 6 Words</p>
          </div>
      </div>
    </>
  );
};
