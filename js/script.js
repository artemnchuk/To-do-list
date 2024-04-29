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
toDoSection.appendChild(OnlyList);

// function addUlBox() {
//         for(let i = 0;i<4;i++){
//         if (i==4) {
//           alert("You already made 4 lists")
//         } else {
//           let div = document.createElement("div");
//           let ul = document.createElement("ul");
//           ul.innerHTML = ;
//           listDiv.appendChild(ul);
//           i++;
//         }
//       }
//         inputBox.value = "";
//         // saveData();
//   }
// function addTask() {
//   if (inputBox.value === "") {
//     alert("You must write something!");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value.charAt(0).toUpperCase()+inputBox.value.slice(1);
//     listContainer.appendChild(li);
//     let span = document.createElement("span");
//     span.innerHTML= "\u00d7";
//     li.appendChild(span);
//   }
//   inputBox.value = "";
//   saveData();
// }

// listContainer.addEventListener("click",function(e){
//     if(e.target.tagName==="LI"){
//         e.target.classList.toggle("checked");
//         saveData();
//     }
//     else if(e.target.tagName==="SPAN"){
//         e.target.parentElement.remove();
//         saveData();
//     }
// },false);
// function saveData(){
//     localStorage.setItem("data",listContainer.innerHTML);
// }
// function showList(){
//     listContainer.innerHTML=localStorage.getItem("data");
// }
// showList();
//List 2
// listContainer2.addEventListener("click",function(e){
//   if(e.target.tagName==="LI"){
//       e.target.classList.toggle("checked");
//       saveData2();
//   }
//   else if(e.target.tagName==="SPAN"){
//       e.target.parentElement.remove();
//       saveData2();
//   }
// },false);
// function saveData2(){
//   localStorage.setItem("data2",listContainer2.innerHTML);
// }
// function showList2(){
//   listContainer2.innerHTML=localStorage.getItem("data2");
// // }
// showList2();

function createToDoList() {
  // Створюємо div елемент (контейнер)
  let divElement = document.createElement('div');
  divElement.className="listDiv";

  // Створюємо input елемент
  let inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'text');
  inputElement.setAttribute('placeholder', 'Add a new task...');
  inputElement.className="inputBox";
  
  // Створюємо ul елемент
  let ulElement = document.createElement('ul');
  ulElement.className="listContainer";

  // Додаємо input до div
  divElement.appendChild(inputElement);
  
  // Додаємо ul до div
  divElement.appendChild(ulElement);

  // Додаємо div на сторінку
  OnlyList.appendChild(divElement);

  // Додаємо обробник події для input
  inputElement.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          let task = inputElement.value.trim();
          if (task !== '') {
              // Створюємо li елемент
              let liElement = document.createElement('li');
              liElement.textContent = task;

              // Додаємо li до ul
              ulElement.appendChild(liElement);

              // Очищаємо input
              inputElement.value = '';
          }
      }
  });
}

// Створюємо кнопку, яка викликає функцію createToDoList() при кліку
let addButton = document.createElement('button');
addButton.className="addButton";
addButton.style.cssText = 'display:flex;font-size: 100px;'
let i = document.createElement("i");
addButton.appendChild(i);
i.className="fa fa-folder-plus";
i.style.cssText = 'color: white;'
addButton.addEventListener('click', createToDoList);
OnlyList.appendChild(addButton);



// let docTitle = document.title;
// let faviconImg = document.getElementById("favicon");
// window.addEventListener("blur", () => {document.title = "Come back 👀";
// faviconImg.setAttribute("href","/img/favicon2.png");
// })
// window.addEventListener("focus", () =>{document.title = docTitle;
// faviconImg.setAttribute("href","/img/favicon.png");
// })