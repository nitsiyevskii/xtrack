import * as React from 'react'
import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import ActionTypes from '../_actions/albums.actionTypes'
import { albumsActions } from '../_actions/albums.action'
const styles = (theme: Theme) => createStyles({
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`
    },
    card: {
        height: '100%',
        flexDirection: 'column',

    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    cardCell: {
        margin: 10,
        padding: '0 !important',
        width: 300
    }
});

interface AlbumsProps extends WithStyles<typeof styles> {
    albums: Array<any>
    getAlbums: () => (dispatch: Dispatch<ActionTypes>) => void
}
interface AlbumsState {
    albums: Array<any>
}
interface DispatchFromProps {
    getAlbums: () => void;
}
interface StateToProps {
    albums: any
}
class Albums extends React.Component<AlbumsProps, AlbumsState> {
    constructor(props: AlbumsProps) {
        super(props)
        this.state = {
            albums: []
        }
    }
    componentDidMount() {
        this.props.getAlbums()
    }
    render() {
        let { classes, albums } = this.props
        albums = albums ? albums : []
        return (
            <Grid container spacing={40} className={classes.cardGrid} alignItems="baseline" justify="space-around">
                {this.props.albums.map((album, id) => (
                    <Grid key={id} item className={classes.cardCell} >
                        <Link to={{
                            pathname: '/album/' + album.id,
                            albumTitle: album.title
                        }}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Album {album.id}
                                    </Typography>
                                    <Typography>
                                        {album.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        )
    }
}


function mapStateToProps(state: StateToProps) {
    return {
        ...state.albums
    };
}

function mapDispatchToProps(dispatch: Dispatch<ActionTypes>): DispatchFromProps {
    return {
        getAlbums: bindActionCreators(albumsActions.getAlbums, dispatch)
    };
}

export default connect<AlbumsState, DispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Albums));