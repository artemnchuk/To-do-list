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
let OnlyList= document.getElementById("OnlyList");
  function saveData(){
    localStorage.setItem("data",OnlyList.innerHTML);
  }
  function showList(){
    OnlyList.innerHTML=localStorage.getItem("data");
  }
  showList();

let addButton = document.createElement('button');
addButton.className="addButton";
addButton.style.cssText = 'display:block;margin: 0 auto;';
let i = document.createElement("i");
addButton.appendChild(i);
i.className="fa fa-folder-plus";
i.style.cssText = 'color: white;';
addButton.addEventListener('click', createToDoList);
toDoSection.appendChild(addButton);
//
let ReButton = document.createElement('button');
ReButton.className="addButton";
ReButton.style.cssText = 'display:block;margin: 0 auto;';
let i2 = document.createElement("i");
ReButton.appendChild(i2);
i2.className="fa-regular fa-pen-to-square";
i2.style.cssText = 'color: white;';
ReButton.addEventListener('click', createToDoList);
toDoSection.appendChild(ReButton);
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
  OnlyList.appendChild(divElement);

  for (let inputElement of inputElements) {
    inputElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            let task = inputElement.value.trim();
            if (task !== '') {
                // Find the corresponding ul element for this input
                let ulElement = inputElement.parentElement.querySelector('.listContainer');
                
                // Create new li element
                let liElement = document.createElement('li');
                liElement.textContent = task;
  
                // Create close button (span element)
                let span = document.createElement("span");
                span.innerHTML = "\u00d7";
                liElement.appendChild(span);
  
                // Append new li element to ul element
                ulElement.appendChild(liElement);
  
                // Clear input value
                inputElement.value = '';
  
                // Add event listener to toggle checked class and save data
                liElement.addEventListener("click", function(e) {
                    if (e.target.tagName === "LI") {
                        e.target.classList.toggle("checked");
                        saveData();
                    } else if (e.target.tagName === "SPAN") {
                        e.target.parentElement.remove();
                        saveData();
                    }
                }, false);
  
                // Save data after adding new item
                saveData();
            }
        }
    });
  }
};
let inputElements = document.getElementsByClassName('inputBox');
for (let inputElement of inputElements) {
  inputElement.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          let task = inputElement.value.trim();
          if (task !== '') {
              // Find the corresponding ul element for this input
              let ulElement = inputElement.parentElement.querySelector('.listContainer');
              
              // Create new li element
              let liElement = document.createElement('li');
              liElement.textContent = task;

              // Create close button (span element)
              let span = document.createElement("span");
              span.innerHTML = "\u00d7";
              liElement.appendChild(span);

              // Append new li element to ul element
              ulElement.appendChild(liElement);

              // Clear input value
              inputElement.value = '';

              // Add event listener to toggle checked class and save data
              liElement.addEventListener("click", function(e) {
                  if (e.target.tagName === "LI") {
                      e.target.classList.toggle("checked");
                      saveData();
                  } else if (e.target.tagName === "SPAN") {
                      e.target.parentElement.remove();
                      saveData();
                  }
              }, false);

              // Save data after adding new item
              saveData();
          }
      }
  });
}

saveData();
showList();
  let docTitle = document.title;
  let faviconImg = document.getElementById("favicon");
  window.addEventListener("blur", () => {document.title = "Come back 👀";
  faviconImg.setAttribute("href","/img/favicon2.png");
  })
  window.addEventListener("focus", () =>{document.title = docTitle;
  faviconImg.setAttribute("href","/img/favicon.png");
  })