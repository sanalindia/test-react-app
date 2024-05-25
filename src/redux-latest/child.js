import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList, getProducts } from "./Main";

export default function Child() {
  const { products } = useSelector((state) => state);
  const { state, setState } = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    // if (!state) getData();
  }, []);

  const getData = () => {
    dispatch(getList());
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={() => getData()}>
        Click Me
      </button>
      {JSON.stringify(products)}
    </div>
  );
}
