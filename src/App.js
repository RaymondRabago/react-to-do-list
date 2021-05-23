import React, { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskList from './components/TaskList';

import './assets/css/app.css';


function App() {

    /* CONTAINS ALL THE TASKS */
    const [tasks, setTask] = useState([]);
    const [totalPendingTasks, setTotalPendingTasks] = useState(0);
    const numberOfTasks = tasks.length;


    /* PRELOAD EXAMPLE DATA */
    useEffect(() => {

      let preloadTask = [
        {
          id: 1,
          task: "Developed a simple to-do-list using React (Add, View, Delete)",
          completed: true
        },
        {
          id: 2,
          task: "Applied transition for every task using React Transition Group",
          completed: true
        },
        {
          id: 3,
          task: "Save the state into the local storage",
          completed: false
        },
        {
          id: 4,
          task: "Add sort function in the list",
          completed: false
        },        
      ];

      setTask(preloadTask);

    }, []);

    /* TO GET THE TOTAL PENDING TASKS */ 
    useEffect(() => {
      let ctr = 0;

      tasks.forEach((task) => {
        if(task.completed === true) {
          ctr = ctr === 0 ? 0 : ctr--;
        } else {
          ctr++;
        }
      });

      setTotalPendingTasks(ctr);

    }, [tasks]);


    const onAddTask = (taskInfo) => {
  
      const taskId = Date.now();
      let newTask = {}
      
      newTask = {
        id: taskId,
        task: taskInfo,
        completed: false
      }      

      setTask([...tasks, newTask]);
    }

    const onDeleteTask = (id) => {
      const tasksList = tasks.filter((task) => task.id !== id);
      setTask(tasksList);
    }

    const onCompleteTask = (id) => {

      const  completedTask = tasks.map((task) => {

        if(task.id === id) {
          return {
            id: task.id,
            task: task.task, 
            completed: !task.completed,
          }
        } else {
          return {
            id: task.id,
            task: task.task, 
            completed: task.completed
          }
        }

      });

      setTask(completedTask);
    }


  return (
    <div className="app">
        <Header 
          totalTasks={numberOfTasks}
          totalPending={totalPendingTasks}
        />
        <TaskList 
          tasks={tasks} 
          onDelete={onDeleteTask} 
          onComplete={onCompleteTask}
        />
        <AddTask onAddTask={onAddTask}/>
    </div>

    
  );
}

export default App;
