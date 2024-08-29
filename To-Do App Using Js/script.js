const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


//function to take input task
function addTask(){
    if(inputBox.value === ''){
        alert("You Must Write Something")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    //clear the input box after add todo
    inputBox.value = "";
    saveData();

}

//add js for click 
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


//add list to local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//display the data from local storage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();