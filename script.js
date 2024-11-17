const addTaskBtn=document.querySelector('.add-task-btn')
const invisibleContainer=document.querySelector('.input-add-task')
addTaskBtn.addEventListener('click', () => {
    invisibleContainer.style.display = 'block'; // Make the hidden div visible
  });