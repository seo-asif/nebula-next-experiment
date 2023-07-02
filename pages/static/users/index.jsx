import React from "react";

const Userpage = (props) => {
  const { users } = props;
  return (
    <div>
      <h1>Users Page : static</h1>
      {users.map((user) => (
        <p key={user.id}>{user.firstName}</p>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const { users } = await (await fetch("https://dummyjson.com/users")).json();
  return {
    props: {
      users,
    },
  };
};
export default Userpage;
