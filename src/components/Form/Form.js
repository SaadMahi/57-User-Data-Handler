import { useState } from "react";
import Overlay from "../Overlay/Overlay";
import ReactDOM from "react-dom";
import "../Form/Form.css";

const Form = function (props) {
  const initialInput = {
    "user-name-input": "",
    "user-age-input": "",
  };

  // useState to store values and display on Ui
  const [defInputs, setInput] = useState(initialInput);

  // user input excrator function
  const userInput = function (user, value) {
    // console.log(user, value)
    setInput((prev) => ({
      ...prev,
      [user]: value,
    }));
  };

  //  validation for error handling
  const [error, setError] = useState();

  // onClick to remove modal
  const removeModal = function () {
    setError();
  };

  // form submit handler
  const formSubmit = function (e) {
    e.preventDefault();

    if (
      defInputs["user-name-input"].trim().length === 0 ||
      +defInputs["user-age-input"].trim().length === 0
    ) {
      setError({
        title: "invalid input",
        message: "please enter a valid name and age (non-empty values)",
      });
    } else if (+defInputs["user-age-input"] < 1) {
      setError({
        title: "invalid age",
        message: "please enter a valid age of (age > 1)",
      });
    } else {
      // console.log(defInputs["user-name-input"], defInputs["user-age-input"])
      props.pullDataFunc(
        defInputs["user-name-input"],
        defInputs["user-age-input"]
      );

      setInput(initialInput);
    }
  };

  return (
    <>
      {error &&
        ReactDOM.createPortal(
          <Overlay error={error} removeModal={removeModal} />,
          document.getElementById("overlay-root")
        )}

      <form onSubmit={formSubmit} id="form-container">
        <span>Username</span>
        <input
          onChange={(e) => userInput(e.target.id, e.target.value)}
          id="user-name-input"
          value={defInputs["user-name-input"]}
          type="text"
          placeholder="Enter name"
        ></input>
        <span>Age(years)</span>
        <input
          onChange={(e) => userInput(e.target.id, e.target.value)}
          id="user-age-input"
          value={defInputs["user-age-input"]}
          type="number"
          placeholder="Enter Age"
        ></input>

        <div className="btn-container">
          <button type="submit">Add user</button>
        </div>
      </form>
    </>
  );
};

export default Form;
