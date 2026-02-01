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

heartStage.onclick = () => {
  heartBeat.play();
  bgMusic.play();
  heartStage.classList.add("hidden");
  question.classList.remove("hidden");
};

function yes(){
  question.classList.add("hidden");
  please.classList.add("hidden");
  choose.classList.remove("hidden");

  confettiBurst();

  setTimeout(()=>{
    choose.classList.add("hidden");
    letter.classList.remove("hidden");
    typeLetter();
    rain("🌸","flowers");
    rain("💕","hearts");
  },2000);

  setTimeout(()=>{
    photos.classList.remove("hidden");
    surprise.classList.remove("hidden");
  },8000);
}

function no(){
  question.classList.add("hidden");
  please.classList.remove("hidden");
}

function typeLetter(){
  let i=0,j=0;
  typedText.innerHTML="";
  const interval=setInterval(()=>{
    if(i<LETTER.length){
      if(j<LETTER[i].length){
        typedText.innerHTML+=LETTER[i][j++];
      }else{
        typedText.innerHTML+="<br><br>";
        i++; j=0;
      }
    }else clearInterval(interval);
  },35);
}

function revealFuture(){
  surprise.classList.add("hidden");
  future.classList.remove("hidden");
  setTimeout(()=>ending.classList.remove("hidden"),2000);
}

function rain(emoji,id){
  setInterval(()=>{
    const el=document.createElement("div");
    el.textContent=emoji;
    el.style.left=Math.random()*100+"vw";
    el.style.fontSize=16+Math.random()*20+"px";
    el.style.animationDuration=5+Math.random()*5+"s";
    document.getElementById(id).appendChild(el);
    setTimeout(()=>el.remove(),10000);
  },600);
}

function confettiBurst(){
  for(let i=0;i<20;i++){
    const el=document.createElement("div");
    el.textContent="🎉";
    el.style.left=Math.random()*100+"vw";
    el.style.fontSize=18+Math.random()*16+"px";
    el.style.animationDuration="4s";
    document.getElementById("confetti").appendChild(el);
    setTimeout(()=>el.remove(),6000);
  }
}
