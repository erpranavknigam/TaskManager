#!/usr/bin/env node

const {Command} = require('commander')
const fs = require('fs-extra')
const path = require('path')

const program = new Command()
const taskFile = path.join(__dirname, 'tasks.json')

fs.ensureFileSync(taskFile)
if(!fs.existsSync(taskFile) || fs.readJsonSync(taskFile, {throws:false}) === null){
    fs.writeFileSync(taskFile,JSON.stringify([]))
}



// Command for Creating a new Task
program.command('add <task>')
.description('Add a new task')
.action((task) => {
    const tasks = JSON.parse(fs.readFileSync(taskFile, 'utf8'));
    const newTask = {id: tasks.length + 1, task};
    tasks.push(newTask)
    fs.writeFileSync(taskFile,JSON.stringify(tasks, null, 2));
    console.log(`Task added successfully (ID: ${newTask.id})`)
})

// Command to display all the tasks
program.command('list [status]')
.description('List tasks based on status (done, inprogress, todo).')
.action((status) => {
    const tasks = JSON.parse(fs.readFileSync(taskFile,'utf-8'))

    if(status != null && status != ""){
        let completedTasks;
        switch (status){
            case 'done':
                completedTasks = Array.from(tasks).filter(x=>x.status === 'done')
                if(completedTasks.length > 0){
                    Array.from(completedTasks).forEach((task,index) => {
                        console.log(++index,") ",task.task)
                    });
                } else{
                    console.log("No task available with status done")
                }
                break;
            case 'inprogress':
                completedTasks = Array.from(tasks).filter(x=>x.status === 'In-Progress')
                if(completedTasks.length > 0){
                    Array.from(completedTasks).forEach((task,index) => {
                        console.log(++index,") ",task.task)
                    });
                } else{
                    console.log("No task available with status inprogress")
                }
                break;
            case 'todo':
                completedTasks = Array.from(tasks).filter(x=>x.status === 'todo')
                if(completedTasks.length > 0){
                    Array.from(completedTasks).forEach((task,index) => {
                        console.log(++index,") ",task.task)
                    });
                } else{
                    console.log("No task available with status todo")
                }
                break;
            default:
                console.log("Invalid Command")
        }
    } else{
        Array.from(tasks).forEach((task,index) => {
            console.log(++index,") ",task.task)
        });
    }
})

// Command to Delete the task using it's Id
program
  .command('delete <id>')  // Correct command definition
  .description('Deletes the task with given id')
  .action((id) => {
    const tasks = JSON.parse(fs.readFileSync(taskFile, 'utf-8'));

    // Convert id to a number before comparison
    const updatedTasks = tasks.filter(item => item.id !== Number(id));

    fs.writeFileSync(taskFile, JSON.stringify(updatedTasks, null, 2));
    console.log(`Task with id ${id} is deleted successfully.`);
  });

// Command to update the task using its Id and new task
program.command('update <id> <task>')
.description('Update the task based on the id')
.action((id, task)=>{
    const tasks = JSON.parse(fs.readFileSync(taskFile,'utf-8'))
    Array.from(tasks).forEach(x => {
       if(x.id === Number(id)){
        x.task = task
        fs.writeFileSync(taskFile,JSON.stringify(tasks, null, 2))
        console.log(`Task is updated successfully`)
       }
    });
})

// Command to update progress as in-progress
program.command('mark-in-progress <id>')
.description("Set status of task as in progress")
.action((id) => {
    const tasks = JSON.parse(fs.readFileSync(taskFile,'utf-8'))
    Array.from(tasks).forEach(x => {
        if(x.id === Number(id)){
         x.status = "In-Progress"
         fs.writeFileSync(taskFile,JSON.stringify(tasks, null, 2))
         console.log(`Task status is set to In Progress successfully`)
        }
     });
})

// Command to update progress as completed
program.command('mark-done <id>')
.description("Set status of task as done")
.action((id) => {
    const tasks = JSON.parse(fs.readFileSync(taskFile,'utf-8'))
    
    Array.from(tasks).forEach(x => {
        if(x.id === Number(id)){
         x.status = "done"
         fs.writeFileSync(taskFile,JSON.stringify(tasks, null, 2))
         console.log(`Task status is set to done successfully`)
        }
     });
})

// Command to update progress as todo
program.command('mark-todo <id>')
.description("Set status of task as todo")
.action((id) => {
    const tasks = JSON.parse(fs.readFileSync(taskFile,'utf-8'))
    Array.from(tasks).forEach(x => {
        if(x.id === Number(id)){
         x.status = "todo"
         fs.writeFileSync(taskFile,JSON.stringify(tasks, null, 2))
         console.log(`Task status is set to todo successfully`)
        }
     });
    
})

program.parse(process.argv)