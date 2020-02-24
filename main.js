/******************
 * YOUR CODE HERE *
 ******************/
//const cars = ['bmw', 'audi', 'honda', 'nissan', 'ford', 'speed racer'];
//console.log(cars[cars.length - 1]);
//cars[cars.length - 1] = 'sharod';
//console.log(cars);




function addMeToEnd(arr){
arr.push('Colin');
}

function changeLast(arr,num){             //arr[arr.length - 1] = value; *answer
  /* change the array at its last index */
arr.pop();
arr.push(num);
}

function addMeToStart(arr){
  arr.unshift('Colin');
}

function changeAllValuesTo(arr, nV) {
  for (let i = 0; i < arr.length; ++i) {
      arr[i] = nV;
  }
  //arr.fill(nV) does the same thing.
}
//returning something means to throw it away 

function oddOrEven(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      arr[i] = 'even'; 
    }else{ 
      arr[i] = 'odd';
    }
  }
}

function changeNextThreeToValue(start, arr, nV){
  for (let i = start; i < start + 3; i++) {
arr[i] = nV;
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