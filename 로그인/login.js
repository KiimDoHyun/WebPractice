idInput = document.getElementById("idInput");
pwInput = document.getElementById("pwInput");
btn = document.getElementById("okButton");
body = document.getElementById("body");
logoBox = document.getElementById("logoBox");

idLine = document.getElementById("idLine");
pwLine = document.getElementById("pwLine");

id = document.getElementById("id");
pw = document.getElementById("pw");


var isClicked = false;

//각 입력칸 위로 마우스가 올라갔을 때
idInput.addEventListener("mouseover", function () {
    idLine.style.backgroundColor = "#12ccff";
    idLine.style.width = "20vw";
    idLine.style.marginLeft = "5vw";

    id.style.marginLeft = "5vw";
    id.style.color = "#12ccff";

})

pwInput.addEventListener("mouseover", function () {
    pwLine.style.backgroundColor = "#12ccff";
    pwLine.style.width = "20vw";
    pwLine.style.marginLeft = "5vw";

    pw.style.marginLeft = "5vw";
    pw.style.color = "#12ccff";
})

// 각 요소에서 마우스가 벗어났을 때
idInput.addEventListener("mouseout", function () {
    if (idInput.value === "") {
        idLine.style.backgroundColor = "black";
        idLine.style.width = "10vw";
        idLine.style.marginLeft = "10vw";

        idInput.style.cursor = "blur"

        id.style.marginLeft = "10vw";
        id.style.top = "36vh";
        id.style.color = "black";
        id.style.fontSize = "15px"
    }
    else {

    }
})

pwInput.addEventListener("mouseout", function () {
    if (pwInput.value === "") {
        pwLine.style.backgroundColor = "black";
        pwLine.style.width = "10vw";
        pwLine.style.marginLeft = "10vw";

        pw.style.marginLeft = "10vw";
        pw.style.top = "51vh";
        pw.style.color = "black";
        pw.style.fontSize = "15px"
    }
    else {

    }
})

//-------------------------------------
//라벨을 input 위로 설정해서 해당 위치에 마우스가 올라가면 아무런 반응이 없는 오류 발생
//해결 : 각 라벨에도 동일한 이벤트를 부여
//각 입력칸 위로 마우스가 올라갔을 때
id.addEventListener("mouseover", function () {
    idLine.style.backgroundColor = "#12ccff";
    idLine.style.width = "20vw";
    idLine.style.marginLeft = "5vw";

    id.style.marginLeft = "5vw";
    id.style.color = "#12ccff";
})

pw.addEventListener("mouseover", function () {
    pwLine.style.backgroundColor = "#12ccff";
    pwLine.style.width = "20vw";
    pwLine.style.marginLeft = "5vw";

    pw.style.marginLeft = "5vw";
    pw.style.color = "#12ccff";
})

// 각 요소에서 마우스가 벗어났을 때
id.addEventListener("mouseout", function () {
    if (idInput.value === "") {
        idLine.style.backgroundColor = "black";
        idLine.style.width = "10vw";
        idLine.style.marginLeft = "10vw";

        id.style.marginLeft = "10vw";
        id.style.top = "21vh";
        id.style.color = "black";
    }
    else {

    }
})

pw.addEventListener("mouseout", function () {
    if (pwInput.value === "") {
        pwLine.style.backgroundColor = "black";
        pwLine.style.width = "10vw";
        pwLine.style.marginLeft = "10vw";

        pw.style.marginLeft = "10vw";
        pw.style.top = "36vh";
        pw.style.color = "black";
        pw.style.fontSize = "15px"
    }
    else {

    }
})
//-------------------------------------


//각 요소를 클릭했을때

idInput.addEventListener("click", function () {
    id.style.top = "30vh";
    id.style.fontSize = "25px";
})

pwInput.addEventListener("click", function () {
    pw.style.top = "45vh";
    pw.style.fontSize = "25px";
})


//버튼
okButton.addEventListener("click", function () {
    console.log(idInput.value);
    if (idInput.value === "" || pwInput.value === "") {
        alert("입력 에러");
    }
    else {
        alert("ID : " + idInput.value + "\nPW : " + pwInput.value);

        //입력값 보여주고나서 입력칸을 비우고 상태 초기화
        idInput.value = "";
        pwInput.value = "";

        idLine.style.backgroundColor = "black";
        idLine.style.width = "10vw";
        idLine.style.marginLeft = "10vw";

        idInput.style.cursor = "blur"

        id.style.marginLeft = "10vw";
        id.style.top = "21vh";
        id.style.color = "black";
        id.style.fontSize = "15px"

        pwLine.style.backgroundColor = "black";
        pwLine.style.width = "10vw";
        pwLine.style.marginLeft = "10vw";

        pw.style.marginLeft = "10vw";
        pw.style.top = "36vh";
        pw.style.color = "black";
        pw.style.fontSize = "15px"
    }
})

okButton.addEventListener("mouseover", function () {
    okButton.style.backgroundColor = "#12ccff";
})

okButton.addEventListener("mouseout", function () {
    okButton.style.backgroundColor = "#057BE8";
})


setInterval(
    function () {
        var r = Math.random() * 256;
        var g = Math.random() * 256;
        var b = 256;
        logoBox.style.borderTop = "5px solid rgb(" + r + "," + g + "," + b + ")";

        logoBox.style.borderRight = "5px solid rgb(" + r + "," + g + "," + b + ")";

        logoBox.style.borderBottom = "5px solid rgb(" + r + "," + g + "," + b + ")";

        logoBox.style.borderLeft = "5px solid rgb(" + r + "," + g + "," + b + ")";

        logo
    }, 1000)