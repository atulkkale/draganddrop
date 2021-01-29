// var taskone = document.getElementById("task1");
// var tasktwo = document.getElementById("task2");
// var taskthree = document.getElementById("task3");
// var taskfour = document.getElementById("task4");
// var taskfive = document.getElementById("task5");

function Newelement(id){ // This is constructor function to make object of elements by it's id.
  this.taskelement = document.getElementById(id);
}

var taskone = new Newelement("task1"); // Make the objects of elements
var tasktwo = new Newelement("task2");
var taskthree = new Newelement("task3");
var taskfour = new Newelement("task4");
var taskfive = new Newelement("task5");

var high = document.getElementById("high"); // Get elements in that task will be going to store.
var medium = document.getElementById("medium");
var low = document.getElementById("low");

var allelements = [taskone.taskelement,tasktwo.taskelement,taskthree.taskelement,taskfour.taskelement,taskfive.taskelement]; // Stored all object's property in array.
var proritysecs = [high,medium,low]; // Here we store all priority sections

allelements.forEach(drag) // Loop each element and pass element to drag function.

function drag(item,index){
  allelements[index].onmousedown = moveelement; // If onmousedown event happen on any element, for that element moveelement function triggers.
}

function moveelement(e){ // This function makes element movable and follow cursor.
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
        proritysecs[index].onmouseenter = function placeelement(){ // This function makes element placed an element inside priority sections based on their position.
          // alert(proritysecs[index].value)

        }
      }
    
  

    }
  }
}

