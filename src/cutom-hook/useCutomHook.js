import { useEffect, useState } from "react";

const useCutomHook = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    if (!data && url) {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          setData(data);
        });
    }
  });
  return [data];
};

export default useCutomHook;
