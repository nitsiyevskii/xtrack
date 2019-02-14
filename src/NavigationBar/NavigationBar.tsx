import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = (theme: Theme) => createStyles({
    grow: {
        flexGrow: 1
    },
    navTitle: {
        borderRight: '1px solid darkgray',
        paddingRight: 10
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.grey[300],
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.75),
        },
        
        marginLeft: 0,
        width: '100%',
        [ theme.breakpoints.up('sm') ]: {
            marginLeft: theme.spacing.unit*5,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 5,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 5,
        transition: theme.transitions.create('width'),
        width: '100%',
        [ theme.breakpoints.up('sm') ]: {
            width: 120,
            '&:focus': {
                width: 250,
                backgroundColor: theme.palette.common.white,
            },
        },
    },
})

export interface Props extends WithStyles<typeof styles> { }

function NavigationBar(props: Props) {
    const { classes } = props
    return (
        <AppBar position="sticky" color="default">
            <Toolbar style={{ flexGrow: 1, justifyContent: 'space-between' }}>
                <Typography className={classes.navTitle} variant="h6" align="center" color="textPrimary" noWrap>
                    Photo gallery
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                    />
                </div>
                <div className={classes.grow} />
                <Button variant="outlined" size="small" >
                    Sign in
                </Button>
            </Toolbar>
        </AppBar>
    )

}

export default withStyles(styles)(NavigationBar);