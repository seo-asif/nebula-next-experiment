/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";

import React from "react";

const settings = () => {
  const {
    query: { username },
  } = useRouter();

  return (
    <div>
      <h1>This is {username}&apos; seetings</h1>
    </div>
  );
};

export default settings;
