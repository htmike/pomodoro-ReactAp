import { Card, CardHeader, CardContent, List } from "@material-ui/core"
import React, { useState } from "react"
import AddTaskModal from "./AddTaskModalComponent";
import TaskItem from "./TaskItemComponent";

export default function TasksMain(props: any) {
  const { setCurrentTask } = props;
  const [tasks, setTasks] = useState([{ name: 'Example task', complete: false }]);

  const progressTask = () => {
    const total = tasks.length;
    const complete = tasks.filter(task => task.complete).length;
    return `(${complete}/${total})`;
  }

  return (
    <React.Fragment>
      <h2>
        Tasks
      </h2>
      <Card>
        <CardHeader title={`Progress: ${progressTask()}`} />
        <CardContent>
          <List>
            {tasks.map(task => {
              return (
                <TaskItem tasks={tasks} setTasks={setTasks} task={task} setCurrentTask={setCurrentTask}/>
              )
            })}
            <AddTaskModal tasks={tasks} setTasks={setTasks} />
          </List>
        </CardContent>
      </Card>
    </React.Fragment>
  )
}
