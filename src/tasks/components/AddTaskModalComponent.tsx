import { ListItem, ListItemIcon, ListItemText, Dialog, DialogContent, TextField, Button, Checkbox } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useState } from "react";
import { Task } from "../../core/interfaces/taskInterface";

export default function AddTaskModal(props: any) {
  const { tasks, setTasks } = props;

  const [newTask, setNewTask] = useState({
    name: '',
    complete: false
  });
  const [openTaskModal, setOpenTaskModal] = useState(false);

  const handleOpenTask = () => setOpenTaskModal(true);
  const handleCloseTask = () => setOpenTaskModal(false);

  const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({ name: event.target.value, complete: false });
  }

  const saveTask = () => {
    setTasks((tasks: Task[]) => [...tasks, newTask]);
    setNewTask({ name: '', complete: false });
    handleCloseTask();
  }

  return (
    <React.Fragment>
      <ListItem dense button>
        <ListItemIcon>
          <Add />
        </ListItemIcon>
        <ListItemText onClick={handleOpenTask}>Add new task</ListItemText>
        <Dialog open={openTaskModal} onClose={handleCloseTask}>
          <DialogContent style={{ display: 'flex' }}>
            <TextField label="Add task name" value={newTask.name} onChange={handleChangeTask} />
            <Button variant="contained" color="primary" onClick={saveTask} disabled={newTask.name === ''}>Save</Button>
          </DialogContent>
        </Dialog>
      </ListItem>
    </React.Fragment>
  )
}
