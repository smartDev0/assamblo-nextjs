const splitItems = (items, size) => {
  const clonedArray = items.slice(0);
  const newArray = [];
  while (clonedArray.length > 0)
    newArray.push(clonedArray.splice(0, size));
  return newArray;
}
export default splitItems