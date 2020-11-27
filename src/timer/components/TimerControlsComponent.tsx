import { IconButton } from "@material-ui/core";
import { Pause, PlayArrow } from "@material-ui/icons";
import React, { useState } from "react";

export default function TimerControls(props: any) {
  const [playTimer, setPlayTimer] = useState(false);
  
  const togglePlayTimer = () => setPlayTimer(!playTimer);

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
