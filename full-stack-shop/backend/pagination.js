export const pagination = (elem,array)=>{
    const result = [];
  for (let i = 0; i < array.length; i = i + elem) {
    const pageArr = array.slice(i, i + elem);
    result.push(pageArr);
  }
  return result;
}