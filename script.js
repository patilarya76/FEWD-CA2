

const button=document.getElementById("button");
button.onclick=()=>{
  var nickName = document.getElementById("nickname").value
  var playerName = document.getElementById("playerName").value
  localStorage.setItem("nickname",nickName)
  localStorage.setItem("playername",playerName)
  window.location.href="instruction.html";
}



