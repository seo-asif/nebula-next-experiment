import { useRouter } from "next/router";

const index = () => {
  const { query } = useRouter();
  return <div>This is {query.username} Page</div>;
};

export default index;
