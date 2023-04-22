export const filterEmpty = (val: { [key: string]: any }) => {
  const obj: { [key: string]: any } = {};
  for (const objKey in val) {
    if (val[objKey]) {
      obj[objKey] = val[objKey]
    }
  }
  return obj;
}