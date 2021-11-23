import React from "react";
import UserListItem from "./UserListItem";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = () => {
    return(
        <Card className={classes.list}>
            <UserListItem value="max(32 Year)"/>
            <UserListItem value="max(32 Year)"/>
            <UserListItem value="max(32 Year)"/>
        </Card>
    );
} 

export default UserList;