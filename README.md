## To-Do List App

A user-friendly and efficient `JavaScript` application to manage your daily tasks.

A to-do list app is a digital tool designed to manage your tasks and enhance productivity. It allows you to `create lists`, add details to tasks, set reminders, and categorize them for better organization.

## Key Features:

Effortlessly `add new tasks` to your to-do list, keeping you organized and on top of your schedule.
`Mark` completed tasks for clear progress visualization.
`Remove` finished tasks to maintain a streamlined and focused workspace.
Benefit from persistent data storage, ensuring your tasks `remain` even after refreshing the page.

## Behind the Scenes:

HTML
CSS
`JavaScript`: Handles core functionalities, including task creation, completion, removal, and storage.

## Most Important JavaScript Function:

While each function contributes to the overall functionality of the app, the `addTask function` is arguably the most crucial as it allows users to create new tasks, which forms the core purpose of the application.

```Javascript

function addTask(){
    if(inputBox.value === '') {
        return ("you must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

```

```Css

Base Styles for the To-Do List Container:

CSS
.todo-app {
  background-color: #f5f5f5; /* Light background color */
  border-radius: 5px; /* Rounded corners */
  padding: 20px; /* Padding for content */
  max-width: 500px; /* Maximum width for responsiveness */
  margin: 0 auto; /* Center the container horizontally */
}

```

### Demo

Click [here] (https://dhillxnm.github.io/to-do-list/)
to test the application
