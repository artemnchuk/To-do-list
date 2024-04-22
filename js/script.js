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
const listDiv = document.getElementById("listDiv");

// let i = 1;
// function addUlBox() {
//       i+=0.5;//30vw
//       inputBox.style.width="60vw"
//       let temp = Number(inputBox.style.width.substring(0,2));
//       listContainer.style.width = `${temp/i}vw`;
//       console.log(i);
//   }
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
