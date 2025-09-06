// 1. "안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet’를 만드시오
function greet() {
    console.log("안녕 내 이름은 제시카야")
}
greet(); // 안녕 내이름은 제시카야

// 2. 름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”
function greet2(name) {
    console.log(`안녕 내 이름은 ${name}야`)
}
greet2("에밀리") // 안녕 내 이름은 에밀리야
greet2("할리") // 안녕 내 이름은 할리야

// 3.매개변수로 전달받은 이름을 반환하게 함수를 수정하시오
function greet3(name) {
    console.log(`안녕 내 이름은 ${name}야`) // 안녕 내 이름은 민지야
    return name
}
const reNme = "민지"
console.log("안녕 내 이름은 반환 된",reNme,"이야") // 안녕 내 이름은 반환된 민지이야


// 4. meetAt 함수를 만들어주세요.
// 첫번째 인자는 년도에 해당하는 숫자입니다.
// 두번째 인자는 월에 해당하는 숫자입니다.
// 세번째 인자는 일에 해당하는 숫자입니다.

// 결과 예시
// meetAt(2022); // 결과 --> 2022년
// meetAt(2032, 3); // 결과 --> "2032년 3월"
// meetAt(1987, 10, 28); // 결과 --> "1987/10/28"

function meetAt(year, month, date) {
    if(date) {
        return `${year}/${month}/${date}`; 
    }
    if(month) {
        return `${year}년 ${month}월`;
    }
    if(year) {
        return `${year}년`;
    }
}
console.log(meetAt(2022))
console.log(meetAt(2024,1)) 
console.log(meetAt(2025,12,25))


// 5. findSmallestElement 함수를 구현해 주세요.

// findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열입니다.
// arr 의 값들 중 가장 작은 값을 리턴 해주세요.
// 만일 arr 가 비어있으면 0을 리턴 해주세요.
// 예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 0이 리턴 되어야 합니다.
// 이용되는 배열
// [100,200,3,0,2,1]

function findSmallestElement(arr) {
    if(arr.length == 0) {
        return 0;
    }
    return Math.min(...arr)
}
console.log(findSmallestElement([100,200,3,0,2,1])) // 0
console.log(findSmallestElement([100,200,3000,150,20,12])) // 12
console.log(findSmallestElement([])) // 0


// 6.돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오
// 예 ) 12300인경우
// 50000 X 0
// 10000 X 1
// 5000 X 0
// 1000 X 2
// 500 X 0
// 100 X 3

function exchangeMoney(money) {
    let units = [50000,10000,5000,1000,500,100]
    let results ="";

    for (let unit of units) {
        let count = Math.floor(money / unit);
        results += `${unit} X ${count}\n`;
        money %= unit;
    }

    return results
}
console.log(exchangeMoney(12300))


