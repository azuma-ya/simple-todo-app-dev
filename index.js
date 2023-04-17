const addTaskButtonDom = document.getElementById("addTaskButton");
const taskInputDom = document.getElementById("taskInput");
const taskListDom = document.getElementById("taskList");
const taskCheckboxDoms = document.querySelectorAll("task-checkbox");

let todoList = [];

const crateTaskItem = (text) =>
	`<li>
		<input type="checkbox" class="task-checkbox"/>
		${text}
		<i class='bx bx-trash'></i>
	</li>`;

addTaskButtonDom.addEventListener("click", (e) => {
	e.preventDefault();

	localStorage.setItem(
		"items",
		JSON.stringify([...todoList, taskInputDom.value])
	);
	const item = crateTaskItem(taskInputDom.value);
	taskListDom.innerHTML += item;
	taskInputDom.value = "";
});

taskCheckboxDoms.forEach((taskInputDom) => {
	taskInputDom.addEventListener("change", () => {
		console.log("click");
	});
});

window.addEventListener("load", () => {
	todoList = JSON.parse(localStorage.getItem("items"));
	if (todoList) {
		todoList.forEach((itemText) => {
			const item = crateTaskItem(itemText);
			taskListDom.innerHTML += item;
		});
	}
});
