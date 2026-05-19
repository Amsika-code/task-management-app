let tasks = [];

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addTask);

function addTask() {

  const taskInput = document.getElementById("taskInput");

  const taskText = taskInput.value.trim();

  if(taskText === ""){
    alert("Enter a task");
    return;
  }

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  tasks.push(task);

  taskInput.value = "";

  renderTasks();
}

function renderTasks() {

  const taskList = document.getElementById("taskList");

  taskList.innerHTML = "";

  tasks.forEach(task => {

    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">
        ${task.text}
      </span>

      <div class="btns">

        <button class="complete-btn"
          onclick="toggleTask(${task.id})">

          ${task.completed ? 'Undo' : 'Done'}

        </button>

        <button class="delete-btn"
          onclick="deleteTask(${task.id})">

          Delete

        </button>

      </div>
    `;

    taskList.appendChild(li);
  });
}

function toggleTask(id){

  tasks = tasks.map(task => {

    if(task.id === id){
      task.completed = !task.completed;
    }

    return task;
  });

  renderTasks();
}

function deleteTask(id){

  tasks = tasks.filter(task => task.id !== id);

  renderTasks();
}