function log<T>(input:T){
    console.log(input)
}
//Q.1 sliding window maximum
function maxSlidingWindow(nums: number[], k: number): number[] {
    let result:number[]=[]
    let n=nums.length
    for(let i=0;i<=n-k;i++){
        let maxval=-Infinity
        for(let j=i;j<k+i;j++){
         maxval=Math.max(nums[j],maxval)
        }
        result.push(maxval)
    }
    return result
};
let nums:number[]=[1,3,-1,-3,5,3,6,7]
let k=3
let ans=maxSlidingWindow(nums,k)
log(ans)
