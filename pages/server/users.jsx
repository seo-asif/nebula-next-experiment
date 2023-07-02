import React from "react";

const users = (props) => {
  console.log(props.users[0]);
  const { users } = props;
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.firstName}</p>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { users } = await (await fetch("https://dummyjson.com/users")).json();
  return {
    props: {
      users,
    },
  };
};

export default users;
