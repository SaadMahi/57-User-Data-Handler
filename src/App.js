import React, { useState } from "react";
import Form from "./components/Form/Form";
import UserData from "./components/UserData/UserData";

function App() {
  // for setting uplifted data
  const [data, setData] = useState([]);

  //  for uplifting and managing data in array from form for UserData
  const useDataHandler = function (userName, userAge) {
    setData((prev) => [
      ...prev,
      {
        name: userName,
        age: userAge,
      },
    ]);
  };
  console.log(data);
  return (
    <>
      <Form pullDataFunc={useDataHandler} />

      <UserData userData={data} />
    </>
  );
}

export default App;
