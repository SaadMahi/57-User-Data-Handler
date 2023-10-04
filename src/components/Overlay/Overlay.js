import "../Overlay/Overlay.css";

const Overlay = function (props) {
  return (
    <div className="backdrop">
      <div className="modal">
        <div className="header">
          <h2>{props.error.title}</h2>
        </div>

        <div className="content">
          <p>{props.error.message}</p>

          <div className="actions">
            <button onClick={props.removeModal} >Close</button>
          </div>
        </div>
      </div>
    </div>   
  );
};

export default Overlay;
