import { ListItem, ListItemIcon, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
import { Task } from "../../core/interfaces/taskInterface";

export default function TaskItem(props: any) {
  const { tasks, setTasks, task, setCurrentTask } = props;

  const selectTask = (task: Task) => {
    if (task.complete) {
      setCurrentTask({ name: 'Select task', complete: false })
    } else {
      setCurrentTask(task);
    }
  }

  const deleteTask = () => {
    const rest = tasks.filter((item: Task) => item.name !== task.name);
    setTasks([...rest]);
  }

  return (
    <React.Fragment>
      <ListItem key={task.name} dense button onClick={() => selectTask(task)}>
        <ListItemIcon>
          <Checkbox checked={task.complete}></Checkbox>
        </ListItemIcon>
        <ListItemText>{task.name}</ListItemText>
        <ListItemSecondaryAction onClick={deleteTask}>
          <IconButton><Delete /></IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </React.Fragment>
  )
}
