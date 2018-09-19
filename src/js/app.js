form = document.getElementById("formTask");

let button = document.getElementById('submit')

button.addEventListener('click', saveTask);

let editTask = document.getElementById('editTask');

let deleteTask = document.getElementById('deleteTask');

function saveTask(e){
    let title = document.getElementById('title').value;
    
    let description = document.getElementById('description').value;

    button.addEventListener('click', saveTask);
    
    const task = {
        title,
        description
    };

    if(localStorage.getItem('tasks') === null){
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    getTasks();
    console.log(task)
    e.preventDefault()
}

function getTasks(e){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksDiv = document.getElementById('tasks');
    let viewYourTasks = document.getElementById('viewYourTasks');

    if(localStorage.getItem('tasks') !== null){
        viewYourTasks.innerHTML = `
            <h4 class="align-center"> View your Tasks!</h4>
        `
    }

    // LIMPIA
    tasksDiv.innerHTML = '';

    for(let i = 0; i < tasks.length; i++){

        let title = tasks[i].title;
        let description = tasks[i].description;
    

        tasksDiv.innerHTML += `
        
        <div class="row">
            <div class="col s8 m8">
                <div class="card-panel yellow">         
                    <span class="white-text">
                    <h4> ${title} </h4>
                    <br>
                    <p> ${description} </p>
                    </span>

                    <div class="card-action">
                        <a id="editTask">Edit</a>
                        <a id="deleteTask" href="#" onClick="deleteT('${title}', '${description}')">Delete</a>
                    </div>
                </div>
            </div>
        </div>

        `
    }
}

function deleteT(title, description){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].title == title && tasks[i].description == description){
            tasks.splice(i, 1);
        }
    }
   localStorage.setItem('tasks', JSON.stringify(tasks));
   getTasks();
    
}
    
    

getTasks();