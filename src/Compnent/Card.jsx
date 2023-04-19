import { RxCross1 } from "react-icons/rx";
export const Card = ({Value,data}) => {
    // console.log(Value)
    function btnclick(id){
        data(id);
    }
  return (
    <>
      <div className="card">
        <div className="feedback">
          <p>{Value.feedback}</p>
          <div className="value">
            <h6>{Value.Rating}</h6>
          </div>
          <div className="icon">
            <RxCross1 onClick={()=>{btnclick(Value.id)}}/>
          </div>
        </div>
      </div>
    </>
  );
};
