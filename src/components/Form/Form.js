import { useState, useRef } from "react";
import Overlay from "../Overlay/Overlay";
import ReactDOM from "react-dom";
import "../Form/Form.css";

const Form = function (props) {
  const initialInput = {
    "user-name-input": "",
    "user-age-input": "",
  };

  // useRef to replace state and extract user inputs
  const nameInputVal = useRef();
  const ageInputVal = useRef();
  /* these are undefined currently, to connect these ref's go to html structure
where we want to connect it and connect them by adding a special prop ref prop
just like a key prop you can connect any html element, we will very
often use these for inputs becayse we wanna fetch input datas.

once we set these, log it to console in form submit 
you will get an current property, or this useRef,
gives us an object with a current prop anbd this props
hold the acutal value with which it is connected with.

now what you will find in here? you will find a real DOM node, which can be manipulated
and you can do all kind of things with it, it is recommended that you
don't manipulate it because your dom should be only manipulated by 
React, you are using react to do the all heavy lifting, but reading data input
using these doesn't sounds too bad

now in form submit if you say log nameInputVal.current.value, you will get the values
by help of this, you can get valus, without having to log every keystroke, therefore we don't
need state for this, we just read it when the submit button is pressed, so now 
we can replace the console.log by helper constant and simply store the val in that const, 
do this for both age and username and change all the values in conditions by these helper
constants

now apply these and remove text extractor useState also remove values and onChange
arrow functions from text input attributes and replace everything here*/

  // ________________________________________________________________________

  /*  // useState to store values and display on Ui
  const [defInputs, setInput] = useState(initialInput); 
  rid of these bacause of useRef*/

  // user input excrator function
  /*   const userInput = function (user, value) {
    // console.log(user, value)
   
    setInput((prev) => ({
      ...prev,
      [user]: value,
    }));
  }; */

  // ________________________________________________________________________

  //  validation for error handling
  const [error, setError] = useState();

  // onClick to remove modal
  const removeModal = function () {
    setError();
  };

  // form submit handler
  const formSubmit = function (e) {
    e.preventDefault();
    // console.log(nameInputVal.current.value, ageInputVal)

    const refUserName = nameInputVal.current.value;
    const refAge = ageInputVal.current.value;

    if (refUserName.trim().length === 0 || +refAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "please enter a valid name and age (non-empty values)",
      });
    } else if (+refAge < 1) {
      setError({
        title: "invalid age",
        message: "please enter a valid age of (age > 1)",
      });
    } else {
      // console.log(defInputs["user-name-input"], defInputs["user-age-input"])
      props.pullDataFunc(refUserName, refAge);

      // setInput(initialInput);
      /* now to reset our form, we can switch back to the above useState solution
      or we can do something ewhich we should rarely do, but which acutally is okay here to do
      we can manipulate the DOM without react!, we know we shouldn't do that, that's the
      responsibility of React but if we just wanna reset the value we can consider doing this */

      nameInputVal.current.value = "";
      ageInputVal.current.value = "";
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
        <span>Name</span>
        <input
          // onChange={(e) => userInput(e.target.id, e.target.value)}
          ref={nameInputVal}
          id="user-name-input"
          // value={defInputs["user-name-input"]}
          type="text"
          placeholder="Enter name"
        ></input>
        <span>Age(years)</span>
        <input
          // onChange={(e) => userInput(e.target.id, e.target.value)}
          ref={ageInputVal}
          id="user-age-input"
          // value={defInputs["user-age-input"]}
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
