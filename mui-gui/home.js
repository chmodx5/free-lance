let rectangle = {
  length: 40,
  width: 20,
};

const getArea = (rectangle) => {
  let area = rectangle.length * rectangle.width;
  let theMessage = "the area is";
  console.log(theMessage, area);
};

getArea(rectangle);

const convertToGrams = (kilograms) => {
  let weightInGrams = kilograms * 1000;
  console.log(weightInGrams);
};

let x = 30;

convertToGrams(x);

const ConvertToUsd = (Ksh) => {
  let CurrencyInUsd = Ksh / 115;
  console.log("amount in usd =", CurrencyInUsd);
};

let amountInKes = 400;

ConvertToUsd(amountInKes);
