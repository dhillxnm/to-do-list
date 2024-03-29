'use strict';

const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

// creating tasks
function addTask(){
    if(inputBox.value === '') {
        return ("you must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#215";
        li.appendChild(span); 
    }
    inputBox.value = "";
    saveData(); 
}

// removing tasks
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); 
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


//save tasks
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

//showing tasks After reload
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
