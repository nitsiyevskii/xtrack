import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import { Link } from 'react-router-dom';

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

export interface Props extends WithStyles<typeof styles> { }
let showSignInButton = false
class NavigationBar extends React.Component<Props, { showSignInButton: boolean }> {
    constructor(props: Props) {
        super(props)
        this.state = {
            showSignInButton: false
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

    render() {
        const { classes } = this.props
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
                    {this.state.showSignInButton &&
                        <Link to="/signin">
                            <Button variant="outlined" size="small" >
                                Sign in
                            </Button>
                        </Link>
                    }
                </Toolbar>
            </AppBar>
        )
    }

}

export default withStyles(styles)(NavigationBar);