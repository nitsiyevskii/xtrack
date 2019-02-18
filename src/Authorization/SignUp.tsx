import * as React from 'react';
import { Avatar, Button, CssBaseline, FormControl, Input, InputLabel, Paper, Typography } from '@material-ui/core';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { userActions } from '../_actions/user.action'
import UserActionTypes from '../_actions/user.actionTypes'
import { Redirect } from 'react-router'

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


interface SignUpState {
    username: string
    password: string
    redirect: boolean
}
interface SignUpProps extends WithStyles<typeof styles> {
    error: string
    register: (username: string) => void
}

interface DispatchFromProps {
    register: (username: string) => void
}
interface StateToProps {
    user: any
}


class SignUp extends React.Component<SignUpProps, SignUpState> {
    constructor(props: SignUpProps) {
        super(props)
        this.state = {
            username: '',
            password: '',
            redirect: false
        }
    }
    handleRegisterClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        const { username, password } = this.state
        if (username && password) {
            this.props.register(username)
            this.setState({
                redirect: true
            })
        }
    }
    handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            username: e.currentTarget.value
        })
    }
    handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            password: e.currentTarget.value
        })
    }
    render() {
        const { classes } = this.props
        if (this.state.redirect) {
            return (
                <Redirect to="/" />
            )
        }
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
                            <Input name="username" onChange={this.handleUsernameChange} autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" onChange={this.handlePasswordChange} />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.handleRegisterClick}
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
}

function mapStateToProps(state: StateToProps) {
    return {
        ...state.user
    };
}

function mapDispatchToProps(dispatch: Dispatch<UserActionTypes>): DispatchFromProps {
    return {
        register: bindActionCreators(userActions.register, dispatch)
    };
}

export default connect<{}, DispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignUp))