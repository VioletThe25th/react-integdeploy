import React from "react";

const UserList = ({ users }) => {
    return (
        <ul>
            {users.map((user, index) => {
                <li key={index}>{`${user.firstName} ${user.lastName}, ${user.city}, ${user.postqlCode}`}</li>
            })}
        </ul>
    );
};

export default UserList;