let timer=1 , ID;


function printMessage(){
document.getElementById('message').innerHTML=timer + ' seconds';
timer++
}

function startcounter(){
  ID=window.setInterval(printMessage,1000)
}

function stopcounter(){
  window.clearInterval(ID)
}

function resetcounter(){
  window.clearInterval(ID)
  timer=0
  document.getElementById('message').innerHTML=timer + ' seconds';
  
}