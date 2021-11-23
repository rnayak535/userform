import React from "react";
import classes from "./UserListItem.module.css";

const UserListItem = (props) => {
    return(
        <li type="none" className={classes.li}>
            {props.value}
        </li>
    );
} 

export default UserListItem;