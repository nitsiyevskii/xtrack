import * as React from 'react';
import { Avatar, Button, CssBaseline, FormControl, Input, InputLabel, Paper, Typography } from '@material-ui/core';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = (theme: Theme) => createStyles({
    main: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [ theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2) ]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

export interface SignUpProps extends WithStyles<typeof styles> { }

function SignUp(props: SignUpProps) {
    const { classes } = props;

    return (
        <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <SettingsOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input id="username" name="username" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input name="password" id="password" />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Register
                    </Button>
                    <Link to="/">
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="default"
                            className={classes.submit}
                        >
                            Back
                        </Button>
                    </Link>
                </form>
            </Paper>
        </main>
    );
}

export default withStyles(styles)(SignUp);