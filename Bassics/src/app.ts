var twoSum = function(nums:number[], target:number) {
    let a=[]
    let length=nums.length;
    for(let i=0;i<length;i++){
        for(let j=i+1;j<length;j++){
            let temp;
            temp=nums[i]!+nums[j]!; //value is defined
            if(temp==target){
                if(a.length>0){
                    a.length=0
                    a.push(i,j)
                    console.log(a)
                    break;
                }else{
                    a.push(i,j)
                    console.log(a)
                    break
                }
                
                
            }

        }
    }
  
};

let nums=[1,2,3,4,5,6,7]

let target=10

twoSum(nums,target)