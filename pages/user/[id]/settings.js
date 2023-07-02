/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";

import React from "react";

const settings = () => {
  const {
    query: { id },
  } = useRouter();

  return (
    <div>
      <h1>This is {id}&apos; seetings</h1>
    </div>
  );
};

export default settings;
