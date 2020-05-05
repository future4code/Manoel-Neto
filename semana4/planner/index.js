

function insertTask(){
    const task = document.getElementById("task").value
    const diaSemana = document.getElementById("select_day").value

    if(task.length < 3){
        alert("Campo de tarefa em braco, por favor, digite algo!")
    }else{
    document.getElementById(diaSemana).innerHTML += `<li onclick="taskDone()"> ${task} </li>`
    }
    document.getElementById("task").value = " "
}

function taskDone(){
    const strikeWord = document.getElementsByTagName("li")

    strikeWord.style = "text-decoration: line-through"
}

function clearTask(){
    document.getElementById("segunda").empty()
}