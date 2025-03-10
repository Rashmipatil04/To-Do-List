let tasks = [];

function add() {
    let temp = {};  
    temp.name = document.getElementById("name").value;
    temp.priority = parseInt(document.getElementById("priority").value); 

    if (temp.name.trim() === "" || isNaN(temp.priority)) {
        alert("Please enter a valid task and priority!");
        return;
    }

    tasks.push(temp);

    
    tasks.sort(function(a, b) {
        return a.priority - b.priority;
    });

    
    console.log(tasks);

    
    document.getElementById('tasklist').innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `${tasks[i].name} (Priority: ${tasks[i].priority})`;
        document.getElementById('tasklist').appendChild(li);
    }

    
    document.getElementById("name").value = "";
    document.getElementById("priority").value = "";
}