import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const Adduser = (props) => {
  const [enteredName, setUserName] = useState("");
  const [enteredAge, setUserAge] = useState("");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const userAgeHandler = (event) => {
    setUserAge(event.target.value);
  };
  const addUserSubmitHandler = (event) => {
    event.preventDefault();
    const userObj = {
      name: enteredName,
      age: enteredAge,
    };
    props.onUserSubmit(userObj);
    setUserName('');
    setUserAge('');
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserSubmitHandler}>
        <label htmlFor="username">Name: </label>
        <input
          id="username"
          type="text"
          onChange={userNameHandler}
          name="username"
          value={enteredName}
        />
        <label htmlFor="age">Age: </label>
        <input
          id="age"
          type="number"
          onChange={userAgeHandler}
          min="1"
          name="age"
          value={enteredAge}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default Adduser;
