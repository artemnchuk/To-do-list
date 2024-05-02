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
const toDoInput = document.getElementById("toDoInput");
const toDoSection = document.getElementById("toDoSection");
let OnlyList = document.getElementById("OnlyList");

// Function to save data to localStorage
function saveData() {
  localStorage.setItem("data", OnlyList.innerHTML);
}
// Function to load data from localStorage
function showList() {
  OnlyList.innerHTML = localStorage.getItem("data");
  addEventListeners(); // Attach event listeners to all existing elements
}

// Function to save data to localStorage
function saveData() {
  localStorage.setItem("data", OnlyList.innerHTML);
  // Save the input date
  let inputDate = document.querySelectorAll(".inputDate");
  let dates = [];
  inputDate.forEach((date) => {
    dates.push(date.value);
  });
  localStorage.setItem("dates", JSON.stringify(dates));
}

// Function to load data from localStorage
function showList() {
  OnlyList.innerHTML = localStorage.getItem("data");
  // Load and display the input date
  let storedDates = JSON.parse(localStorage.getItem("dates"));
  let inputDate = document.querySelectorAll(".inputDate");
  inputDate.forEach((date, index) => {
    date.value = storedDates[index];
  });
  addEventListeners(); // Attach event listeners to all existing elements
}
// Function to add event listeners for task completion and deletion
function addEventListeners() {
  // Add event listeners for task completion and deletion to existing lists
  let listItems = document.querySelectorAll(".listContainer li");
  listItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
      }
    });
  });

  // Add event listeners for task completion and deletion to new lists
  let newRemoveButtons = document.querySelectorAll(".removeButton");
  newRemoveButtons.forEach((button) => {
    button.addEventListener("click", function () {
      button.parentElement.remove();
      saveData();
    });
  });

  // Add event listener for adding new tasks to new lists
  let newInputBoxes = document.querySelectorAll(".inputBox");
  newInputBoxes.forEach((input) => {
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        let task = input.value.trim();
        if (task !== "") {
          let liElement = document.createElement("li");
          liElement.textContent = task;

          let span = document.createElement("span");
          span.innerHTML = "\u00d7";
          liElement.appendChild(span);

          let ulElement = input.parentElement.querySelector(".listContainer");
          ulElement.appendChild(liElement);
          input.value = "";

          // Add event listener to the newly added list item
          liElement.addEventListener("click", function (e) {
            if (e.target.tagName === "LI") {
              e.target.classList.toggle("checked");
              saveData();
            } else if (e.target.tagName === "SPAN") {
              e.target.parentElement.remove();
              saveData();
            }
          });

          saveData();
        }
      }
    });
  });
}

// Function to create a new todo list
function createToDoList() {
  let divElement = document.createElement("div");
  divElement.className = "listDiv";

  let inputElement = document.createElement("input");
  inputElement.setAttribute("type", "text");
  inputElement.setAttribute("placeholder", "Add a new task...");
  inputElement.className = "inputBox";

  let ulElement = document.createElement("ul");
  ulElement.className = "listContainer";
  ulElement.id = 'listContainer';
  let inputDate = document.createElement("input");
  inputDate.type = "date";
  inputDate.className = "inputDate";
  ulElement.appendChild(inputDate);

  // Create remove button
  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove this List";
  removeButton.className = "removeButton";
  let iRemoveLiBnt = document.createElement("i");
  removeButton.appendChild(iRemoveLiBnt);
  iRemoveLiBnt.className = "fa-solid fa-trash-can";

  divElement.appendChild(inputElement);
  divElement.appendChild(ulElement);
  divElement.appendChild(removeButton); // Append remove button to the list

  OnlyList.appendChild(divElement);

  inputElement.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      let task = inputElement.value.trim();
      if (task == "lorem") {
        let liElement = document.createElement("li");
        liElement.textContent =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorem ratione amet harum! Minus, iste error. Officia modi similique sequi repellat cupiditate fugiat odit, ex id facilis, ducimus quos sunt?";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        liElement.appendChild(span);
        ulElement.appendChild(liElement);
        inputElement.value = "";
        addEventListeners(); // Add event listeners to the newly added list item
        saveData();
      } else if (task !== "") {
        let liElement = document.createElement("li");
        liElement.textContent = task;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        liElement.appendChild(span);
        ulElement.appendChild(liElement);
        inputElement.value = "";
        addEventListeners(); // Add event listeners to the newly added list item
        saveData();
      }
    }
  });

  // Add event listener to new remove button
  removeButton.addEventListener("click", function () {
    divElement.remove();
    saveData();
  });
}

function removeAllLists() {
  OnlyList.innerHTML = ""; // Remove all lists from the container
  localStorage.removeItem("data"); // Clear the localStorage data
}
// Create new list button
let addButton = document.createElement("button");
addButton.className = "addButton";
addButton.style.cssText = "display:block;margin: 0 auto;";
let i = document.createElement("i");
addButton.appendChild(i);
i.className = "fa fa-folder-plus";
i.style.cssText = "color: white;";
addButton.addEventListener("click", createToDoList);
toDoSection.appendChild(addButton);

// Create remove all lists button
let removeAllButton = document.createElement("button");
removeAllButton.textContent = "Remove All Lists";
removeAllButton.className = "removeAllButton";
let iRemoveBnt = document.createElement("i");
removeAllButton.appendChild(iRemoveBnt);
iRemoveBnt.className = "fa-solid fa-trash-can";
removeAllButton.addEventListener("click", removeAllLists);
toDoSection.appendChild(removeAllButton);

// Load existing lists on page load
document.addEventListener("DOMContentLoaded", function () {
  showList();
});

// Save data on window unload
window.addEventListener("beforeunload", saveData);

let docTitle = document.title;
let faviconImg = document.getElementById("favicon");
window.addEventListener("blur", () => {
  document.title = "Time to take notes👀";
  faviconImg.setAttribute("href", "/img/favicon2.png");
});
window.addEventListener("focus", () => {
  document.title = docTitle;
  faviconImg.setAttribute("href", "/img/favicon.png");
});
let header = document.getElementById("header");
let main = document.getElementById("main");
let footer = document.getElementById("footer");
let darkButton = document.getElementById("theme");
let theme = localStorage.getItem("CurrentTheme");
if(theme == "dark"){
  darkButton.textContent="dark_mode";
  }
else if(theme == "light"){
  darkButton.textContent="light_mode";
  navLinks.classList.add("light_mode_navLinks");
  header.classList.add("light_mode_header");
  main.classList.add("light_mode_main");
  footer.classList.add("light_mode_footer");
}
function changeTheme() {
    if(theme == "dark"){
      darkButton.textContent="light_mode";
      navLinks.classList.add("light_mode_navLinks");
      header.classList.add("light_mode_header");
      main.classList.add("light_mode_main");
      footer.classList.add("light_mode_footer");
      theme = "light";
      localStorage.setItem("CurrentTheme", theme);
      }
    else if(theme == "light"){
      darkButton.textContent="dark_mode";
        navLinks.classList.remove("light_mode_navLinks");
        header.classList.remove("light_mode_header");
        main.classList.remove("light_mode_main");
        footer.classList.remove("light_mode_footer");
        theme = "dark";
        localStorage.setItem("CurrentTheme", theme);
    }
}
