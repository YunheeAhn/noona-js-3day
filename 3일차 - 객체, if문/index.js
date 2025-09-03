 // 객체 표현
let patient = {
    // 키 : 값
    name : 'ayh',
    age : 17,
    disease : "cold"
}

console.log(patient)
console.log(patient.name)
console.log(patient.age)

console.log(patient.disease)
console.log(patient["disease"])

patient.name = "jks"
console.log(patient.name) // ayh -> jks로 변경됨
console.log(patient)// ayh -> jks로 변경됨


// 객체(object) 타입을 배열(array)에 넣기
let patientList = [
    {name : "himin", age : 13},
    {name : "Quri", age : 14},
    {name : "Daivd", age : 19}
]

console.log("첫 번째 환자는 : ",patientList[0]) //첫 번째 환자는 :  {name: 'himin', age: 13}
console.log("첫 번째 환자의 이름은? ",patientList[0].name) //himin
console.log("두 번째 환자의 나이는? ",patientList[1]["age"]) //himin

// 객체와 객체 지향형 프로그래밍은 다른 개념
// 객체라는 자료형, 객체 지향형은 프로그래밍 하는 방식



// if문
// if(조건){참인경우의 답 else {거짓인경우의 답}}
// 선행 조건에서 참이 될 경우 후행 조건이 참이어도 후행조건의 답은 프린트 되지 않는다

if(true){ //조건이 참인 경우
    console.log("조건은 참입니다.")
    if(true) {
        console.log("추가조건 넣기 가능")
    }
}else { //조건이 거짓인 경우
    console.log("조건은 거짓입니다.")
}

