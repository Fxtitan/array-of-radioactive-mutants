/******************
 * YOUR CODE HERE *
 ******************/
const addMeToEnd = (arr) => {
  arr.push("Colin")
}

const changeLast = (arr, value) => {
  arr.pop();
  arr.push(value);
}

const addMeToStart = (arr) => {
  arr.unshift("Colin")
}

const changeAllValuesTo = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = value;
  }
  //arr.fill(value)
}

const oddOrEven = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] = 'even';
    } else {
      arr[i] = 'odd';
    }
  }
}

const changeNextThreeToValue = (start, arr, value) => {
  for (let i = start; i < start + 3; i++) {
    arr[i] = value;
  }
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}