var taskone = document.getElementById("task1");
var tasktwo = document.getElementById("task2");
var taskthree = document.getElementById("task3");
var taskfour = document.getElementById("task4");
var taskfive = document.getElementById("task5");

var allelements = [taskone,tasktwo,taskthree,taskfour,taskfive];
allelements.forEach(myfun)

function myfun(item,index){
  item.onclick = ale
}

function ale(item){
  alert(item)
}



taskone.onmousedown = moveelement;

function moveelement(){
  taskone.style.position = "fixed";
  taskone.style.zIndex = 100;
  document.body.onmousemove = function move(e){
  var positionx = e.clientX - 50;
  var positiony = e.clientY - 30;
  console.log(positionx);
  console.log(positiony);
  
  taskone.style.left = positionx + "px";
  taskone.style.top = positiony + "px";
  taskone.onmouseup = function freeelement(){
    taskone.style.position = "static";
  }
  document.body.onmouseup = function freeelement(){
    taskone.style.position = "static";
  }
  }
}

