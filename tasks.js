//Brian Njoroge Irungu SCT211-0507/2021
//Chikombe Canon Allan SCT211/0019/2020

document.addEventListener("DOMContentLoaded", function() {
    // Query for input and submit fields
    const submit = document.getElementById("submit");
    const newTask = document.getElementById("task");

    // submit.disabled = true
  
    newTask.addEventListener("input", function() {
      // Update the value when there is input
      inputContent = newTask.value;
      console.log(newTask.value);
    });
  
    document.querySelector("form").addEventListener("submit", function(e) {
      e.preventDefault(); 
  
      // Access submitted task
      const userTask = newTask.value;
  
      // Adding task to list
      var taskList = document.getElementById("tasks");
      var task = document.createElement("li"); // Create list element
      task.textContent = userTask;
      taskList.appendChild(task); // Append list element
  
      // Reset form
      document.querySelector("form").reset();
    });
  });
  