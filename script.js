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
