// Q.1 find the second largest array 
// function secondLargestNumber(arr: number[]): number {
//     let largest: number=0;
//     let secondlargest: number=0;
//     for (const value of arr) {
//       if(value>largest){
//         secondlargest=largest
//         largest=value;
//       }
//       else if(value>secondlargest && value!=largest){
//          secondlargest=value
//       }
//     }

//    return secondlargest
// }


// let find=secondLargestNumber([12, 35, 38, 36, 34, 1])
// console.log(find)

//Q.2 change the index of 0
// function moveZeros(arr: number[]): number[] {
//  let insertPos = 0
//  for(const val of arr){
//  if(val!== 0){
//     arr[insertPos]=val
//     insertPos++
// }
// }
//  for(let i=insertPos;i<arr.length;i++){
//     arr[i]=0
//  }

//  return arr
// }

// console.log(moveZeros([0, 1, 0, 3, 12,8,9,0,9,0])); 

//Q.3 find missing number 
// function findMissing(arr: number[], n: number): number {
//     let sum = n * (n + 1) / 2
//     let actualSum = 0;
//     for (const num of arr) {
//         actualSum += num;
//     }
//     let missingnumber=sum-actualSum
//     return missingnumber
// }

// console.log(findMissing([1, 2, 4, 5], 5)); 

//Q.4 finding multiple missing number

// function multipleMissingNumber(arr: number[],n:number):number[]{
//     let set=new Set<number>()
//     for(let i=1;i<=n;i++){
//         set.add(i)
//     }
//     for(const val of arr){
//         set.delete(val)
//     }
//      return Array.from(set);
// }

// let array=[1,2,4,5,7]
// let value=multipleMissingNumber(array,9)
// console.log(value)


//Q.5 find maxium subbarrays sum
// function maxSubarraySum(arr: number[]): number {
//   let currentSum = arr[0]; 
//   let maxSum = arr[0]; 

//   for (let i = 1; i < arr.length; i++) {
//     currentSum = Math.max(arr[i], currentSum + arr[i])
//     if(currentSum>maxSum){
//         maxSum=currentSum
//     }
//   }

//   return maxSum;
// }



// console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 


//Q.6 Sorting array using Bubble sort

// function BubbleSort(arr: number[]): number[] {
//   for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[j]>arr[j+1]){
//            let temp=arr[j]
//            arr[j]=arr[j+1]
//            arr[j+1]=temp
//         }
//     }
//   }

// return arr
// }

// console.log(BubbleSort([9,5,24,43,4]));

//Q.7 find the three value where sum of the values is zero

function threeSum(arr: number[]): number[][] {
  for (let a = 0; a < arr.length; a++) {
    for (let b = 0; b < arr.length; b++) {
      if (arr[b] > arr[b + 1]) {
        let temp = arr[b]
        arr[b] = arr[b + 1]
        arr[b + 1] = temp
      }
    }
  }
  let result: number[][] = []
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    let left = i + 1
    let right = arr.length - 1
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }
        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      }
      else if (sum > 0) {
        right--;
      }
      else {
        left++;
      }
    }
  }
  return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([1,2,0,1,0,0,0,0]));


