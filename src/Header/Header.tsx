import * as React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import './header.less';

export function Header() {
    return (
        <React.Fragment>
            <CssBaseline />
            <div className="headerContainer">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Photo Gallery
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    This page is used to view, add, edit photos and albums. Each registered user can make their own changes. For example, add a photo and description to it.
                </Typography>
                <div>
                    <Grid container spacing={16} justify="center">
                        <Grid item>
                            <Link to="/signup">
                                <Button variant="contained" color="secondary">
                                    Sign up
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/signin">
                                <Button variant="outlined" color="secondary">
                                    Sign in
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    )
}