export const getProducts = async () => {
  let results = {};
  // setTimeout(async () => {
  const res = await fetch("https://dummyjson.com/products");
  results = await res.json();
  console.log("results", results);
  return results;
  // }, 1);
};
