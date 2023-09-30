import '../UserData/UserData.css'

const UserData = function (props) {
  return (
    <ul className="userData-container">
      {props.userData.map((data, index) => (
        <li key={index}>
          {`${data.name} is ${data.age} years old `}
        </li>
      ))}
    </ul>
  );
};

export default UserData;
