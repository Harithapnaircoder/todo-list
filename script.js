document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const taskCount = document.getElementById('taskCount');
    

    let tasks = [];

    addTaskBtn.addEventListener('click', function() {
        const taskName = taskInput.value.trim();
        if (taskName !== '') {
            tasks.push(taskName);
            displayTasks();
            updateTaskCount();
            taskInput.value = '';
        }
    });

    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item task-item'; 
            listItem.textContent = task;
    
            const deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-danger btn-delete';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                tasks.splice(index, 1);
                displayTasks();
                updateTaskCount();
            });
    
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
        });
    }
    

    function updateTaskCount() {
        taskCount.textContent = tasks.length;
    }

   
});