let tasks = [];

function taskTemplate(task) {
  return `
    <li data-id="${task.id}" ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-action="delete">❎</span>
        <span data-action="complete">✅</span>
      </div>
    </li>`;
}

function renderTasks(tasks) {
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = "";
  const html = tasks.map(taskTemplate).join("");
  listElement.innerHTML = html;
}

function newTask() {
  const task = document.querySelector("#todo").value.trim();
  if (task === "") return; // Don't add an empty task
  const taskObject = { id: Date.now(), detail: task, completed: false };
  tasks.push(taskObject);
  renderTasks(tasks);
  document.querySelector("#todo").value = ""; // Clear the input field
}

function removeTask(taskElement) {
  const taskId = taskElement.dataset.id;
  tasks = tasks.filter((task) => task.id != taskId);
  taskElement.remove();
}

function completeTask(taskElement) {
  const taskId = taskElement.dataset.id;
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  taskElement.classList.toggle("strike");
}

function manageTasks(e) {
  const parent = e.target.closest("li");
  if (!parent) return;
  if (e.target.dataset.action === "delete") {
    removeTask(parent);
  }
  if (e.target.dataset.action === "complete") {
    completeTask(parent);
  }
}

document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todo").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    newTask();
  }
});
document.querySelector("#todoList").addEventListener("click", manageTasks);

// render the initial list of tasks when the page loads
renderTasks(tasks);
