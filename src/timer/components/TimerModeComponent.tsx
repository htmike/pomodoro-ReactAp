import React, { useEffect } from "react";
import { ButtonGroup, Button } from "@material-ui/core";

export default function TimerMode(props: any) {
  const { setTimerMode, isActiveMode } = props;

  const setPomodoroMode = () => setTimerMode(0, 1500);
  const setShortBreakMode = () => setTimerMode(1, 300);
  const setLongBreakMode = () => setTimerMode(2, 900);

  const isPomodoroActive = isActiveMode(0);
  const isShortBreakActive = isActiveMode(1);
  const isLongBreakActive = isActiveMode(2);
  
  return (
    <ButtonGroup size="small">
      <Button onClick={setPomodoroMode} color={isPomodoroActive ? 'primary' : 'default'}>POMODORO</Button>
      <Button onClick={setShortBreakMode} color={isShortBreakActive ? 'primary' : 'default'}>SHORT BREAK</Button>
      <Button onClick={setLongBreakMode} color={isLongBreakActive ? 'primary' : 'default'}>LONG BREAK</Button>
    </ButtonGroup>
  )
}
