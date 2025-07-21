var storage = document.getElementById("storage");
var input = document.getElementById("input");
var button = document.getElementById("AddButton");

// Utility functions for localStorage
function getTasks() {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
}
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render all tasks from localStorage
function renderTasks() {
    storage.innerHTML = '';
    var tasks = getTasks();
    tasks.forEach(function(task, idx) {
        var item = document.createElement("li");

        var toDoItems = document.createElement("input");
        toDoItems.value = task.text;
        toDoItems.disabled = true;
        toDoItems.style.backgroundColor = task.completed ? "yellow" : "rgb(241, 241, 162)";
        toDoItems.style.border = "1px solid yellow";
        if (task.completed) {
            toDoItems.style.textDecoration = "line-through";
            item.style.backgroundColor = "green";
        }
        item.appendChild(toDoItems);

        var deletedButton = document.createElement("button");
        deletedButton.appendChild(document.createTextNode("Delete"));
        deletedButton.style.backgroundColor = "rgb(248, 161, 127)";
        deletedButton.setAttribute('id', 'delete');
        item.appendChild(deletedButton);

        var completedButton = document.createElement("button");
        completedButton.appendChild(document.createTextNode("Completed"));
        completedButton.style.backgroundColor = "rgb(131, 248, 127)";
        completedButton.setAttribute('id', 'completed');
        item.appendChild(completedButton);

        var editButton = document.createElement("button");
        editButton.appendChild(document.createTextNode("Edit "));
        editButton.style.backgroundColor = "rgb(151, 230, 250)";
        editButton.setAttribute('id', 'edit');
        item.appendChild(editButton);

        // Delete
        deletedButton.addEventListener("click", function() {
            var tasks = getTasks();
            tasks.splice(idx, 1);
            saveTasks(tasks);
            renderTasks();
        });

        // Complete
        completedButton.addEventListener("click", function() {
            var tasks = getTasks();
            tasks[idx].completed = true;
            saveTasks(tasks);
            renderTasks();
        });

        // Edit
        editButton.addEventListener("click", function() {
            toDoItems.disabled = false;
            toDoItems.style.backgroundColor = "white";
            var saveButton = document.createElement("button");
            saveButton.innerHTML = "save";
            saveButton.setAttribute('id', 'save');
            item.appendChild(saveButton);

            saveButton.addEventListener("click", function() {
                if (toDoItems.value == "") {
                    alert("Please enter value to save");
                } else {
                    var tasks = getTasks();
                    tasks[idx].text = toDoItems.value;
                    saveTasks(tasks);
                    renderTasks();
                }
            });
        });

        storage.appendChild(item);
    });
}

// Initial render on page load
renderTasks();

button.addEventListener("click", function() {
    if (input.value == "") {
        alert("enter task to add");
    } else {
        var tasks = getTasks();
        tasks.push({ text: input.value, completed: false });
        saveTasks(tasks);
        renderTasks();
        input.value = "";
    }
});
