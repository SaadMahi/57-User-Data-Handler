import "../Form/Form.css";

const Form = function () {

    // user input excrator function
    const userinput = function(user, value){
        console.log(user, value)
    }


  return (
    <form id="form-container">
      <span>Username</span>
      <input onChange={e => userinput(e.target.id, e.target.value)} id="user-name-input" type="text" placeholder="Enter name"></input>
      <span>Age(years)</span>
      <input onChange={e => userinput(e.target.id, e.target.value)} id="user-age-input" type="number" placeholder="Enter Age"></input>

      <div className="btn-container">
        <button>Add user</button>
      </div>
    </form>
  );
};

export default Form;
