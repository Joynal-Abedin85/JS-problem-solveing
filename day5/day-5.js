// console.log('star')

// setTimeout(() => {
//     console.log('timeout')
// }, 0);

// Promise.resolve().then(() => console.log('promise'))

// console.log('end')


// Q2 

// function User(name) {
//     this.name = name;
// }

// User.prototype.sayHello = () => {
//     console.log(`Hello, ${this.name}`);
// };

// const user1 = new User("Alice");
// user1.sayHello();

// Q3

// function counter() {
//     let count = 0;
//     return () => console.log(count++);
// }

// const count1 = counter();
// count1();  // First call
// count1();  // Second call

// const count2 = counter();
// count2();  // First call for count2
// count2();  // Second call for count2

// Q4

// console.log(foo)
// var foo = "hello"
// console.log(foo)

// Q5

// function sum( ...numbers, extra) {
//     return numbers.reduce((acc,num) => acc + num , 0) + extra;
// }


// Q6 

// function mycomponent() {
//     const inputRef  = usrRef()

//     useEffect(() => {
//     inputRef.current.focus()
//     }, [input])

//     return <input/>
// }

// Q7

{/* <div onclick="console.log('div click')">
    <button onclick="console.log('button click')">
        click me
    </button>
</div> */}

// Q8

// console.log(1 + '2' + 3)

// Q9

// function nul(x,y = 2){
//     return x * y
// }

// console.log(nul(5))
// console.log(nul(5, undefined))
// console.log(nul(5,null))

// Q10 

// const a = [1,2,3]
// const b = a
// b.push(4)
// console.log(a)

// Q11

// let x = 1
// let y = 2
// x= x+ y++
// console.log(x,y)

// Q12 

// app.get('/', (req,res)=> {
//     res.send('hello world')
// })

// Q13

// let x = [1,2,3]
// let y = [...x]
// y[0] = 4
// console.log(x[0], y[0])

// Q14

// const numbers = [1,2,3]
// numbers[10]= 10
// console.log(numbers.length)
// console.log(numbers)

// Q15

// let numbers = [1,2,3]
// numbers = numbers.map(num=> num * 2)
// console.log(numbers)

// Q16

// const x = 10
// function foo() {
//     console.log(x)
//     const x = 20
// }

// foo()

// Q17

h1 {
    font-size: 20px;
    font-size: 30px;
}


