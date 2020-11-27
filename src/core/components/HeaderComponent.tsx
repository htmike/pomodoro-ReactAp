import React from 'react';

import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import { Settings } from '@material-ui/icons';

const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}

export default function Header() {
  return (
    <AppBar color="default">
      <Toolbar variant="dense" style={styles.toolbar}>
        <Button variant="outlined">login</Button>
        <span>Pomodoro App</span>
        <IconButton>
          <Settings />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}