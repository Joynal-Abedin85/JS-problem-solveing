y = 2413

if(y > 1000){
    console.log("this is bigger then 1000")
}
if(y >= 1000 &&  y <= 9000){
    while(true){
        y++
        let digit = String(y).split('')
        let set = new Set(digit)
        if(digit.size === set.length){
            console.log(y)
            break
        }
    }
} 


