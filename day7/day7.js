y = 2413

if(y >= 1000 &&  y <= 9000){
    while(true){
        y++
        let a = String(y).split('')
        let b = new Set(a)
        if(b.size === a.length){
            console.log(y)
            break
        }
    }

    
} 


