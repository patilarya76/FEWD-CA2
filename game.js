//start

for(var i=0;i<20;i++){
    document.getElementById("game").innerHTML=document.getElementById("game").innerHTML+"<div><div id='clickableDiv' class='1'></div><div class='2'></div><div class='3'></div><div class='4'></div><div class='5'></div><div class='6'></div><div class='7'></div><div class='8'></div><div class='9'></div><div class='10'></div></div>"
  }
  
  
  var x=10;
  var length=10;
  var score=0;
  var s=0;
    
  //calling the function
  function start(){
      fill_box(x,length);
      move(x,length,s);
      document.getElementById("start").removeAttribute("onclick");
  }
  
  //implementation 
  function fill_box(row,length) {
  
    for(var i=0;i<length;i++){
  
        document.getElementsByClassName(row.toString())[i].style.backgroundColor='firebrick';
      
    }
    
  }
  
  // move of block functionality
  
  var id;
  var turn ='forward';
  function move(row,length,s){
  
    id=setInterval(() => {
      if(length<20 && turn=='forward'){
        document.getElementsByClassName(row.toString())[length].style.backgroundColor='firebrick';
        length++;
        document.getElementsByClassName(row.toString())[s].style.backgroundColor='';
        s++;
      }
      else if(length==20 ){
        length=s-1
        s=19;
        turn='backward';
      }
  
      else if(length<20 && turn=='backward'){
        document.getElementsByClassName(row.toString())[length].style.backgroundColor='firebrick';
        length--;
        document.getElementsByClassName(row.toString())[s].style.backgroundColor='';
        s--;
        if(length==-1){
          length=s+1;
          s=0;
          turn='forward';
        }
      }
    
    }, 100);
  }
  

  // adding a onclick to play game
  
  document.getElementById("clickableDiv").addEventListener("click", () =>{
    
        x=x-1;
        if(x==0){
         
          location.href="./modal.html"
        }
        s=0;

        turn='forward';

        //initailizing the length of the  variable
        var length=0;
        clearInterval(id);
        cutting_extra(x+1);
        start();
    
  });
  

  //cutting extra block
  function cutting_extra(block){
    var sum=0;
    if(block==10){
        sum=10;
    }
    else{
      for(var i=0;i<=19;i++){
    
      elem1=document.getElementsByClassName(block.toString())[i];
      elem2=document.getElementsByClassName((block+1).toString())[i];
    // Comparing the background color of two elements
      if(window.getComputedStyle(elem1).getPropertyValue("background-color")!=window.getComputedStyle(elem2).getPropertyValue("background-color")){
    // If the background color of elem2 is transparent, set elem1's background color to elem2's background color

        if(window.getComputedStyle(elem2).getPropertyValue("background-color")=='rgba(0, 0, 0, 0)'){
  
          elem1.style.backgroundColor=elem2.style.backgroundColor;
  
        }
    }
    else {
      // If the background color of elem2 is not transparent, incrementing the sum
      if(window.getComputedStyle(elem2).getPropertyValue("background-color")!='rgba(0, 0, 0, 0)')
      sum++;
    }
    }
  }
  
   // Check for winning condition
   if (length === 20) {
    gameOver = true;
    document.getElementById("screen").innerHTML = "You won!";
    openModal();
    clearInterval(id);
    return;
}

// Check for losing condition
if (length === 0) {
    gameOver = true;
    setTimeout(() => {
        localStorage.setItem("score", score);
        document.getElementById("screen").innerHTML = "You lost!";
        location.href = "./modal.html";
    }, 100);
    return;
}
  //score
  length=sum;
  if(length!=0){
    score=score+10;
    document.getElementById("screen").innerHTML=score;
  }
  else{
    setTimeout(() => {
      localStorage.setItem("score",score)
     location.href="./modal.html"
    
    }, 100);
   
  }
  
  }


// adding a backgroundSound
const backgroundSound = new Audio("./assets/background sound.mp3");
backgroundSound.play()

backgroundSound.loop = true;   

