

function insertTask(){
    const task = document.getElementById("task").value
    const diaSemana = document.getElementById("select_day").value

    if(task.length < 3){
        alert("Campo de tarefa em braco, por favor, digite algo!")
    }else{
    document.getElementById(diaSemana).innerHTML += `<li class="done" onclick="taskDone()"> ${task} </li>`
    }
    document.getElementById("task").value = " "
}

function taskDone(){
    
}

function clearTask(){
    
}