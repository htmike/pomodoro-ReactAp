import React from "react";
import { ButtonGroup, Button, Typography } from "@material-ui/core";

export default function TimerMode(props: any) {
  const { setTimerMode, isActiveMode, playTimer } = props;

  const setPomodoroMode = () => setTimerMode(0, 1500);
  const setShortBreakMode = () => setTimerMode(1, 10);
  const setLongBreakMode = () => setTimerMode(2, 900);

  const isPomodoroActive = isActiveMode(0);
  const isShortBreakActive = isActiveMode(1);
  const isLongBreakActive = isActiveMode(2);

  return (
    <React.Fragment>
      <ButtonGroup size="small">
        <Button onClick={setPomodoroMode} color={isPomodoroActive ? 'primary' : 'default'} disabled={playTimer}>POMODORO</Button>
        <Button onClick={setShortBreakMode} color={isShortBreakActive ? 'primary' : 'default'} disabled={playTimer}>SHORT BREAK</Button>
        <Button onClick={setLongBreakMode} color={isLongBreakActive ? 'primary' : 'default'} disabled={playTimer}>LONG BREAK</Button>
      </ButtonGroup>
      <Typography variant="caption">To stop, select any mode</Typography>
    </React.Fragment>
  )
}
