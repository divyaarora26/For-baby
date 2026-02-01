const heartStage = document.getElementById("heartStage");
const question = document.getElementById("question");
const please = document.getElementById("please");
const choose = document.getElementById("choose");
const letter = document.getElementById("letter");
const typedText = document.getElementById("typedText");
const photos = document.getElementById("photos");
const surprise = document.getElementById("surprise");
const future = document.getElementById("future");
const ending = document.getElementById("ending");

const bgMusic = document.getElementById("bgMusic");
const heartBeat = document.getElementById("heartBeat");

const LETTER = [
  "Dear Cherry 🍒",
  "",
  "I love you so much more than i could ever fully explain and being with you is one of the greatest gifts in my life.",
  "You mean everything to me.",
  "You are incredibly beautiful and absolutely gorgeous inside and out.",
  "Love your smile, your eyes and the whole you baby.",
  "",
  "Lucky to call you mine.",
  "I love you, always and forever ♾️",
  "",
  "Your Daddy"
];

let currentLine = 0;
let currentChar = 0;

// PHASE 1 → HEART
heartStage.onclick = () => {
  heartBeat.play();
  bgMusic.play();
  heartStage.classList.add("hidden");
  question.classList.remove("hidden");
};

// PHASE 2 → QUESTION
function yes() {
  question.classList.add("hidden");
  please.classList.add("hidden");
  choose.classList.remove("hidden");
  confettiBurst();

  setTimeout(() => {
    choose.classList.add("hidden");
    showLetter();
  }, 2000);
}

function no() {
  question.classList.add("hidden");
  please.classList.remove("hidden");
}

// PHASE 4 → LETTER
function showLetter() {
  letter.classList.remove("hidden");
  rain("🌸", "flowers");
  rain("💕", "hearts");
  typeLetter();
}

function typeLetter() {
  typedText.innerHTML = "";
  currentLine = 0;
  currentChar = 0;

  const typing = setInterval(() => {
    if (currentLine < LETTER.length) {
      if (currentChar < LETTER[currentLine].length) {
        typedText.innerHTML += LETTER[currentLine][currentChar];
        currentChar++;
      } else {
        typedText.innerHTML += "<br><br>";
        currentLine++;
        currentChar = 0;
      }
    } else {
      clearInterval(typing);
      setTimeout(showPhotosOneByOne, 2500);
    }
  }, 35);
}

// PHASE 5 → PHOTOS (ONE BY ONE)
function showPhotosOneByOne() {
  photos.classList.remove("hidden");
  const figures = photos.querySelectorAll("figure");
  figures.forEach(f => f.style.opacity = "0");

  let i = 0;
  const reveal = setInterval(() => {
    if (i < figures.length) {
      figures[i].style.opacity = "1";
      i++;
    } else {
      clearInterval(reveal);
      setTimeout(() => {
        surprise.classList.remove("hidden");
      }, 2000);
    }
  }, 1200);
}

// PHASE 6 → SURPRISE
function revealFuture() {
  surprise.classList.add("hidden");
  future.classList.remove("hidden");

  setTimeout(() => {
    ending.classList.remove("hidden");
  }, 2500);
}

// EFFECTS
function rain(emoji, id) {
  setInterval(() => {
    const el = document.createElement("div");
    el.textContent = emoji;
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = 16 + Math.random() * 20 + "px";
    el.style.animationDuration = 6 + Math.random() * 4 + "s";
    document.getElementById(id).appendChild(el);
    setTimeout(() => el.remove(), 10000);
  }, 700);
}

function confettiBurst() {
  for (let i = 0; i < 20; i++) {
    const el = document.createElement("div");
    el.textContent = "🎉";
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = 18 + Math.random() * 16 + "px";
    el.style.animationDuration = "4s";
    document.getElementById("confetti").appendChild(el);
    setTimeout(() => el.remove(), 6000);
  }
}
