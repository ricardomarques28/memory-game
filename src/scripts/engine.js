const emojis = [
  "./src/img/Tanjiro01.png",
  "./src/img/Tanjiro01.png",
  "./src/img/Tanjiro02.png",
  "./src/img/Tanjiro02.png",
  "./src/img/Inosuke.png",
  "./src/img/Inosuke.png",
  "./src/img/Nezuko.png",
  "./src/img/Nezuko.png",
  "./src/img/Rengoku.png",
  "./src/img/Rengoku.png",
  "./src/img/Shinobu.png",
  "./src/img/Shinobu.png",
  "./src/img/Tomioka.png",
  "./src/img/Tomioka.png",
  "./src/img/Zenitsu.png",
  "./src/img/Zenitsu.png",
];

let openCards = [];
let shuffleEmmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  let img = document.createElement("img");
  img.src = emojis[i];
  img.alt = "Imagem do jogo";
  box.appendChild(img);
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }
  if (openCards.length == 2) {
    setTimeout(checkMath, 500);
  }
}

function checkMath() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }
  openCards = [];
  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert(" 🏆 Parabéns! Você venceu! 🎉");
  }
}
