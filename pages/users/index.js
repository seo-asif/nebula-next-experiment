import React, { useEffect, useState } from "react";
import Link from "next/link";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://dummyjson.com/users?limit=5");
      const { users } = await response.json();

      setUsers(users);
    };
    fetchUser();
  }, []);

  return (
    <div>
      {users &&
        users.map((user) => (
          <Link href={`user/${user.id}`} key={user.id}>
            <li>{user.firstName}</li>
          </Link>
        ))}
    </div>
  );
};

export default UserPage;
