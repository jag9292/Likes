var likes = 0;
var countElement = document.querySelector("#likes");

function add() {
    likes++;
    countElement.innerText = likes + " like(s)";
}