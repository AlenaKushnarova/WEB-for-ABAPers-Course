document.getElementById('btn1').addEventListener("click", function () {
    window.open('http://google.com');
});


document.getElementById('btn2').addEventListener("click", removeItem);

function removeItem() {
    document.getElementById('cont').innerHTML = "";
}

document.getElementById('btn3').addEventListener("click", function () {
    window.open('http://127.0.0.1:5500/HW2/Task2/index.html');
});
