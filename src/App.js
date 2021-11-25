import React, {useState} from 'react';
import Adduser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

const App = () => {
  const [userList, setUserList] = useState([]);
  const userAddedData = (addedData) => {
    setUserList(prevList => {
      return [...prevList, addedData];
    });
  }

  return (
    <div>
      <Adduser onUserSubmit={userAddedData} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
