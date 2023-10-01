import '../UserData/UserData.css'

const UserData = function (props) {
  return (
    <ul className="userData-container">
      {props.userData.map((data) => (
    <li key={data.id}>
          {`${data.name} is ${data.age} years old `}
        </li>
      ))}
    </ul>
  );
};

export default UserData;
