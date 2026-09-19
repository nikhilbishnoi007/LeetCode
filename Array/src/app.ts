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

// function maxProduct(arr: number[]): number {
//   let currentMax=arr[0]
//   let maxProduct=arr[0]
//   let currentMin=arr[0]

//   for(let i=1;i<arr.length;i++){
//     const tempMax = currentMax;
//     currentMax=Math.max(arr[i],currentMax*arr[i],currentMin*arr[i])
//     currentMin=Math.min(arr[i],currentMin*arr[i],tempMax*arr[i])
//     if(maxProduct<currentMax){
//       maxProduct=currentMax
//     }

//   }
//  return maxProduct
// }

// console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([-2, 0, -1]));
// console.log(maxProduct([-2, 3, -4]));

//Q.14 Find Duplicate Number Using Floyd's Tortoise and Hare Algorithm

// function findDuplicate(arr: number[]): number {
//   let slow = arr[0];
//   let fast = arr[0];
//   do {
//     slow = arr[slow];           
//     fast = arr[arr[fast]];      
//   } while (slow !== fast);
//   let finder=arr[0]
//   while (slow !== finder) {
//     slow = arr[slow];           
//     finder = arr[finder];      
//   } 
//   return finder;
// }

// let arr=[3,1,3,4,2]
// console.log(findDuplicate(arr));

// Q.15  Majority Element

// function majorityElement(arr: number[]): number {
//   let n=arr.length
//   let count=0
//   let currentElement=arr[0]
//   for(const num of arr){
//     if(count==0){
//       currentElement=num
//     }
//     if(num===currentElement){
//       count++
//     }else{
//       count--
//     }
//   }
//   return currentElement
// }

// console.log(majorityElement([2, 1, 1, 1, 1, 2, 2]));

//Q.16 Majority Element II

// function majorityElementII(arr: number[]): number[]{
// let count1=0
// let count2=0
// let limit=arr.length/3
// let currentElement1: number | null = null;
// let currentElement2: number | null = null;
// let newArr:number[]=[]
// for(const nums of arr){
// if (nums === currentElement1) {
//   count1++
// } else if (nums === currentElement2) {
//   count2++
// }
//  else if (count1 === 0) {
//   currentElement1 = nums
//   count1 = 1
// }
// else if (count2 === 0) {
//   currentElement2 = nums
//   count2 = 1
// }
// else {
//   count1--
//   count2--
// }
// }
// let actualCount1 = 0
// let actualCount2 = 0

// for (const nums of arr) {
//   if (nums === currentElement1) actualCount1++
//   if (nums === currentElement2) actualCount2++
// }
// if (actualCount1 > limit && currentElement1 !== null) {
//   newArr.push(currentElement1)
// }
// if (actualCount2 > limit && currentElement2!== null) {
//   newArr.push(currentElement2)
// }
// return newArr
// }

// console.log(majorityElementII([3, 2, 3]));


// console.log(majorityElementII([1, 1, 1, 3, 3, 2, 2, 2]));

// console.log(majorityElementII([1,2,3]))
// console.log(majorityElementII([0,0,0]))

//Q.17 best time to buy a stock

// function maxProfit(arr: number[]): number {
//   let minPrice=arr[0]
//   let maxProfit=0
//   for(let i=0;i<arr.length;i++){
//     minPrice=Math.min(arr[i],minPrice)
//     maxProfit=Math.max(maxProfit,arr[i]-minPrice)
//   }

//  return maxProfit
// }

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));

//Q.18 best time to buy or sell stock II

// function maxProfitMultiple(arr: number[]): number {
//     let minPrice=arr[0]
//     let maxProfit=0
//     for(let i=0;i<arr.length;i++){
//       if(arr[i+1]>arr[i]){
//         maxProfit+=arr[i+1]-arr[i]
//       }
//     }
//     return maxProfit
// }

// console.log(maxProfitMultiple([7, 1, 5, 3, 6, 4]));

// Q.19 Find All Numbers Disappeared in an Array

