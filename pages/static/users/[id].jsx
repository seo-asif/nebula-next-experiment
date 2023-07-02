import React from "react";

const UserPage = (props) => {
  console.log(props);
  const {
    firstName,
    maidenName,
    age,
    address: { address },
  } = props.response;
  return (
    <div>
      <h1>
        {firstName} {maidenName}
      </h1>
      <h1>{age}</h1>
      <h5>{address}</h5>
    </div>
  );
};

export const getStaticPaths = async () => {
  const response = await (await fetch(`https://dummyjson.com/users/`)).json();
  const allUsersId = response.users.map((user) => user.id);
  console.log(allUsersId);

  return {
    paths: allUsersId.map((userId) => ({ params: { id: `${userId}` } })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await (
    await fetch(`https://dummyjson.com/users/${id}`)
  ).json();

  return {
    props: {
      response,
    },
  };
};
export default UserPage;
