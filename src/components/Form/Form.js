import "../Form/Form.css";

const Form = function () {
  return (
    <form id="form-container">
      <span>Username</span>
      <input id="user-name-input" type="text" placeholder="Enter name"></input>
      <span>Age(years)</span>
      <input id="user-age-input" type="number" placeholder="Enter Age"></input>

      <div className="btn-container">
        <button>Add user</button>
      </div>
    </form>
  );
};

export default Form;
