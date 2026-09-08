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
//Q.3 number pattern
// function numberPattern(n:number):void{
//     for(let i=1;i<=n;i++){
//         let raw=""
//       for(let j=1;j<=i;j++){
//        raw+=` ${j}`
//       }
//       console.log(raw)
//     }
// }
// numberPattern(5)

//Q.4 normal and reverse pattern 
//function pyramid(n:number):void{
//   for(let i=1;i<=n;i++){
//     let raw=""
//     for(let j=1;j<=(n-i);j++){
//       raw+=" "
//     }
//     for(let k=1;k<=(2*i-1);k++){
//       raw+="*"
//     }
//     console.log(raw)
//   }
//   for(let a=(n-1);a>=1;a--){
//     let raw2=""
//     for(let b=(n-a);b>=1;b--){
//       raw2+=" "
//     }
//     for(let c=(2*a-1);c>=1;c--){
//       raw2+="*"
//     }
//     console.log(raw2);

//   }

// }
// pyramid(5)


// Q.5 hollo pyramid 
// function holloPyramid(n:number):void{
//     for(let i:number=1;i<=n;i++){
//       let raw=""
//       for(let j:number=1;j<=(n-i);j++){
//         raw+=" " 
//       }
//       for(let k=1;k<=(2*i-1);k++){
//         if(k===1||k===(2*i-1)){
//           raw+="*"
//         }
//         else{
//           raw+=" "
//         }
//       }
//       console.log(raw)
//     }
//     for(let a=n-1;a>=1;a--){
//       let raw2=""
//       for(let b=(n-a);b>=1;b--){
//         raw2+=" "
//       }
//       for(let c=(2*a-1);c>=1;c--){
//         if(c===1 ||c===(2*a-1)){
//           raw2+="*"
//         }
//         else{
//           raw2+=" "
//         }
//       }
//       console.log(raw2)
//     }
// }
// holloPyramid(5)


// Q.6  increasing number pattern
// function increasingPattrn(n:number):void{
//   let count=1
//   for(let i=1;i<=n;i++){
//    let  raw=""
//     for(let j=1;j<=i;j++){
//       raw+=` ${count}`
//       count++
//     }
//     console.log(raw);
//   }
// }
// increasingPattrn(5)

function Table(n: number): void {
  for (let i = 1; i <= 10; i++) {
    let line=""
      for (let k = 1; k <= n; k++) {
        line+=`${i*k}\t`
      }
      console.log(`${line}`)
    }
  }


Table(10)