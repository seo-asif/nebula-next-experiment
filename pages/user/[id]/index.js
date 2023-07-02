import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// const useUser = () => ({ user: "asif", loading: false });

const index = () => {
  const router = useRouter();

  // const user = useUser();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const id = router.query.id;

    if (id) {
      const getUserById = async (id) => {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        setUserInfo(await response.json());
      };
      getUserById(id);
    }
  }, [router.query.id]);

  // useEffect(() => {
  //   if (user.user !== "asif") {
  //     router.replace("/");
  //   }
  // }, [router, user.user]);

  return (
    <div>
      {userInfo && (
        <div>
          <p>
            Hii Greetings from {userInfo?.firstName} {userInfo?.lastName} (
            {userInfo?.maidenName})
          </p>
          <p>Age :{userInfo?.age}</p>

          <button
            onClick={(e) =>
              router.push({
                pathname: "[id]/settings",
                query: { id: router.query.id },
              })
            }
          >
            Go to Settings
          </button>
          <button onClick={(e) => router.push(`/`)}>Go to Homepage</button>
        </div>
      )}
    </div>
  );
};

export default index;
