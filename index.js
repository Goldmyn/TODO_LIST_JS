const TASK_INPUT = document.getElementById("task-input");
const ADD_TASK_BTN = document.getElementById("add-task-btn");
const TASK_LIST_CONTAINER = document.getElementById("task-list");
const TASK_ERROR = document.getElementById("task-error");

// AN ARRAY TO STORE ALL THE USER TASK
let allMyTask = [];

// A FUNCTION TO ADD A TASK TO MY TASK ARRAY
const addNewTask = (event) => {
  event.preventDefault();

  // check is user did not provide a task.
  if (TASK_INPUT.value === "") {
    TASK_ERROR.innerHTML = `<span class="text-center text-sm font-semibold text-red-700 bg-red-100 p-1 rounded-xl mx-auto w-[200px]">Task Input Field Empty</span>`;
    TASK_ERROR.style.display = "block";

    return;
  }
  const taskId = Math.floor(Math.random() * 99999);
  const task = TASK_INPUT.value;

  allMyTask.unshift({
    taskId: taskId,
    task: task,
  });

  displayAllTask();

  // Clear the task input field for new task to be added
  TASK_INPUT.value = "";

  TASK_ERROR.innerHTML = "";
};

ADD_TASK_BTN.addEventListener("click", addNewTask);

function displayAllTask() {
  let taskElement = [];
  for (let i = 0; i < allMyTask.length; i++) {
    taskElement.push(` <li class="p-2 flex justify-between rounded-t-lg  mb-2">
          <span>${allMyTask[i].task}</span>
          <button onClick="deleteTask(${allMyTask[i].taskId})" class="bg-red-400 text-white   rounded-md text-sm p-1">
            Delete
          </button>
        </li>`);
  }

  TASK_LIST_CONTAINER.innerHTML = taskElement.join("");
}

function deleteTask(taskId) {
  let updatedTask = [];
  for (let i = 0; i < allMyTask.length; i++) {
    if (allMyTask[i].taskId !== taskId) {
      updatedTask.push(allMyTask[i]);
    }
  }

  // Reassign allMyTask Array to the updated task array

  allMyTask = updatedTask;
  // call display all task
  displayAllTask();
}
