import React, { useState } from 'react';

import Header from './core/components/HeaderComponent';
import TimerMain from './timer/components/TimerMainComponent';
import TasksMain from './tasks/components/taskMainComponent';

export default function App(): JSX.Element {
  const [currentTask, setCurrentTask] = useState({ name: 'Select task', complete: false });

  return (
    <React.Fragment>
      <Header />
      <TimerMain currentTask={currentTask} />
      <TasksMain setCurrentTask={setCurrentTask} />
    </React.Fragment>
  )
}
