"use strict"

function add(){
    var backup;
    const newItem = document.getElementById("new-item").value;

    if(newItem == ""){
        return;
    }

    var listItem = document.createElement("li");
    const paragraph1 = listItem.appendChild(document.createElement("p"));
    paragraph1.classList.add("task");
    const paragraph2 = listItem.appendChild(document.createElement("p"));
    paragraph2.classList.add("date");
    const button = listItem.appendChild(document.createElement("button"));
    button.id = "remove";
    button.textContent="X";

    paragraph1.onclick = function(){
        addOrRemoveEndDate(listItem)
    }

    //have to choose to be outside the method because it's bad practice
    button.onclick = function(){
        const modal = document.getElementById("modal");
        modal.showModal();
        document.getElementById("item").innerText = paragraph1.innerText;

        const rejectButton = document.getElementById("reject-button");
            rejectButton.addEventListener("click", () => {
                modal.close();
            });

        const confirmButton = document.getElementById("confirm-button");
            confirmButton.addEventListener("click", () => {
                debugger;
                backup = listItem;
                removeTask(listItem);
                modal.close();
            });
        
        const undoButton = document.getElementById("undo");
            undoButton.addEventListener("click", () => {
                debugger;
                const listOfOperations = document.getElementById("items-list");
                listOfOperations.append(backup);
                modal.close();
            });
    }

    paragraph1.innerText = newItem;
    const listOfOperations = document.getElementById("items-list");
    listOfOperations.append(listItem);
}


window.onload = () => {
    
}


function addOrRemoveEndDate(e) {

    const task = e.querySelector(".task").classList;

    if(task.contains("done")){
        task.remove("done");
        e.querySelector(".date").innerText = "";
    }
    
    else{
        task.add("done");
        const date = new Date();
        e.querySelector(".date").innerText = `${date.getDate()}` + "." + `${date.getMonth()+1}` + "." + `${date.getFullYear()}`;
    }
}


function removeTask(e) {
    e.remove()
}