import * as React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

export class NavigationBar extends React.Component {
    render() {
        return (
            <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Album layout
            </Typography>
          </Toolbar>
        </AppBar>
        )
    }
}