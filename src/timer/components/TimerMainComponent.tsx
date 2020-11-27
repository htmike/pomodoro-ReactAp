import React, { useEffect, useState } from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import moment from "moment";
import 'moment-duration-format';
import TimerMode from "./TimerModeComponent";
import TimerControls from "./TimerControlsComponent";

export default function TimerMain(props: any) {
  const { currentTask, setCurrentTask } = props;

  const [timer, setTimer] = useState({ mode: 0, value: 1500, valueString: '25:00' });
  const [playTimer, setPlayTimer] = useState(false);

  const formatTimer = (seconds: number) => moment.duration(seconds, 'seconds').format('mm:ss');
  const setTimerMode = (mode: number, value: number) => {
    const valueString = formatTimer(value);
    setTimer({ mode, value, valueString })
  }
  const isActiveMode = (mode: number) => mode === timer.mode ? true : false;

  useEffect(() => {
    let title = timer.valueString;
    switch (timer.mode) {
      case 0:
        title += ' - Pomodoro';
        break;
      case 1:
        title += ' - Short break';
        break;
      case 2:
        title += ' - Long break';
        break;
      default:
        break;
    }
    document.title = title;
    if (timer.value === 0) {
      setPlayTimer(false);
      const completeTask = currentTask;
      completeTask.complete = true;
      setCurrentTask(completeTask);
    }
  }, [currentTask, setCurrentTask, timer])

  return (
    <React.Fragment>
      <h2>Timer</h2>
      <Card>
        <CardContent>
          <TimerMode setTimerMode={setTimerMode} isActiveMode={isActiveMode} playTimer={playTimer} />
          <Typography variant="h2">
            {timer.valueString}
          </Typography>
          <Typography variant="overline">
            <strong>{currentTask.name}</strong>
          </Typography>
          {currentTask.complete &&
            <Typography color="primary">Completed task! press checkbox to finish it!</Typography>
          }
          <TimerControls timer={timer} setTimer={setTimer} formatTimer={formatTimer} playTimer={playTimer} setPlayTimer={setPlayTimer} />
        </CardContent>
      </Card>
    </React.Fragment>
  )
}
