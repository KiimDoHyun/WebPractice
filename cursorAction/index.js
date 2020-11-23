box = document.getElementById("box");
line = document.getElementById("line");
dot = document.getElementById("dot");
btnReset = document.getElementById("reset");

// client : 현재 문서기준 위치
// offset : 현재 오브젝트 기준 위치
// screen : 현재 모니터 기준 위치

var isClicked = false;

function coords(e) {
    console.log(e.clientX);
}

dot.addEventListener("mousedown", function (e) {
    isClicked = true;
})

dot.addEventListener("mousemove", function (e) {
    if (isClicked) {
        console.log(e.clientX);
        dot.style.top = e.clientY - 25 + "px";
        dot.style.left = e.clientX - 25 + "px";

        line.style.top = e.clientY - 2.5 + "px";
        line.style.left = e.clientX - 200 - 18 + "px";

        box.style.height = e.clientY - 5 + "px";
        box.style.width = e.clientX - 200 - 25 + "px";
    }
})

dot.addEventListener("mouseup", function (e) {
    isClicked = false;
})


function main() {
    coords;
}

btnReset.addEventListener("click", () => {
    line.style.top = "203px";
    line.style.left = "208px";

    dot.style.top = "178px";
    dot.style.left = "400px";

    box.style.height = "200px";
    box.style.width = "200px";
})