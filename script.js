// task 1

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sum (arr){
   let element = arr.pop();
   if (arr.length === 0){
      return element;
   } else {
      return element += sum(arr);
   }
}
console.log(sum(arr));

// task 1/2

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sum1 (arr1){
   let element1 = arr1.pop();
   return arr1.length === 0 ? 
   element1 
   : element1 += sum1(arr1);
   }
console.log(sum1(arr1));