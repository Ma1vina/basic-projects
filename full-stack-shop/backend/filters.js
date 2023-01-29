export const filterPriceMaxMin = (req, array) => {
  if (req.query.max === "") {
    req.query.max = undefined;
  }

  let filterProds = [];

  if (req.query.min !== undefined && req.query.max !== undefined) {
    array.map((el) => {
      if (el.price >= req.query.min && el.price <= req.query.max) {
        filterProds.push(el);
      }
    });
    return filterProds;
  } // СТАНДАРТНАЯ ФИЛЬТРАЦИЯ ЕСЛИ МИН И МАКС ОПРЕДЕЛЕНЫ

  if (req.query.min === undefined && req.query.max === undefined) {
    array.map((el) => {
      filterProds.push(el);
    });
    return filterProds;
  } //  СТАНДАРТНАЯ ФИЛЬТРАЦИЯ ЕСЛИ МИН И МАКС не ОПРЕДЕЛЕНЫ

  if (req.query.min === undefined) {
    req.query.max = Number(req.query.max);
    array.map((el) => {
      if (el.price <= req.query.max) {
        filterProds.push(el);
      }
    });
    return filterProds;
  } //  СТАНДАРТНАЯ ФИЛЬТРАЦИЯ ЕСЛИ МАКС ОПРЕДЕЛЕН А МИН - НЕТ.

  if (req.query.max === undefined || "") {
    req.query.min = Number(req.query.min);
    console.log(req.query.min);
    array.map((el) => {
      if (el.price >= req.query.min) {
        filterProds.push(el);
      }
    }); //  СТАНДАРТНАЯ ФИЛЬТРАЦИЯ ЕСЛИ МИН ОПРЕДЕЛЕН А МАКС - НЕТ.
    return filterProds;
  }
};

export const filterSelectSorted = (req, array) => {
  if (req.query.sort === "sortAlphabet") {
    let sortAlphabet = array.sort((a, b) => {
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
  if (req.query.sort === "sortPriceUp") {
    let sortPriceUp = array.sort((a, b) => a.price - b.price);
    return sortPriceUp;
  }
  if (req.query.sort === "sortPriceLower") {
    let sortPriceLower = array.sort((a, b) => b.price - a.price);
    return sortPriceLower;
  }
  return array;
};