// function findDisappearedNumbers(arr: number[]): number[] {
//   let n=arr.length
//   let set=new Set<number>()
// for(let i=1;i<=n;i++){
//    set.add(i)
// }
// for(const val of arr){
//   set.delete(val)
// }
// return Array.from(set)
// for (let i = 0; i < arr.length; i++) {
//   const index = Math.abs(arr[i]) - 1;   
//   if (arr[index] > 0) {
//     arr[index] = -arr[index];           
// }
// }
// const result: number[] = []
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     result.push(i + 1);   
//   }
// }
// return result
// }

// console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));


//Q.20 Pascal's Triangle Row (variant)

// function runningMax(arr: number[]):number[] {
// const result:number[]=[]
// let max=arr[0]
// for(let i=0;i<arr.length;i++){
//   max=Math.max(max,arr[i])
//   result[i]=max
// }
// return result
// }

// console.log(runningMax([3, 1, 4, 1, 5, 9, 2, 6]));
// output: [3, 3, 4, 4, 5, 9, 9, 9]

//Q.21 Trapping Rain Water

// function trap(height: number[]):number{
//   let n=height.length
//   let leftMax:number[]=[]
//   let rightMax:number[]=new Array(n).fill(0)
//   let calculator=height[0]
//   for(let i=0;i<n;i++){
//     calculator=Math.max(calculator,height[i])
//     leftMax[i]=calculator
//   }
//   let calculator2=height[n-1]
//   for(let i=n-1;i>=0;i--){
//     calculator2=Math.max(calculator2,height[i])
//     rightMax[i]=calculator2
//   }
//   let TotalWater=0
//   for(let i=1;i<n;i++){
//     TotalWater+=Math.min(leftMax[i],rightMax[i])-height[i]
//   }
//   return TotalWater
// }

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));


//Q.22 Spiral Matrix
// function spiralOrder(matrix: number[][]){
//   let top=0
//   let bottom=matrix.length-1 
//   let left=0
//   let right=matrix[0].length-1 
//   let result:number[]=[]
//     while (top <= bottom && left <= right) {
//       for(let i=left;i<=right;i++){
//         result.push(matrix[top][i])
//       }
//       top++ 
//       for(let i=top;i<=bottom;i++){
//         result.push(matrix[i][right])
//       }
//       right-- 
//       if(top<=bottom){
//       for(let i=right;i>=left;i--){
//         result.push(matrix[bottom][i])
//       }
//       bottom--
//       } 
//       if(left<=right){
//       for(let i=bottom;i>=top;i--){
//         result.push(matrix[i][left])
//       }
//       left++ 
//      } 
//   }
//   return result
// }
// let num=[[1,2,3],[4,5,6],[7,8,9]]
// let num2=[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// console.log(spiralOrder(num));
// console.log(spiralOrder(num2));

//Q.23 Rotating Matrix
// function rotate(matrix: number[][]): void {
//   let n=matrix.length
//   for(let i=0;i<n;i++){
//     for(let j=i+1;j<n;j++){
//       let temp=matrix[i][j]
//       matrix[i][j]=matrix[j][i]
//       matrix[j][i]=temp
//     }
//   }
//   for(let i=0;i<n;i++){
//     let left=0;
//     let right=n-1
//     while(left<right){
//       let temp=matrix[i][left]
//       matrix[i][left]=matrix[i][right]
//       matrix[i][right]=temp
//       left++
//       right--
//     }
//   }

// }

// const matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
// const matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// rotate(matrix)
// rotate(matrix2)
// console.log(matrix)
// console.log(matrix2)

//Q.24 Binary Search
// function search(arr: number[], target: number): number {
//  let left=0;
//  let right=arr.length-1
//  while(left<=right){
//   let mid=Math.floor((left+right)/2)
//   if(arr[mid]==target)return mid
//   else if (arr[mid] < target) left = mid + 1;
//   else right = mid - 1;
//  }
//  return -1
// }

// console.log(search([-1,0,3,5,9,12], 9));


// console.log(search([-1, 0, 3, 5, 9, 12], 2));


//Q.25 Search in Rotated Sorted Array
function search(arr: number[], target: number): number {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] == target) return mid
        if (arr[left] <= arr[mid]) {
            if (target >= arr[left] && target < arr[mid]) right = mid - 1
            else left = mid + 1
        } else {
            if (target <= arr[right] && target > arr[mid]) left =mid +1
            else right = mid - 1
        }

    }

    return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// output: 4

console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
// output: -1 (3 array mein nahi hai)
