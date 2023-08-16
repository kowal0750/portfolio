document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('http://localhost:3000/tasks');
    const tasks = await response.json();

    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
      const taskItem = document.createElement('li');
      taskItem.textContent = `${task.title} - ${task.description} (${task.status})`;
      taskList.appendChild(taskItem);
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
});