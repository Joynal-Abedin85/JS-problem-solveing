// let arr = [-4, 3, -9, 0, 4, 1, 6]
// let p = arr.filter(num => num > 0)
// let a = p.length / arr.length
// console.log(a.toFixed(6))

// let n = arr.filter(num => num < 0)
// let b = n.length / arr.length
// console.log(b.toFixed(6))

// let o = arr.filter(num => num == 0)
// let c = o.length / arr.length
// console.log(c.toFixed(6))

// problem 2 

// const arr = [1,2,3,4,5]

// function nd(){
//     const c = [...arr].sort((a,b) => a-b)
//     c.pop()
    
//     const d = c.reduce((a,b) => a+b)
//     return d
// }

// function ist(){
//     const a = [...arr].sort((a,b)=> b-a)
//     a.pop()


//     const b  = a.reduce((a,b)=> a + b)
//     return b 
// }

// console.log(nd(), ist())

// mock test 1 

// let arr = [0,1,2,4,6,5,3]

// const  a = arr.filter((a) => a % 2 == 1 )
// console.log(a.length)

// problem 3 

// function timeConversion(s) {
//     // Write your code here
        
//         let [time, modifier] = s.split(/(AM|PM)/); // Split time and AM/PM
//         let [hours, minutes, seconds] = time.split(":").map(Number);

//         if (modifier === "PM" && hours !== 12) {
//             hours += 12; // Convert PM hours to 24-hour format
//         } else if (modifier === "AM" && hours === 12) {
//             hours = 0; // Convert 12 AM to 00
//         }
    
//         return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    

// }


// dsa problem 

// let a = [1,3,4]

// let b = a.reverse().join('')

// console.log(b)





