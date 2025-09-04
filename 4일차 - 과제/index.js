// 문제1
function plusNumber() {
    let sum = 0
    for(let i=1;i<=100;i++){
        sum+=i
    }
    alert(sum)
}

// 문제2
function checkNumber() {
    let result = "";

    for (let i = 1; i <= 100; i += 2) {
        result += i + ", ";
    }

    alert(result.slice(0, -2)); 
}

// 문제3
function check369() {
    const num = Number(document.getElementById("numberInput").value);
    
    if (!num || num < 1 || num > 50) {
        alert("1~50 사이의 숫자를 입력해주세요.");
        return;
    }
    
    let strNum = String(num);
    let result = 0;
    
    for (let i of strNum) {
        if (i === "3" || i === "6" || i === "9") {
            result++;
        }
    }
    
    if (result === 0) {
        alert(num);
    } else {
        alert("짝".repeat(result));
    }
}


// 문제4
function checkPrime() {
    const primeNum = Number(document.getElementById("primeInput").value);
    
    let isPrime = "소수가 아닙니다";

    if(primeNum <= 1 ) {
        alert(primeNum + "은 소수가 아닙니다")
        return;

    } else {
        for(let i=2; i < primeNum; i++){
            if(primeNum % 1 == 0){
                isPrime =  "소수 입니다" 
            } 
        }
    }
    alert(primeNum + "은 " + isPrime)
}



function toggleSlide(num) {
    const allSlides = document.querySelectorAll(".slideWrap");

    allSlides.forEach((slide, index) => {
        if (index === num - 1) {
        // 클릭한 버튼에 해당하는 슬라이드 토글
        slide.classList.toggle("open");
        } else {
        // 다른 슬라이드는 무조건 닫기
        slide.classList.remove("open");
        }
    });
}