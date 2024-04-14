"use strict";
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
let inputField = document.getElementById("inputField");
let to_do_list = document.getElementById("to_do_list");
let submit_btn = document.getElementById("submit_btn");
function clearContent(){
    inputField.value="";
}
function addNewNote(){
    to_do_list
}
