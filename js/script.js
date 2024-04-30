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

// Function to save data to localStorage
function saveData() {
  localStorage.setItem("data", OnlyList.innerHTML);
}

// Function to load data from localStorage
function showList() {
  OnlyList.innerHTML = localStorage.getItem("data");
}

// Function to add event listeners for task completion and deletion
function addEventListeners() {
  let listContainers = document.querySelectorAll('.listContainer');
  listContainers.forEach(container => {
    let listItems = container.querySelectorAll('li');
    listItems.forEach(item => {
      item.addEventListener('click', function(e) {
        if (e.target.tagName === "LI") {
          e.target.classList.toggle("checked");
          saveData();
        } else if (e.target.tagName === "SPAN") {
          e.target.parentElement.remove();
          saveData();
        }
      });
    });
  });

  // Add event listener to remove button for each list
  let removeButtons = document.querySelectorAll('.removeButton');
  removeButtons.forEach(button => {
    button.addEventListener('click', function() {
      button.parentElement.remove();
      saveData();
    });
  });
}

// Function to create a new todo list
function createToDoList() {
  let divElement = document.createElement('div');
  divElement.className = "listDiv";

  let inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'text');
  inputElement.setAttribute('placeholder', 'Add a new task...');
  inputElement.className = "inputBox";

  let ulElement = document.createElement('ul');
  ulElement.className = "listContainer";

  // Create remove button
  let removeButton = document.createElement('button');
  removeButton.textContent = "Remove List";
  removeButton.className = "removeButton";

  divElement.appendChild(inputElement);
  divElement.appendChild(ulElement);
  divElement.appendChild(removeButton); // Append remove button to the list

  OnlyList.appendChild(divElement);

  inputElement.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      let task = inputElement.value.trim();
      if (task !== '') {
        let liElement = document.createElement('li');
        liElement.textContent = task;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        liElement.appendChild(span);

        ulElement.appendChild(liElement);
        inputElement.value = '';

        addEventListeners(); // Add event listeners to the newly added list item
        saveData();
      }
    }
  });

  // Add event listener to new remove button
  removeButton.addEventListener('click', function() {
    divElement.remove();
    saveData();
  });
}

// Load existing lists on page load
document.addEventListener('DOMContentLoaded', function() {
  showList();
  addEventListeners(); // Attach event listeners to all existing elements
});

// Create new list button
let addButton = document.createElement('button');
addButton.className = "addButton";
addButton.style.cssText = 'display:block;margin: 0 auto;';
let i = document.createElement("i");
addButton.appendChild(i);
i.className="fa fa-folder-plus";
i.style.cssText = 'color: white;';
addButton.addEventListener('click', createToDoList);
toDoSection.appendChild(addButton);

// Save data on window unload
window.addEventListener('beforeunload', saveData);

  let docTitle = document.title;
  let faviconImg = document.getElementById("favicon");
  window.addEventListener("blur", () => {document.title = "Come back 👀";
  faviconImg.setAttribute("href","/img/favicon2.png");
  })
  window.addEventListener("focus", () =>{document.title = docTitle;
  faviconImg.setAttribute("href","/img/favicon.png");
  })