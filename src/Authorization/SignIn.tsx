import * as React from 'react';
import { Avatar, Button, CssBaseline, FormControl, FormControlLabel, Checkbox, Input, InputLabel, Paper, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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

interface SignInProps extends WithStyles<typeof styles> {
  username: string
  error: string
  signin: boolean
  login: (username: string) => void
}
interface DispatchFromProps {
  login: (username: string) => void
}
interface StateToProps {
  user: any
}
interface SignInState {
  username: string
}

class SignIn extends React.Component<SignInProps, SignInState>{
  constructor(props: SignInProps) {
    super(props)
    this.state = {
      username: ''
    }
  }
  signIn = () => {
    const { username } = this.state
    if (username) {
      this.props.login(username)
    }
  }
  handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      username: e.currentTarget.value
    })
  }
  render() {
    const { classes } = this.props
    let { error, signin } = this.props
    if (signin) {
      return (
        <Redirect to="/"></Redirect>
      )
    }
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input id="username" name="username" autoComplete="username" autoFocus onChange={this.handleUserName} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.signIn}
            >
              Sign in
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
    login: bindActionCreators(userActions.login, dispatch)
  };
}

export default connect<SignInState, DispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignIn))