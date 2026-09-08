function secondLargestNumber(arr: number[]): number {
    let largest: number=0;
    let secondlargest: number=0;
    for (const value of arr) {
      if(value>largest){
        secondlargest=largest
        largest=value;
      }
      else if(value>secondlargest && value!=largest){
         secondlargest=value
      }
    }

   return secondlargest
}


let find=secondLargestNumber([12, 35, 38, 36, 34, 1])
console.log(find)