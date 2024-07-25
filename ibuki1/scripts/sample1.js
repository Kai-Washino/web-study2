const button = document.querySelector(".button_1");

//  button.addEventListener("click", updateName);
button.addEventListener("click", createParagraph);

function updateName() {
    const name = prompt("名前を入力して下さい");
    button.textContent = `Player 1: ${name}`;
}

function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "ボタンが押されました!";
    document.body.appendChild(para);
}