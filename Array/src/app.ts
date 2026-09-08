function secondLargestNumber(arr: number[]): number {
    let largest: number=0;
    let secondlargest: number=0;
    for (const val of arr) {
      if(val>largest){
        secondlargest=largest
        largest=val;
      }
      else if(val>secondlargest && val!=largest){
         secondlargest=val
      }
    }

   return secondlargest
}


let find=secondLargestNumber([12, 35, 38, 36, 34, 1])
console.log(find)