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
function maxSubarraySum(arr: number[]): number {
  let currentSum = arr[0]; 
  let maxSum = arr[0]; 

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i])
    if(currentSum>maxSum){
        maxSum=currentSum
    }
  }

  return maxSum;
}



console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 



// output: 6 (subarray [4, -1, 2, 1] ka sum sabse zyada hai)