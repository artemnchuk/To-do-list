let navLinks = document.getElementById("navLinks");
let faBars = document.getElementById("faBars");
let faTimes = document.getElementById("faTimes");
function showMenu() {
  navLinks.style.right = "0";
  faBars.style.display = "none";
  faTimes.style.display = "block";
}
function hideMenu() {
  navLinks.style.right = "-40vw";
  faTimes.style.display = "none";
  faBars.style.display = "block";
}
/*---------To-do list ----------*/
inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
const listContainer2 = document.getElementById("listContainer2");
const listDiv = document.getElementById("listDiv");
const toDoSection = document.getElementById("toDoSection");

let i = 1;
function addUlBox() {
        if (inputBox.value === "") {
          alert("You must write something!");
        } else {
          let li = document.createElement("li");
          li.innerHTML = inputBox.value.charAt(0).toUpperCase()+inputBox.value.slice(1);
          listContainer2.appendChild(li);
          let span = document.createElement("span");
          span.innerHTML= "\u00d7";
          li.appendChild(span);
        }
        inputBox.value = "";
        saveData2();
  }
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value.charAt(0).toUpperCase()+inputBox.value.slice(1);
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML= "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showList();
//List 2
listContainer2.addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
      e.target.classList.toggle("checked");
      saveData2();
  }
  else if(e.target.tagName==="SPAN"){
      e.target.parentElement.remove();
      saveData2();
  }
},false);
function saveData2(){
  localStorage.setItem("data2",listContainer2.innerHTML);
}
function showList2(){
  listContainer2.innerHTML=localStorage.getItem("data2");
}
showList2();
      // let span = document.createElement("span");
      // span.innerHTML= "\u00d7";
      // li.appendChild(span);
      // i+=0.5;//30vw
      // inputBox.style.width="60vw";
      // listContainer.style.fontSize = "30px";
      // let temp = Number(inputBox.style.width.substring(0,2));
      // let tempF = Number(listContainer.style.fontSize.substring(0,2));
      // listContainer.style.width = `${temp/i}vw`;
      // listContainer.style.fontSize = `${tempF/i}px`;
      // console.log(tempF);