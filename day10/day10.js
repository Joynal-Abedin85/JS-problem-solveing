let nums = [2,7,11,15,18] 
let target = 9



for( let i = 0 ; i< nums.length; i++){
    for(let j = i+1 ; i< nums.length; i++){
        if(nums[i] + nums[j] === target){
           return [i,j]
        }
    }
}
