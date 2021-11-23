import React from 'react';
import Adduser from './components/Users/AddUser';
import UserList from './components/UserList/UserList';

const App = () => {

  const userAddedData = (addedData) => {
    console.log(addedData);
  }

  return (
    <div>
      <Adduser onUserSubmit={userAddedData} />
      <UserList />
    </div>
  );
}

export default App;
