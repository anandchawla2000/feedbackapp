export const RadioButtonPart = ({ Value }) => {
  return (
    <>
      <div className="radiobuttonlist tac">
        <div className="radiobtn">
          <div className="radioinputgroup">
            <input
              type="radio"
              id="One"
              name="One"
              value="1"
              onChange={(e) => Value(e.target.value)}
            ></input>
            <label for="one">1</label>
          </div>
        </div>
        <div className="radiobtn">
          <div className="radioinputgroup">
            <input
              type="radio"
              id="Two"
              name="One"
              value="2"
              onChange={(e) => Value(e.target.value)}
            ></input>
            <label for="Two">2</label>
          </div>
        </div>
        <div className="radiobtn">
          <div className="radioinputgroup">
            <input
              type="radio"
              id="Three"
              name="One"
              value="3"
              onChange={(e) => Value(e.target.value)}
            ></input>
            <label for="Three">3</label>
          </div>
        </div>
        <div className="radiobtn">
          <div className="radioinputgroup">
            <input
              type="radio"
              id="Four"
              name="One"
              value="4"
              onChange={(e) => Value(e.target.value)}
            ></input>
            <label for="Four">4</label>
          </div>
        </div>
        <div className="radiobtn">
          <div className="radioinputgroup">
            <input
              type="radio"
              id="Five"
              name="One"
              value="5"
              onChange={(e) => Value(e.target.value)}
              defaultChecked={true}
            ></input>
            <label for="Five">5</label>
          </div>
        </div>
      </div>
    </>
  );
};
