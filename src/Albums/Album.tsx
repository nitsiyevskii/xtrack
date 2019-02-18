import * as React from 'react'
import {
    GridList, Typography, Grid, GridListTileBar, IconButton, Button, Dialog, DialogTitle,
    DialogContent, DialogContentText, TextField, DialogActions, Fab
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import ActionTypes from '../_actions/albums.actionTypes'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { albumsActions } from '../_actions/albums.action'

const styles = (theme: Theme) => createStyles({
    albumIcon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    albumGrid: {
        display: 'block',
        paddingTop: 20
    },
    albumGridList: {
        overflow: 'hidden',
        flex: 1,
        justifyContent: "center",
        paddingBottom: 10,
        paddingTop: 20,
        margin: 0,
    },
    albumGridListElem: {
        height: '100%',
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform .25s ease',
        '&:hover': {
            transform: 'scale(1.25)',
            zIndex: 100
        }
    },
    albumGridListElemImg: {
        width: '100%'
    },
    albumGridListDescElem: {
        marginBottom: 4
    },
    albumTitle: {
        flexGrow: 1
    }
});

interface PropsLocation extends Location {
    albumTitle: string
}
interface PropsAlbum extends WithStyles<typeof styles> {
    id: number
    location: PropsLocation
    photos: Array<any>
    signin: boolean
    photoUploaded: boolean
    getPhotos: (albumId: number) => void
    uploadPhoto: (description: string, photo: File) => void
    uploaded: () => void
    match: any

}
interface AlbumState {
    photos: Array<any>,
    showPhotoDialog: boolean
    description: string
    photo: File
}
interface DispatchFromProps {
    getPhotos: (albumId: number) => void
    uploadPhoto: (description: string, photo: File) => void
    uploaded: () => void
}
interface StateToProps {
    albums: any
    user: any
}

class Album extends React.Component<PropsAlbum, AlbumState> {
    constructor(props: PropsAlbum) {
        super(props)
        this.state = {
            photos: [],
            showPhotoDialog: false,
            description: '',
            photo: null
        }
    }

    componentDidMount() {
        const albumId = this.props.match.params.id
        this.props.getPhotos(albumId)
    }

    handleOpenPhotoDialog = () => {
        this.setState({
            showPhotoDialog: true
        })
    }

    handleClosePhotoDialog = () => {
        this.setState({
            showPhotoDialog: false
        })
    }

    handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i
        if (allowedExtensions.exec(e.currentTarget.value)) {
            this.setState({
                photo: e.currentTarget.files[ 0 ]
            })
        } else {
            e.currentTarget.value = ''
        }
    }

    handleUploadClick = () => {
        if (this.state.description && this.state.photo) {
            this.setState({
                showPhotoDialog: false
            })
            this.props.uploadPhoto(this.state.description, this.state.photo)
        }

    }

    uploaded = () => {
        this.props.uploaded()
    }

    handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            description: e.currentTarget.value
        })
    }

    render() {
        let { classes, photos, signin, photoUploaded } = this.props
        let { albumTitle } = this.props.location
        albumTitle = albumTitle ? 'Album: ' + albumTitle : 'Album'
        photos = photos ? photos : []
        return (
            <Grid
                justify="space-around"
                alignItems="center"
                wrap="wrap"
                direction="row"
                className={classes.albumGrid}
                container>
                <div style={{ display: 'flex', justifyContent: 'space-around', padding: 10 }}>
                    <div style={{ flexGrow: 1 }}></div>
                    <Typography className={classes.albumTitle} variant="h5" component="h2">
                        {albumTitle}
                    </Typography>

                    {signin &&
                        <div>
                            <Button variant="outlined" color="primary" onClick={this.handleOpenPhotoDialog}>
                                + Add Photo
                            </Button>
                            <Dialog
                                open={this.state.showPhotoDialog}
                                onClose={this.handleClosePhotoDialog}
                                aria-labelledby="form-dialog-title"
                            >
                                <DialogTitle id="form-dialog-title">Add image</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Choose image and add some description to it.
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Description"
                                        type="text"
                                        fullWidth
                                        onChange={this.handleDescriptionChange}
                                    />
                                    <input className="fileInput" type="file" onChange={this.handleImageChange} />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleClosePhotoDialog} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={this.handleUploadClick} color="primary">
                                        Upload
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    }
                </div>
                {photoUploaded && setTimeout(this.uploaded, 5000) && <h1>Uploaded!</h1>}
                <GridList className={classes.albumGridList}>
                    {photos.map((photo, id) => (
                        <div key={id} style={{
                            width: '200px',
                            height: 'auto'
                        }}
                        >
                            <li style={{ flexGrow: 1 }}>
                                <div className={classes.albumGridListElem}>
                                    <img src={photo.thumbnailUrl} className={classes.albumGridListElemImg} />
                                    <GridListTileBar
                                        className={classes.albumGridListDescElem}
                                        title={photo.title}
                                        subtitle={<span>by: {photo.author}</span>}
                                        actionIcon={
                                            <IconButton className={classes.albumIcon}>
                                                <InfoIcon />
                                            </IconButton>
                                        }
                                    />
                                </div>
                            </li>
                        </div>
                    ))}
                </GridList>
            </Grid>
        )
    }
}

function mapStateToProps(state: StateToProps) {
    return {
        ...state.albums,
        ...state.user
    };
}

function mapDispatchToProps(dispatch: Dispatch<ActionTypes>): DispatchFromProps {
    return {
        getPhotos: bindActionCreators(albumsActions.getPhotos, dispatch),
        uploadPhoto: bindActionCreators(albumsActions.uploadPhoto, dispatch),
        uploaded: bindActionCreators(albumsActions.uploaded, dispatch)
    };
}

export default connect<AlbumState, DispatchFromProps, void>(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Album));