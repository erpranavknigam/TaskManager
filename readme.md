
# README for Task CLI Project

---------------------------------------------

## Task CLI

Task CLI is a command-line tool to manage tasks. It allows you to create, list, update, delete, and mark tasks with different statuses like done, in-progress, and todo.

### Project URL
[![Project Page](https://img.shields.io/badge/Project%20Page-Click%20Here-brightgreen)](https://roadmap.sh/projects/task-tracker)

## Features

Add Task: Create a new task.

List Tasks: List tasks based on status (done, in-progress, todo) or all tasks.

Update Task: Update the description of an existing task.

Delete Task: Remove a task by its ID.

Mark Task Status: Change the status of a task to done, in-progress, or todo.

## Installation

To use this CLI tool, you need to have Node.js installed. Follow these steps to set up the project:

1. Clone the Repository
    1. `git clone https://github.com/erpranavknigam/TaskManager.git`
    2. `cd <repository-folder>`

2. Install Dependencies
    `npm install`

3. Make the CLI Tool Executable


To run the CLI commands globally, you need to link the project:
    `npm link`

This command will create a symbolic link in your system’s global package bin directory. Now you can use task-cli commands from anywhere.

## Usage

Below are the available commands:

1. Add a New Task
    `task-cli add <task>`

2. List Tasks
    1. List All Tasks:
        `task-cli list`
    2. List Tasks by Status:
        1. `task-cli list done`
        2. `task-cli list inprogress`
        3. `task-cli list todo`

3. Update a Task
    `task-cli update <id> <new-task-description>`

4. Delete a Task
    `task-cli delete <id>`

5. Mark Task as In-Progress
    `task-cli mark-in-progress <id>`

6. Mark Task as Done
    `task-cli mark-done <id>`

7. Mark Task as Todo
    `task-cli mark-todo <id>`


## Setting Up the Project

1. Clone the Project: Download or clone the repository to your local machine.
2. Install Dependencies: Run npm install to install the necessary packages.
3. Link the CLI Tool: Run npm link to make the CLI tool globally available.
4. Start Using the CLI: Use task-cli followed by the desired command to manage your tasks.

Now, you can manage your tasks efficiently from the command line with task-cli!