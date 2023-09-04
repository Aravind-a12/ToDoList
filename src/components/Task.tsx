import React from 'react';
import Styles from '../App.module.css'
import Container from '@mui/material/Container';

const Task = ({ task, onCompleteToggle, onRemove }:any) => {
  return (
    <>
    <Container maxWidth="sm">
    <div  className={`${task.isComplete ? `${Styles.task} ` : ''}`}>
      <input 
        type="checkbox"
        checked={task.isComplete}
        onChange={() => onCompleteToggle(task.id)}
      />
      
      <span className={Styles.tasktest}> {task.text}</span>
      <span className={Styles.prioritytest}>{task.priority}</span>
      <button className={Styles.remove} onClick={() => onRemove(task.id)}>  X</button>
      
    </div>
    </Container>
    </>
  );
};

export default Task;