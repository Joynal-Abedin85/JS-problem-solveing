let a = 5

if(a % 2 == 0 ){
    console.log("this is odd number ")
}else {
    console.log('this is even number')
}



let c = "2,5,6,9"
let arr = [3,4,5,6,7,8]

let b = c.split(",").map((a,b) => a % b == 0)
let arrmap = arr.map((a,b) => a-b )

console.log(arrmap)
console.log(b)


let filt = [3,4,5,6,7,7,8,9]

let filtering = filt.filter((a,b) => a % b == 0)

console.log(filtering)


