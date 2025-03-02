/*
You are the owner of a lovely snowglobe store, and today you have a big sale and customers waiting outside.

1) You need to register the age of each customer in line outside, preferrably in an array.
2) Your store has a "setting" object that keeps track of whether there are breakable items inside.
2) If there are breakable items in the store, only customers over the age of 10 are allowed inside.
Create a function that handles the following situations:
- If there are breakable items, all your customers over the age of 10 should get a message logging out "Please come in!".
Every customer under 10 should get a message logging "Please wait in line!".
- If there are no breakable itmes, console log "Everyone, come inside!".
3) Challenge: Add a setting for the age requirement to enter.
By default, it should be 10, but you should be able to change it by invoking a function that accepts the new entry age as an argument.
This also means that the age for the notification needs to be updated to match the new entry requirements.
*/


let customers = [5, 10, 20, 6, 30, 40];  // 1
let isBreakable = true; // 2

function sendNoKidsNotification(isBreakable, customers) {
    if (isBreakable) {
        for (let i = 0; i < customers.length; i++) {
            if (customers[i] < 10) {
                console.log("Please wait in line!");
            } else {
                console.log("Please come in!");
            }
        }
    } else {
        console.log("Everyone, come inside!");
    }
}

sendNoKidsNotification(true, customers);


/*
Create a simple task management system that will track tasks in different categories:
"personal", "work", "urgent", "completed", and "archived". By default, each category starts with 0 tasks. 
The application should allow the user to:

1) Invoke a function that allows them to add a task to their chosen category by passing in the category name.
This will increment the task count for that category by 1.
2) Invoke a function that logs each category and the number of tasks in it.
3) Challenge: Invoke a function that calculates the total number of tasks across all categories.
Based on the number of tasks, log out a message:
- Less than 5 tasks: "light workload"
- Between 5 and 15 tasks: "moderate workload"
- Between 15 and 25 tasks: "heavy workload"
- More than 25 tasks: "overloaded"
*/


// let categories = ["personal", "work", "urgent", "completed", "archived"];
// let personal = 0;
// let work = 0;
// let urgent = 0;
// let completed = 0;
// let archived = 0;

// function addTask(category) {
//     if (category == "personal") {
//         personal++;
//         console.log(personal);
//     }
// }

// function calculateWorkLoads() {
//     let totalNumber = personal + work + urgent + completed + archived;
//     if (totalNumber < 5) {
//         console.log("light workload!");
//     }
// }

// addTask("personal");

// calculateWorkLoads();



let allTasks = [];

function Task(personal, work, urgent, completed, archievd) {
    this.personal = personal;
    this.work = work;
    this.urgent = urgent;
    this.completed = completed;
    this.archievd = archievd;
}

allTasks.push (
    new Task(0, 0, 0, 0, 0),
);

function addTask(category) {
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i] == category) {
            allTasks[i] = allTasks[i] + 1;
        }
        console.log(allTasks[i]);
    }
}

addTask("urgent");