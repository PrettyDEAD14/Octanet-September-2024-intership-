document.addEventListener("DOMContentLoaded", () => {
    const addTaskBtn = document.getElementById("add-task");
    const newTaskInput = document.getElementById("new-task");
    const tasksList = document.getElementById("tasks-list");

    addTaskBtn.addEventListener("click", () => {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            newTaskInput.value = "";
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit";
        editBtn.addEventListener("click", () => editTask(li));

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";
        deleteBtn.addEventListener("click", () => deleteTask(li));

        const markCompleteBtn = document.createElement("button");
        markCompleteBtn.textContent = "Mark Completed";
        markCompleteBtn.addEventListener("click", () => {
            taskSpan.classList.toggle("completed");
        });

        li.append(taskSpan, editBtn, deleteBtn, markCompleteBtn);
        tasksList.appendChild(li);
    }

    function editTask(taskItem) {
        const taskSpan = taskItem.querySelector("span");
        const newTaskText = prompt("Edit your task:", taskSpan.textContent);
        if (newTaskText) {
            taskSpan.textContent = newTaskText;
        }
    }

    function deleteTask(taskItem) {
        tasksList.removeChild(taskItem);
    }
});