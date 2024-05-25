import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import Child from "./child";

export const getList = createAsyncThunk("getproductlist", async () => {
  const res = await fetch("https://dummyjson.com/products");
  const results = await res.json();
  return results;
});

const slice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = [{ id: 1, title: "Title", description: "description" }];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getList.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { actions, reducer } = slice;
export const { getProducts } = actions;
// // export default reducer;
// const sliceReducer = slice.reducer;

const store = configureStore({
  reducer,
});
export default function ParentReduxComp() {
  return (
    <Provider store={store}>
      <Child />
    </Provider>
  );
}
