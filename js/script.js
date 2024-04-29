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
const toDoInput = document.getElementById("toDoInput");
const toDoSection= document.getElementById("toDoSection");
let OnlyList= document.createElement("div");
OnlyList.className="OnlyList";

let addButton = document.createElement('button');
addButton.className="addButton";
addButton.style.cssText = 'display:block;margin: 0 auto;';
let i = document.createElement("i");
addButton.appendChild(i);
i.className="fa fa-folder-plus";
i.style.cssText = 'color: white;';
addButton.addEventListener('click', createToDoList);
toDoSection.appendChild(addButton);

 
function saveData(){
  localStorage.setItem("data",OnlyList.innerHTML);
}
function showList(){
  OnlyList.innerHTML=localStorage.getItem("data");
}
showList();

function createToDoList() {
  let divElement = document.createElement('div');
  divElement.className="listDiv";

  let inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'text');
  inputElement.setAttribute('placeholder', 'Add a new task...');
  inputElement.className="inputBox";

  let ulElement = document.createElement('ul');
  ulElement.className="listContainer";

  divElement.appendChild(inputElement);
  divElement.appendChild(ulElement);
  toDoSection.appendChild(OnlyList);
  OnlyList.appendChild(divElement);

  inputElement.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          let task = inputElement.value.trim();
          if (task !== '') {
              let liElement = document.createElement('li');
              liElement.textContent = task;
              ulElement.appendChild(liElement);
              inputElement.value = '';
              saveData();
          };  saveData();
      }
  });
}
showList();
  let docTitle = document.title;
  let faviconImg = document.getElementById("favicon");
  window.addEventListener("blur", () => {document.title = "Come back 👀";
  faviconImg.setAttribute("href","/img/favicon2.png");
  })
  window.addEventListener("focus", () =>{document.title = docTitle;
  faviconImg.setAttribute("href","/img/favicon.png");
  })