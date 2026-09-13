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

// function threeSum(arr: number[]): number[][] {
//   for (let a = 0; a < arr.length; a++) {
//     for (let b = 0; b < arr.length; b++) {
//       if (arr[b] > arr[b + 1]) {
//         let temp = arr[b]
//         arr[b] = arr[b + 1]
//         arr[b + 1] = temp
//       }
//     }
//   }
//   let result: number[][] = []
//   for (let i = 0; i < arr.length; i++) {
//     if (i > 0 && arr[i] === arr[i - 1]) {
//       continue;
//     }
//     let left = i + 1
//     let right = arr.length - 1
//     while (left < right) {
//       let sum = arr[i] + arr[left] + arr[right];
//       if (sum === 0) {
//         result.push([arr[i], arr[left], arr[right]]);
//         left++;
//         right--;
//         while (left < right && arr[left] === arr[left - 1]) {
//           left++;
//         }
//         while (left < right && arr[right] === arr[right + 1]) {
//           right--;
//         }
//       }
//       else if (sum > 0) {
//         right--;
//       }
//       else {
//         left++;
//       }
//     }
//   }
//   return result
// }

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([1,2,0,1,0,0,0,0]));

//Q.8 Product of Array Except Self
// function productExceptSelf(nums: number[]): number[] {
//   const n = nums.length;
//   const leftProducts: number[] = new Array(n).fill(1);
//   const rightProducts: number[] = new Array(n).fill(1);
//   const result: number[] = new Array(n).fill(1);
//   let calculator = 1;
// for (let i = 0; i < n; i++) {
//   leftProducts[i] = calculator;  
//   calculator = calculator * nums[i];  
// }
// let calculator2 = 1;

// for (let i = n - 1; i >= 0; i--) {
//  rightProducts[i]=calculator2
//  calculator2=calculator2*nums[i]
// }
// for (let i = 0; i < n; i++) {
//   result[i] = leftProducts[i] * rightProducts[i];
// }

//   return result
// }

// console.log(productExceptSelf([1, 2, 3, 4]));

//Q.9 find left max and right max value sum

// function leftRightMax(arr: number[]): number[] {
//   let n=arr.length
//   let leftMax:number[]=new Array(n).fill(1)
//   let righMax:number[]=new Array(n).fill(1)
//   let result:number[]=new Array(n).fill(1)
//   let max=0
//   for(let i=0;i<n;i++){
//     leftMax[i]=max
//     max=Math.max(max,arr[i])
//   }
//   let max2=0
//   for(let i=n-1;i>=0;i--){
//     righMax[i]=max2
//     max2=Math.max(max2,arr[i])
//   }
//   for(let i=0;i<n;i++){
//     result[i]=leftMax[i]+righMax[i]
//   }
//   return result
// }

// console.log(leftRightMax([3, 1, 4, 2, 5]));


//Q.10 container with most water
// function maxArea(nums: number[]): number {
//   let left = 0;
//   let right = nums.length - 1;
//   let maxArea = 0;
//   while(left<right){
//     const width = right - left;
//     const height = Math.min(nums[left], nums[right]);
//     const area = width * height;
//      maxArea=Math.max(maxArea,area)
//      if(nums[left]<nums[right]){
//       left++
//      }else {
//       right--
//      }
//   }

//   return maxArea
  
// }

// console.log(maxArea([1,8,6,2,5,4,8,3,7]));

//Q.11 Rotat array right to left 
// function reverse(arr: number[], start: number, end: number): void {
//   while (start < end) {
//     const temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
// }

// function rotate(arr: number[], k: number): void {
//   const n = arr.length;
//   k = k % n; 

//   reverse(arr, 0, n - 1);     
//   reverse(arr, 0, k - 1);     
//   reverse(arr, k, n - 1);      
// }

// const arr = [1, 2, 3, 4,];
// rotate(arr, 2);
// console.log(arr);

//Q.12  Merge Intervals 

// function merge(intervals: number[][]): number[][] {
//  intervals.sort((a, b) => a[0] - b[0]);
//  const result:number[][]=[intervals[0]]
//  for(let i=1;i<intervals.length;i++){
//   const current=intervals[i]
//   const lastMerged=result[result.length-1]
//   if(current[0]<=lastMerged[1]){
//    lastMerged[1] = Math.max(lastMerged[1], current[1]);
//   }else{
//     result.push(current)
//   }
//  }


//   return result
// }
// let arr:number[][]=[[1,5],[5,10],[8,10],[15,18]]

//  console.log(merge(arr));


//Q.13 Kadane's Variant: Subarray with Maximum Product

function maxProduct(arr: number[]): number {
  let currentMax=arr[0]
  let maxProduct=arr[0]
  let currentMin=arr[0]
  
  for(let i=1;i<arr.length;i++){
    const tempMax = currentMax;
    currentMax=Math.max(arr[i],currentMax*arr[i],currentMin*arr[i])
    currentMin=Math.min(arr[i],currentMin*arr[i],tempMax*arr[i])
    if(maxProduct<currentMax){
      maxProduct=currentMax
    }
   
  }
 return maxProduct
}

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([-2, 3, -4]));
