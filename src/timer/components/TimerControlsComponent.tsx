import { IconButton } from "@material-ui/core";
import { Pause, PlayArrow } from "@material-ui/icons";
import React, { useEffect } from "react";

export default function TimerControls(props: any) {
  const { timer, setTimer, formatTimer, playTimer, setPlayTimer } = props;

  const togglePlayTimer = () => setPlayTimer(!playTimer);

  useEffect(() => {
    if (playTimer && timer.value > 0) {
      const interval = setInterval(countdown, 1000);
      return () => clearInterval(interval);
    }
  })

  const countdown = () => {
    setTimer({mode: timer.mode, value: timer.value - 1, valueString: formatTimer(timer.value - 1)})
}

return (
  <React.Fragment>
    <IconButton onClick={togglePlayTimer}>
      {playTimer
        ? <Pause />
        : <PlayArrow />
      }
    </IconButton>
  </React.Fragment>
)

}
