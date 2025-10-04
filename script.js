const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskCategory = document.getElementById("taskCategory");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const filters = document.querySelectorAll(".filters button");
const themeToggle = document.getElementById("themeToggle");

// ------------------ STORAGE HELPERS ------------------
function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getCategories() {
  return JSON.parse(localStorage.getItem("categories")) || ["General", "Work", "Personal"];
}
function saveCategories(categories) {
  localStorage.setItem("categories", JSON.stringify(categories));
}

// ------------------ CATEGORY HANDLING ------------------
function populateCategoryOptions(selectEl, selected = "General") {
  const categories = getCategories();
  selectEl.innerHTML = ""; // reset
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    if (cat === selected) option.selected = true;
    selectEl.appendChild(option);
  });
  // Add "Custom" option always at end
  const customOpt = document.createElement("option");
  customOpt.value = "Custom";
  customOpt.textContent = "➕ Custom";
  selectEl.appendChild(customOpt);
  if (selected === "Custom") selectEl.value = "General";
}

function handleCustomCategory(selectEl) {
  if (selectEl.value === "Custom") {
    const newCat = prompt("Enter new category:");
    if (newCat && newCat.trim() !== "") {
      let categories = getCategories();
      if (!categories.includes(newCat)) {
        categories.push(newCat);
        saveCategories(categories);
      }
      populateCategoryOptions(selectEl, newCat);
    } else {
      selectEl.value = "General";
    }
  }
}

// Initialize main category dropdown
populateCategoryOptions(taskCategory);
taskCategory.addEventListener("change", () => handleCustomCategory(taskCategory));

// ------------------ RENDER TASKS ------------------
function renderTasks(filter = "all") {
  taskList.innerHTML = "";
  let tasks = getTasks();

  tasks.forEach((task, index) => {
    if (filter === "completed" && !task.completed) return;
    if (filter === "pending" && task.completed) return;

    const li = document.createElement("li");
    li.className = `task ${task.completed ? "completed" : ""}`;

    const info = document.createElement("div");
    info.className = "info";
    info.innerHTML = `<strong>${task.text}</strong><br>
      <small>${task.date || "No date"} | ${task.category}</small>`;
    li.appendChild(info);

    const actions = document.createElement("div");

    const completeBtn = document.createElement("button");
    completeBtn.className = "complete";
    completeBtn.textContent = "✓";
    completeBtn.onclick = () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks(tasks);
      renderTasks(filter);
    };

    const editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.textContent = "✎";
    editBtn.onclick = () => {
      li.innerHTML = ""; // clear li for edit mode

      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = task.text;

      const editDate = document.createElement("input");
      editDate.type = "date";
      editDate.value = task.date || "";

      const editCategory = document.createElement("select");
      populateCategoryOptions(editCategory, task.category);
      editCategory.addEventListener("change", () => handleCustomCategory(editCategory));

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "💾";
      saveBtn.onclick = () => {
        if (editInput.value.trim() === "") return alert("Enter a task");
        tasks[index].text = editInput.value;
        tasks[index].date = editDate.value;
        tasks[index].category = editCategory.value;
        saveTasks(tasks);
        renderTasks(filter);
      };

      const cancelBtn = document.createElement("button");
      cancelBtn.textContent = "✖";
      cancelBtn.onclick = () => renderTasks(filter);

      li.append(editInput, editDate, editCategory, saveBtn, cancelBtn);
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "🗑";
    deleteBtn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks(tasks);
      renderTasks(filter);
    };

    actions.append(completeBtn, editBtn, deleteBtn);
    li.appendChild(actions);
    taskList.appendChild(li);
  });
}

// ------------------ ADD TASK ------------------
addTaskBtn.addEventListener("click", () => {
  if (taskInput.value.trim() === "") return alert("Enter a task");

  let tasks = getTasks();
  tasks.push({
    text: taskInput.value,
    date: taskDate.value,
    category: taskCategory.value,
    completed: false
  });
  saveTasks(tasks);

  taskInput.value = "";
  taskDate.value = "";
  taskCategory.value = "General";
  renderTasks();
});

// ------------------ FILTER ------------------
filters.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filters .active").classList.remove("active");
    btn.classList.add("active");
    renderTasks(btn.dataset.filter);
  });
});

// ------------------ THEME ------------------
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ------------------ INITIAL ------------------
renderTasks();
