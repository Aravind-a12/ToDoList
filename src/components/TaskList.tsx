import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";
import Styles from "../App.module.css";
import Stack from "@mui/material/Stack";
import { Box, Typography, TextField, Button, Divider } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Theme, styled } from "@mui/material/styles";

const TaskList = () => {
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("low");

  const newTask = {
    id: uuidv4(),
    text: taskText,
    isComplete: false,
    priority,
  };
  const [tasks, setTasks] = useState<Array<any>>([]);
  const handleTaskTextChange = (event: any) => {
    setTaskText(event.target.value);
  };

  const handlePriorityChange = (event: any) => {
    setPriority(event.target.value);
  };

  const handleAddTask = (event: any) => {
    event.preventDefault();
    if (taskText.trim() === "") return;
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const handleTaskCompleteToggle = (taskId: any) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (taskId: any) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "text",
      headerName: "Task",
      width: 600,
    },
    {
      field: "priority",
      headerName: "Priority",
    },
    {
      field: "remove",
      headerName: "Delete task",
      renderCell: (params) => {
        console.log(params);
        return (
          <Button
            startIcon={<DeleteIcon />}
            onClick={() => handleRemoveTask(params.id)}
          ></Button>
        );
      },
    },
  ];

  useEffect(() => {
    console.log("TaskList component updated");
  }, [tasks]);

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <Typography mt={2} variant="h5" fontWeight={"bold"} align="center">
        Task List
      </Typography>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
        mt={2}
      >
        {/* <input type="text" value={taskText} placeholder="Enter task" /> */}
        {/* <select value={priority} onChange={handlePriorityChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select> */}
        <TextField
          value={taskText}
          sx={{}}
          placeholder="Enter Task"
          id="task_text"
          label="Task"
          variant="outlined"
          onChange={handleTaskTextChange}
          fullWidth
        />
        <TextField
          value={priority}
          sx={{ width: "100%", marginTop: "10%" }}
          select
          id="outlined-basic"
          label="Add Priority"
          onChange={handlePriorityChange}
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </TextField>
        {/* <button  type="submit">Add Task</button> */}
      </Stack>
      <Box textAlign="center">
        <Button
          sx={{ mt: "2%", justifyItems: "center" }}
          variant="contained"
          onClick={handleAddTask}
        >
          Add Task
        </Button>
      </Box>
      <Divider sx={{ mt: 2 }} />
      <DataGrid
        rows={tasks}
        columns={columns}
        checkboxSelection
        getRowClassName={(params) => {
          return params.row.priority ? `style-${params.row.priority}` : "";
        }}
        sx={{
          ".style-high": {
            bgcolor: "red",
            color: "white",
            "&:hover": {
              bgcolor: "darkgrey",
            },
          },
          ".style-low": {
            bgcolor: "green",
            color: "white",
            "&:hover": {
              bgcolor: "darkgrey",
            },
          },
          ".style-medium": {
            bgcolor: "orange",
            color: "white",
            "&:hover": {
              bgcolor: "darkgrey",
            },
          },
        }}
      />
    </Box>
  );
};

export default TaskList;
