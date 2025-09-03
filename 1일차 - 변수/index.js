console.log('문제1번')
//1단계
let a = 30
let b = 50
let temp;
console.log(a,b,temp)

//2단계
temp = a;
a = undefined
console.log(a,b,temp)

//3단계
a = b;
b = undefined;
console.log(a,b,temp)

//4단계
b = temp;
temp = undefined;
console.log(a,b,temp)


console.log('문제2번')

console.log(20+30)            // 50
console.log("20"+"30")        // 2030
console.log("Hello"+" "+2021) // Hello 2021
console.log(1+2*3)            // 7
console.log((1+3)**2)         // 16 (제곱)
console.log(1/0)              // infinity (0으로 나누거나, JavaScript에서 표현할 수 있는 값의 초과할 경우 infinity(-infinity) 반환)
console.log(6%2)              // 0 (나눈 나머지 값)
console.log(7.5%2)            // 1.5 (나눈 나머지 값)
console.log(5==5)             // true (동등 비교 연산자)
console.log(5=="5")           // true (동등 비교 연산자: 두 피연산자 값이 서로 타입이 다를 경우에는 자동으로 일부 피연산자의 타입을 변환한 후에 값을 비교)
console.log(5==="5")          // false (일치 비교 연산자: 변환하지 않고 있는 그대로의 값, 타입까지 비교하는 방식으로 엄격하게 값을 비교)
console.log(5!=5.0)           // false (부등 비교 연산자)
console.log(5!==5.0)          // false (불일치 비교 연산자)
console.log("true"===true)    // false
console.log(5<=5.0)           // true (비교 연산사 - 작거나 같음)
console.log(5>=5)             // true (비교 연산사 - 크거나 같음)
console.log(true || true)     // true (논리 연산자 or)
console.log(true || false)    // true
console.log(true && true)     // true (논리 연산자 and)
console.log(true && false)    // false 
console.log(!true)            // false (부정 연산자)
console.log(!false)           // true


console.log(5 !== 5.0) 