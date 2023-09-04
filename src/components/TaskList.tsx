import React, { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import Task from './Task';
import Styles from '../App.module.css';
import Container from '@mui/material/Container';


const TaskList = () => {
  const [taskText, setTaskText] = useState('');
  const [priority, setPriority] = useState('low');
 
  const newTask = {
    id: uuidv4(),
    text: taskText,
    isComplete: false,
    priority,
  };
  const [tasks, setTasks] = useState<Array<any>>([]);
  const handleTaskTextChange = (event : any) => {
    setTaskText(event.target.value);
  };

  const handlePriorityChange = (event:any) => {
    setPriority(event.target.value);
  };

  const handleAddTask = (event:any) => {
    event.preventDefault();
    if (taskText.trim() === '') return;
    setTasks([...tasks , newTask]);
    setTaskText('');
  };

  const handleTaskCompleteToggle = (taskId :any) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (taskId: any) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  useEffect(() => {
    console.log('TaskList component updated');
  }, [tasks]);

  return (
    <>
    <Container maxWidth="xl" >
    <h2 style={{textAlign:'center', padding:"5px 5px"}}>TASK LIST</h2><br/>
    <div className = {Styles.taskList} >
      <div className={Styles.col3}>
      <form onSubmit={handleAddTask}>
        <input className= {Styles.container} type="text" value={taskText} onChange={handleTaskTextChange} placeholder="Enter task" />
        <select className={Styles.priority} value={priority} onChange={handlePriorityChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button className={Styles.completed} type="submit">Add Task</button>
      </form>
      </div>
      
      
    </div>
    <div className={Styles.input}>{tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onCompleteToggle={handleTaskCompleteToggle}
          onRemove={handleRemoveTask}
        />
      ))}
      
      </div>
      </Container>
    </>
   
  );
};

export default TaskList;