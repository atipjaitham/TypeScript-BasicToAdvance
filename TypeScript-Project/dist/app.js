"use strict";
const inputEl = document.getElementById("input");
const fromEl = document.querySelector("form");
const listEl = document.getElementById("list");
fromEl.addEventListener("submit", saveData);
const tasks = readData();
tasks.forEach(createList);
function saveData(e) {
    e.preventDefault();
    console.log(inputEl.value);
    const message = inputEl.value;
    const newTask = {
        name: inputEl.value,
        complete: false
    };
    createList(newTask);
    tasks.push(newTask);
    localStorage.setItem("myList", JSON.stringify(tasks));
}
function createList(task) {
    const liEl = document.createElement("li");
    const checkboxEL = document.createElement("input");
    checkboxEL.type = "checkbox";
    checkboxEL.checked = task.complete;
    checkboxEL.addEventListener("change", function () {
        task.complete = checkboxEL.checked;
        updateData();
    });
    liEl.append(checkboxEL);
    liEl.append(task.name);
    listEl.append(liEl);
    inputEl.value = "";
}
function readData() {
    const myList = localStorage.getItem("myList");
    if (myList === null) {
        return [];
    }
    else {
        return JSON.parse(myList);
    }
}
function updateData() {
    localStorage.setItem("myList", JSON.stringify(tasks));
}
