const gameIcons = document.querySelectorAll("button");

const gameOptions = ["rock", "papers", "scissors"];

let humanSelect = false;

gameIcons.forEach((button) => {
  button.addEventListener("click", () => {
    const cs = document.querySelector(".cs");
    const result = document.querySelector(".result");
    result.textContent = "";
    cs.innerHTML = "";
    let imgUrl = "./images/";
    humanSelect = true;
    console.log(button.value);
    const human = button.value;
    if (humanSelect) {
      const index = Math.floor(Math.random() * gameOptions.length);
      const computer = gameOptions[index];
      imgUrl += computer;
      imgUrl += ".jpg";
      console.log(imgUrl);
      const img = document.createElement("img");
      img.setAttribute("src", imgUrl);
      img.style.width = "60px";
      img.style.height = "60px";
      cs.appendChild(img);
      let res = "";
      if (human === computer) res = "It's a draw";
      else if (
        (human === "rock" && computer === "papers") ||
        (human === "papers" && computer === "scissors") ||
        (human === "scissors" && computer === "rock")
      ) {
        res = "Computer Wins";
      } else {
        res = "Human Wins";
      }

      result.textContent = res;
    }
  });
});
