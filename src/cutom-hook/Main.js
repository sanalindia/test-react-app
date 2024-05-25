import { useState } from "react";
import useCutomHook from "./useCutomHook";

export default function MainCustomHook() {
  //   const [data, setData] = useState([]);
  const [data] = useCutomHook("https://reqres.in/api/users?page=2");
  return <div>{JSON.stringify(data)}</div>;
}
