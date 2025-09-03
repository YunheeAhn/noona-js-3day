function checkNumber() {
    const num = Number(document.getElementById("numberInput").value);

    if (num == " ") {
        alert("숫자를 입력해주세요");
    }  else if (num === 0) {
        alert("0입니다.");
    } else if (num > 0) {
        alert("양수입니다.");
    } else {
        alert("음수입니다.");
    }
}

function checkScore() {
    const score = Number(document.getElementById("scoreInput").value);

    if (score == " ") {
        alert("점수를 입력해주세요.");
    }  else if (score >= 90) {
        alert("grade = A");
    } else if (score >= 80) {
        alert("grade = B");
    } else if (score >= 70) {
        alert("grade = C");
    } else if (score >= 60) {
        alert("grade = D");
    } else {
        alert("grade = F");
    }
}


function checkResult() {
    const knowsHtml = document.getElementById("html").checked;
    const knowsCss = document.getElementById("css").checked;
    const knowsJS = document.getElementById("js").checked;
    const knowsReact = document.getElementById("react").checked;

    // 아무것도 체크 안 한 경우
    if (!knowsJS && !knowsReact && !knowsHtml && !knowsCss) {
        alert("탈락");
        return;
    }

    if (knowsJS && knowsReact) {
        alert("합격!");
    } else if (knowsJS || knowsReact) {
        alert("예비");
    } else if (knowsHtml || knowsCss) {
        
    } else {
        alert("탈락"); 
    }
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