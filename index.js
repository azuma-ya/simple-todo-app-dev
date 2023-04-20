const addTaskButtonDom = document.getElementById("addTaskButton");
const taskInputDom = document.getElementById("taskInput");
const taskListDom = document.getElementById("taskList");

let taskList = [];

const crateTaskItem = (task) =>
	`<li class="task">
		<input type="checkbox" class="task-checkbox" data-id="${task.id}"/>
		<span>${task.title}</span>
		<i class='bx bx-trash'></i>
	</li>`;

addTaskButtonDom.addEventListener("click", (e) => {
	e.preventDefault();
	if (taskInputDom.value === "") return;

	const task = {
		id: ~~(Math.random() * 1000000000),
		title: taskInputDom.value,
		checked: false,
	};
	taskList.push(task);
	localStorage.setItem("items", JSON.stringify(taskList));
	const item = crateTaskItem(task);
	taskListDom.innerHTML += item;
	taskInputDom.value = "";
});

taskListDom.addEventListener("click", (e) => {
	// console.log(e.target);
	if (e.target.classList.contains("task-checkbox")) {
		const id = Number(e.target.dataset.id);
		taskList.forEach((task) => {
			if (task.id === id) {
				task.checked = !task.checked;
				e.target.checked = task.checked;
				if (task.checked) {
					e.target.parentElement.style.textDecoration = "line-through";
				} else {
					e.target.parentElement.style.textDecoration = "none";
				}
			}
		});
		localStorage.setItem("items", JSON.stringify(taskList));

		// taskListDom.innerHTML = "";
		// taskList.forEach((task) => {
		// 	const item = crateTaskItem(task);
		// 	taskListDom.innerHTML += item;
		// });
	}
});

window.addEventListener("load", () => {
	taskList = JSON.parse(localStorage.getItem("items"));
	if (taskList) {
		taskList.forEach((task) => {
			const item = crateTaskItem(task);
			taskListDom.innerHTML += item;
		});
	} else {
		taskList = [];
	}
});
