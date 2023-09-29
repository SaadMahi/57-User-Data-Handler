import { useState } from "react";
import "../Form/Form.css";

const Form = function () {

  const initialInput = {
    'user-name-input': '',
    'user-age-input': ''
  }

    // useState to store values and display on Ui
   const [defInputs, setInput] = useState(initialInput)

    // user input excrator function
    const userInput = function(user, value){
        // console.log(user, value)
        setInput(((prev) => ({
          ...prev,
          [user]: value
        })))
    }

    // form submit handler
const formSubmit = function(e){
  e.preventDefault();
  console.log(defInputs)
  setInput(initialInput)
}


  return (
    <form onSubmit={formSubmit}  id="form-container">
      <span>Username</span>
      <input onChange={e => userInput(e.target.id, e.target.value)} id="user-name-input" value={defInputs["user-name-input"]} type="text" placeholder="Enter name"></input>
      <span>Age(years)</span>
      <input onChange={e => userInput(e.target.id, e.target.value)} id="user-age-input" value={defInputs["user-age-input"]} type="number" placeholder="Enter Age"></input>

      <div className="btn-container">
        <button type='submit' >Add user</button>
      </div>
    </form>
  );
};

export default Form;
