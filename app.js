/*
function arrSum(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; ++i){
    // This is how you loop througth every element in an array
    sum = sum + arr[i];
  }
  return sum;
}

console.log(arrSum([1 , 2, 3,]));

*/

/*
function calcTime(seconds){
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;

  if (timerMinutes.toString().length === 1){
    timerMinutes = '0' + timerMinutes;
  }

  return  timerMinutes + ':' + timerSeconds;
}
console.log(calcTime(139));
*/
/*
function getMax (arr){
 let max = arr[0];
 for (let i = 1; i < arr.length; i++){
  if (arr[i] > max) {
    max = arr[i];
  }
 }
  return max;
}
console.log(getMax ([13, -3, 5]));
*/

/*
function getMax(arr){
  let max = arr[0];
  for (let i = 0;i< arr.length; i++){
    if (arr [i] > max){
      max = arr[i]
    }
  }
  return max;


}
console.log(getMax([1 , 21 , 3]))
*/

/*
function reverseString(str){
  // incrementig loop
  let reversedString = '';
  for (let i = 0; i < str.length; i++){
    //This is how you loop througth every character in a string
    reversedString = str[i] + reversedString;
  }
  return reversedString;

}
console.log(reverseString('abc'))
*/

/*
function reverseString(str){
  //decrementing forloop
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--){
   reversedString += str[i]
  }
  return reversedString;

}
console.log(reverseString('Antonio'))
*/

/*






function reverseString(str){
  //array reverse property
  return str.split('').reverse().join('')
}

console.log(reverseString('Antonio'))





*/



/*
function convertorToZeros(arr){
  //for loop
  let newArr = [];
  for ( let i = 0;i < arr.length;i++){
    newArr[i]=0;

  }
    return newArr;
}

console.log(convertorToZeros([1 , 2 , 3 , 4 , 5, 6, ]))
*/

/*

function convertorToZeros(arr){
  //arrat fill
  return new Array(arr.length).fill(0)
}

console.log(convertorToZeros([1 , 2  , 4 , 5, 6, ]))

*/

/*

function convertorToZeros(arr){
  //map converts every single ellement it the array into what you want
  return arr.map(elem => 0);
}

console.log(convertorToZeros([1 , 2  , 4 , 5, 6, ]))

*/

/*

function removeApples(arr){
  return arr.filter(elem => elem !== 'Apple') 
}

console.log(removeApples(['Banana','Apple','Orange','Apple']))

*/

/*

function filterOutFalsy(arr){
  return arr.filter(elem => !!elem === true) 
}

console.log(filterOutFalsy(['Banana','Apple','Orange','Apple', [], 0]))

*/
/*
function filterOutFalsy(arr){
 let truthyArr = [];
 for (let i = 0; i < arr.length;i++){
  if (!!arr[i] === true) {
    truthyArr.push(arr[i]);
  }

 }
 return truthyArr;
}

console.log(filterOutFalsy(['Banana','Apple',,'Apple', [], 0]))
*/

/*
function filterOutFalsy(arr){
  return arr.filter(elem => !!elem === true)
}

console.log(filterOutFalsy(['Banana','Apple', [], 0]))
*/


/*

function convertToBoolean(arr){
  return arr.map(elem => !!elem)
}


console.log(convertToBoolean(['Banana',0,'Apple', [], 0]))
*/