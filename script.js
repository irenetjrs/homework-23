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
   return arr1.length === 0 
   ? element1 
   : element1 += sum1(arr1);
   }
console.log(sum1(arr1));

// task 2

function deepCount(arr){
   let quantity = arr.length;
for ([item] in arr){
   if(Array.isArray (arr[item])){
      quantity += deepCount(arr[item])
   }
}
return quantity;
}
console.log(deepCount([]));
console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([[[[]]]]));

// task 2/2

function deepCount(arr){
   let quantity = arr.length;
for ([item] in arr){
   Array.isArray (arr[item])
   ? quantity += deepCount(arr[item])
   : quantity = arr.length;
   }
   return quantity;
}


console.log(deepCount([]));
console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([[[[]]]]));