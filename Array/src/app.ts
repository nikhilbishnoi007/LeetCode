// Q.1 normal reverse patern
//function printPattern(n: number): void {
//   for(let i:number=n;i>=1;i--){
//     let row=""
//     for(let j:number=i;j>=1;j--){
//      row+="*"
//     }
//     console.log(row)
//   }
// }

// printPattern(5);



// Q.2 print pyramid pattern
// function pyramidPattern(n: number): void {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
    
//     for (let j = 1; j <= (n - i); j++) {
//       row+=" "
//     }
    
//     for (let k = 1; k <= (2 * i - 1); k++) {
//        row+="*"
//     }
    
//     console.log(row);
//   }
// }

// pyramidPattern(5)

function numberPattern(n:number):void{
    for(let i=1;i<=n;i++){
        let raw=""
      for(let j=1;j<=i;j++){
       raw+=` ${j}`
      }
      console.log(raw)
    }
}
numberPattern(3)