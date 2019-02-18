import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase, IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { userActions } from '../_actions/user.action'
import UserActionTypes, { UserActionTypeKeys } from '../_actions/user.actionTypes'

const styles = (theme: Theme) => createStyles({
    grow: {
        flexGrow: 1
    },
    titleHome: {
        borderRight: '1px solid darkgray',
        paddingRight: 10,
        display: 'inline-block',
        lineHeight: 'normal',
        [ theme.breakpoints.down('sm') ]: {
            display: 'none'
        }
    },
    titleUsername: {
        paddingLeft: 10,
        display: 'inline-block',
        lineHeight: 'normal',
        [ theme.breakpoints.down('sm') ]: {
            display: 'none'
        }
    },
    iconUsername: {
        marginLeft: 5,
        marginRight: 5
    },
    iconHome: {
        display: 'inline-block',
        lineHeight: 'normal'
    },
    toolbar: {
        flexGrow: 1,
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        paddingLeft: 10
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.grey[ 300 ],
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.75),
        },

        marginLeft: 0,
        width: '100%',
        [ theme.breakpoints.up('sm') ]: {
            marginLeft: theme.spacing.unit * 5,
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
                width: 200,
                backgroundColor: theme.palette.common.white,
            },
        },
    },
    '@media(max-width: 600px)': {
        search: {
            display: 'none'
        },
    }
})

interface NavProps extends WithStyles<typeof styles> {
    signin: boolean
    username: string
    logout: () => void
}
interface NavState {
    showSignInButton: boolean,
    signin: boolean
    username: string
}
interface StateToProps {
    user: any
}
interface DispatchFromProps {
    logout: () => void
}

class NavigationBar extends React.Component<NavProps, NavState> {
    constructor(props: NavProps) {
        super(props)
        this.state = {
            showSignInButton: false,
            signin: true,
            username: ''
        }
    }
    onScroll = () => {
        let headerRect = document.getElementsByTagName('header')[ 0 ].getBoundingClientRect()
        if (headerRect.top == 0) {
            this.setState({
                showSignInButton: true
            })
            return
        }
        this.setState({
            showSignInButton: false
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll)
    }
    logout = () => {
        this.props.logout()
    }
    render() {
        const { classes } = this.props
        const { signin, username } = this.props
        return (
            <AppBar position="sticky" color="default">
                <Toolbar className={classes.toolbar}>
                    <Link to="/">
                        <HomeOutlined className={classes.iconHome} />
                        <Typography className={classes.titleHome} variant="h6" align="center" color="textPrimary" noWrap>
                            Home
                        </Typography>
                    </Link>
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
                    {!signin && this.state.showSignInButton &&
                        <Link to="/signin">
                            <Button variant="outlined" size="small" >
                                Sign in
                            </Button>
                        </Link>
                    }
                    {signin && (
                        <div>
                            <Typography className={classes.titleUsername} variant="body1" align="center" color="textPrimary" noWrap>
                                {username}
                            </Typography>
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : undefined}
                                aria-haspopup="true"
                                color="inherit"
                                className={classes.iconUsername}
                            >
                                <AccountCircle />
                            </IconButton>
                            <Button variant="outlined" size="small" onClick={this.logout} >
                                Logout
                            </Button>
                        </div>

                    )}
                </Toolbar>
            </AppBar>
        )
    }

}


function mapStateToProps(state: StateToProps) {
    return {
        ...state.user
    };
}

function mapDispatchToProps(dispatch: Dispatch<UserActionTypes>): DispatchFromProps {
    return {
        logout: bindActionCreators(userActions.logout, dispatch)
    };
}

export default connect<NavState, DispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NavigationBar))