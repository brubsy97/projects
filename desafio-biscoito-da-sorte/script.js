const btnInitial = document.querySelector("#btnInitial")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const phrases = document.querySelector(".phrases");

const phrasesOfCookies = [
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A persistência é o caminho do êxito.",
    "Acredite em você mesmo e tudo será possível.",
    "O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.",
    "Seja a mudança que você deseja ver no mundo.",
    "Quanto maior a dificuldade, maior a glória.",
    "A melhor maneira de prever o futuro é criá-lo.",
    "Quem olha para fora sonha; quem olha para dentro desperta.",
    "Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.",
    "O segredo do sucesso é a constância no objetivo."
];
let lastRandomIndex = 1

btnInitial.addEventListener("click", handleCookieClick);
btnReset.addEventListener("click", handleCookieResetClick);

function handleCookieClick() {
    toggleScreen()

    let phrasesCookieValue = Math.floor(Math.random() * phrasesOfCookies.length)
    const phraseSelected = phrasesOfCookies[phrasesCookieValue]

    screen2.querySelector("p").innerText = phraseSelected
    console.log(phraseSelected)
}

function handleCookieResetClick() {
    toggleScreen()
    lastRandomIndex = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}