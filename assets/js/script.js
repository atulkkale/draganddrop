// var taskone = document.getElementById("task1");
// var tasktwo = document.getElementById("task2");
// var taskthree = document.getElementById("task3");
// var taskfour = document.getElementById("task4");
// var taskfive = document.getElementById("task5");

function Newelement(id){ // This is constructor function to make object of elements by it's id.
  this.taskelement = document.getElementById(id);
}

var taskone = new Newelement("task1"); // Make the objects of elements.
var tasktwo = new Newelement("task2");
var taskthree = new Newelement("task3");
var taskfour = new Newelement("task4");
var taskfive = new Newelement("task5");

var high = document.getElementById("high"); // Get elements in that task will be going to store.
var medium = document.getElementById("medium");
var low = document.getElementById("low");

var tasklist = document.getElementById("tasklist"); // Store all task parent child ul.

var allelements = [taskone.taskelement,tasktwo.taskelement,taskthree.taskelement,taskfour.taskelement,taskfive.taskelement]; // Stored all object's property in array.
var proritysecs = [high,medium,low]; // Here we store all priority sections.
var count = 1;

var start = document.getElementById("start");
start.onclick = startfun;

function startfun(){
  if(count == 1){
    start.textContent = "Start";
    count = 2;

    allelements.forEach(drag) // Loop each element and pass element to drag function.

    function drag(item,index){
      allelements[index].onmousedown = moveelement; // If onmousedown event happen on any element, for that element moveelement function triggers.
    }

    function moveelement(e){ // This function makes element movable and follow cursor.
      if(count != 1){
        return false;
      }
      var mouseconunt = 1; // This variable identify the element is grabed or not for letter use.
      var selecteditem = e.target;
      selecteditem.style.position = "fixed";
      selecteditem.style.zIndex = 100;
      document.body.onmousemove = function move(e){
        var positionx = e.clientX - 50;
        var positiony = e.clientY - 30;

        // console.log(positionx);
        // console.log(positiony);
        
        selecteditem.style.left = positionx + "px";
        selecteditem.style.top = positiony + "px";
        selecteditem.onmouseup = function freeelement(){ // When we relese the click then task element will placed inside priority sections or placed on it's initial value.
          selecteditem.style.position = "static";
          
          proritysecs.forEach(drop) // Loop each element and pass element to drop function.
        
          function drop(item,index){
            var mouseinsertcount;
            
            proritysecs[index].onmouseover = function placeelement(){ // This function makes element placed an element inside priority sections based on their position.
              mouseinsertcount = 1; // This variable is for identify the position of task. Whether it's inside the priority sections or not.
              if(mouseconunt == 1 && mouseinsertcount == 1){ // Both variable is qual to 1 means that task is selected and drop inside priority sections.
                proritysecs[index].appendChild(selecteditem)
                selecteditem.classList.add("afterinside");
                mouseconunt = 0;
                mouseinsertcount = 0;
              }
            }
            proritysecs[index].onmouseout = function confirmplacement(){
              mouseinsertcount = 0;
              if(mouseconunt == 1 && mouseinsertcount == 0){ // Both variable is qual to 1 means that task is selected and drop inside priority sections.
                tasklist.appendChild(selecteditem)
                selecteditem.classList.remove("afterinside");
                mouseconunt = 0;
                mouseinsertcount = 0;
              }
            } 
          }
        }
      }
    }

  }else{
    start.textContent = "Stop";
    count = 1;
  }
  
}

