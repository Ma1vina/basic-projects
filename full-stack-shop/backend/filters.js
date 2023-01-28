export const filterPriceMaxMin = (req, array) => {
  let min = req.query.min;
  let max = req.query.max;
  let sort = req.query.sort;

  if (max === "") {
    max = undefined;
  }

  let filterProds = [];

  // if (sort === undefined || sort === null ||sort === "") {
  //   array.map((el) => {
  //     filterProds.push(el);
  //   });
  //   return filterProds;
  // } 
  

  if (sort === "sortPriceUp") {
      let sortPriceUp = array.sort((a,b) => a.price - b.price);
    return sortPriceUp;
  } 
  if (sort === "sortPriceLower") {
    let sortPriceLower = array.sort((a,b) => b.price - a.price);
  return sortPriceLower;
} 

if (sort === "sortAlphabet") {
  let sortAlphabet = array.sort((a,b) =>{
    const nameA = a.description.toUpperCase();
    const nameB = b.description.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return sortAlphabet;
}

  if (min !== undefined && max !== undefined) {
    array.map((el) => {
      if (el.price >= min && el.price <= max) {
        filterProds.push(el);
      }
    });
    return filterProds;
  } // СТАНДАРТНАЯ ФИЛЬТРАЦИЯ ЕСЛИ МИН И МАКС ОПРЕДЕЛЕНЫ

  if (min === undefined && max === undefined) {
    array.map((el) => {
      filterProds.push(el);
    });
    return filterProds;
  } //  СТАНДАРТНАЯ ФИЛЬТРАЦИЯ ЕСЛИ МИН И МАКС не ОПРЕДЕЛЕНЫ

  if (min === undefined) {
    console.log("я здесь");
    max = Number(max);
    array.map((el) => {
      if (el.price <= max) {
        filterProds.push(el);
      }
    });
    return filterProds;
  } //  СТАНДАРТНАЯ ФИЛЬТРАЦИЯ ЕСЛИ МАКС ОПРЕДЕЛЕН А МИН - НЕТ.

  if (max === undefined || "") {
    min = Number(min);
    console.log(min);
    array.map((el) => {
      if (el.price >= min) {
        filterProds.push(el);
      }
    }); //  СТАНДАРТНАЯ ФИЛЬТРАЦИЯ ЕСЛИ МИН ОПРЕДЕЛЕН А МАКС - НЕТ.
    return filterProds;
  }
};
