const head =  document.getElementById("headDiv");
const player =  document.getElementById("players");
const startBtn =  document.getElementById("startBtn");
const addPlayerBtn =  document.getElementById("addplayer");
const playerForm  = document.getElementById("addplayerForm")
const playerList = document.getElementById("playersList")
let players = [];
let count = 1; 
if(startBtn!=null)startBtn.addEventListener("click",(e)=>{
    head.style.display ="none"
    player.style.display ="flex" 
})
if(addPlayerBtn!=null)addPlayerBtn.addEventListener("click",(e)=>{
   let name =  prompt("Enter Player Name");
   let crnt =  new Player({name , id : count})
   players.push(crnt);
   let h2 = document.createElement("h2");
   h2.innerText = count ;
   let h3 = document.createElement("h3");
   h2.innerText = name ;
   count++
   playerList.append(h2)
})
window.addEventListener('unload', function(event) {
    event.preventDefault();
    this.alert("Are You want to quit")
});
