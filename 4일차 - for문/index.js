let menu = 5

if (menu == 1){
    console.log("물건사기")
} else if(menu == 2) {
    console.log("잔고확인")
} else if (menu == 3){
    console.log("히스토리확인")
}else {
console.log("홈으로돌아가기")
}

// 사용 범위에 제한이 있어, 요즘 잘 안 쓰게 되는 경향이 있다
// 값이 하나로 딱 떨어지는 경우에 사용 할 수 있음
// 등호, 부등호 조건을 사용 할 수 없다 ex) < <= => >
switch (menu){
    case 1 :
        console.log("물건사기")
        break;
    case 2 :
        console.log("잔고확인")
        break;
    case 3 :
        console.log("히스토리확인")
        break;
    default :
        console.log("홈으로돌아가기")
}

let menu2 = 2
if (menu2 <= 3) {
    console.log("범위 안의 숫자 입니다")
} else {
    console.log("범위 밖의 숫자 입니다")
}

// 위 내용을 간소화 할 수 있는 방법
// 삼항 연산식
// 식 =>> 조건 ? true일때 : false일때
// let answer = menu2 <= 3 ? true : false
let answer = menu2 <= 3 ? "범위 안의 숫자 입니다" : "범위 밖의 숫자 입니다"
console.log(answer)


// for문 & while문
// for문과 배열은 찰떡 궁합!!
// for(시작값; 끝값; 증감식){반복할 내용}
// i++ = i+1의 줄임말, 존맛탱같은느낌ㅋㅋㅋ
for(let i = 1; i <= 10; i++) {
    console.log("누나!!!",i)
}

// 짝수만 프린트 해보기
for (let j = 0; j <= 10; j++) {
    if (j % 2 == 0){
        console.log(j + "는 짝수입니다")
    } else {}
}

// for문 안에 for문 쓰기 =? 이중 for문
// 구구단으로 만들어보기
for (let i = 1; i <=9; i++) {
    for(let j = 1; j <= 9; j ++) {
        console.log(i + "X" + j + "=" + i*j)
    }
}

// while문
let i = 11
while(i < 10){
    console.log("while문 실행",i)
    i++;
}