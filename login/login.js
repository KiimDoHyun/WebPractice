idInput = document.getElementById("idInput");
pwInput = document.getElementById("pwInput");
btn = document.getElementById("okButton");
body = document.getElementById("body");
logoBox = document.getElementById("logoBox");

idLine = document.getElementById("idLine");
pwLine = document.getElementById("pwLine");

id = document.getElementById("id");
pw = document.getElementById("pw");

btnShow = document.getElementById("btnShow");
btnHide = document.getElementById("btnHide");

//각 입력칸 위로 마우스가 올라갔을 때
idInput.addEventListener("mouseover", function () {
    idLine.style.backgroundColor = "#12ccff";
    idLine.style.width = "300px";
    idLine.style.left = "85px";

    id.style.left = "85px";
    id.style.color = "#12ccff";
})

pwInput.addEventListener("mouseover", function () {
    pwLine.style.backgroundColor = "#12ccff";
    pwLine.style.width = "300px";
    pwLine.style.left = "85px";

    pw.style.left = "85px";
    pw.style.color = "#12ccff";
})

// 각 요소에서 마우스가 벗어났을 때
idInput.addEventListener("mouseout", function () {
    if (idInput.value === "") {
        idLine.style.backgroundColor = "black";
        idLine.style.width = "200px";
        idLine.style.left = "135px";

        id.style.left = "135px";
        id.style.top = "200px";
        id.style.color = "black";
        id.style.fontSize = "15px";

        idInput.style.width = "200px";
        idInput.style.left = "135px";
    }
    else {

    }
})

pwInput.addEventListener("mouseout", function () {
    if (pwInput.value === "") {
        pwLine.style.backgroundColor = "black";
        pwLine.style.width = "200px";
        pwLine.style.left = "135px";

        pw.style.left = "135px";
        pw.style.top = "350px";
        pw.style.color = "black";
        pw.style.fontSize = "15px";

        pwInput.style.width = "200px";
        pwInput.style.left = "135px";
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
    idLine.style.width = "300px";
    idLine.style.left = "85px";

    id.style.left = "85px";
    id.style.color = "#12ccff";

})

pw.addEventListener("mouseover", function () {
    pwLine.style.backgroundColor = "#12ccff";
    pwLine.style.width = "300px";
    pwLine.style.left = "85px";

    pw.style.left = "85px";
    pw.style.color = "#12ccff";
})

// 각 요소에서 마우스가 벗어났을 때
id.addEventListener("mouseout", function () {
    if (idInput.value === "") {
        idLine.style.backgroundColor = "black";
        idLine.style.width = "200px";
        idLine.style.left = "135px";

        id.style.left = "135px";
        id.style.top = "200px";
        id.style.color = "black";
        id.style.fontSize = "15px";

        idInput.style.width = "200px";
        idInput.style.left = "135px";
    }
    else {

    }
})

pw.addEventListener("mouseout", function () {
    if (pwInput.value === "") {
        pwLine.style.backgroundColor = "black";
        pwLine.style.width = "200px";
        pwLine.style.left = "135px";

        pw.style.left = "135px";
        pw.style.top = "350px";
        pw.style.color = "black";
        pw.style.fontSize = "15px";

        pwInput.style.width = "200px";
        pwInput.style.left = "135px";
    }
    else {

    }
})
//-------------------------------------


//각 요소를 클릭했을때

idInput.addEventListener("click", function () {
    id.style.top = "160px";
    id.style.fontSize = "25px";

    idInput.style.width = "290px"
    idInput.style.left = "90px"
})

pwInput.addEventListener("click", function () {
    pw.style.top = "310px";
    pw.style.fontSize = "25px";

    pwInput.style.width = "280px"
    pwInput.style.left = "90px"
})


//로그인 확인 버튼
okButton.addEventListener("click", function () {
    //로그인 성공
    if (idInput.value === "김도현" && pwInput.value === "20160140") {
        alert("성공")
    }

    //입력정보가 틀렸거나 빈 경우
    else {

        //id는 입력하고 pw는 빈 경우
        if (!(idInput.value === "") && pwInput.value == "") {
            pw.style.color = "red";
            pw.style.left = "115px";
            pwLine.style.backgroundColor = "red";

            setTimeout(function () {
                pw.style.left = "150px";
            }, 150);
            setTimeout(function () {
                pw.style.color = "black";
                pwLine.style.backgroundColor = "black";
                pw.style.left = "135px";
            }, 300);
        }

        //pw는 입력하고 id는 빈 경우
        else if (idInput.value === "" && !(pwInput.value == "")) {
            id.style.color = "red";
            id.style.left = "120px";
            idLine.style.backgroundColor = "red";
            setTimeout(function () {
                id.style.left = "145px";
            }, 150);
            setTimeout(function () {
                id.style.color = "black";
                idLine.style.backgroundColor = "black";
                id.style.left = "135px";
            }, 300);
        }

        //id, pw둘다 빈 경우
        else if (idInput.value === "" || pwInput.value === "") {
            id.style.color = "red";
            id.style.left = "120px";
            idLine.style.backgroundColor = "red";

            pw.style.color = "red";
            pw.style.left = "115px";
            pwLine.style.backgroundColor = "red";

            setTimeout(function () {
                id.style.left = "145px";
                pw.style.left = "150px";
            }, 150);
            setTimeout(function () {
                id.style.color = "black";
                idLine.style.backgroundColor = "black";
                id.style.left = "135px";

                pw.style.color = "black";
                pwLine.style.backgroundColor = "black";
                pw.style.left = "135px";
            }, 300);
        }

        //둘다 입력했는데 id가 틀린경우
        else if (!(idInput.value === "김도현")) {
            id.style.color = "red";
            id.style.left = "60px";
            idLine.style.backgroundColor = "red";
            setTimeout(function () {
                id.style.left = "110px";
            }, 150);
            setTimeout(function () {
                id.style.color = "#12ccff";
                idLine.style.backgroundColor = "#12ccff";
                id.style.left = "85px";
            }, 300);
        }

        //둘다 입력했는데 pw가 틀린 경우
        else if (!(pwInput.value === "20160140")) {
            pw.style.color = "red";
            pw.style.left = "60px";
            pwLine.style.backgroundColor = "red";
            setTimeout(function () {
                pw.style.left = "110px";
            }, 150);
            setTimeout(function () {
                pw.style.color = "#12ccff";
                pwLine.style.backgroundColor = "#12ccff";
                pw.style.left = "85px";
            }, 300);
        }
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