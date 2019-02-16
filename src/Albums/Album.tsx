import * as React from 'react'
import { GridList, GridListTile, Grid, GridListTileBar, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';

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
        marginBottom:4
    },
});

export interface propsAlbum extends WithStyles<typeof styles> {
    id: number
}

const photosData = [
    {
        "albumId": 1,
        "author": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "img": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "author": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "img": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "author": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "img": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "author": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "img": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "author": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "img": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "author": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "img": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "author": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "img": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "author": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "img": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "author": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "img": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "author": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "img": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "author": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "img": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "author": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "img": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "author": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "img": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "author": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "img": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "author": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "img": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "author": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "img": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "author": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "img": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "author": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "img": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "author": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "img": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "author": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "img": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "author": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "img": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "author": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "img": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "author": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "img": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "author": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "img": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "author": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "img": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "author": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "img": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "author": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "img": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "author": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "img": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "author": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "img": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "author": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "img": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "author": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "img": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "author": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "img": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "author": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "img": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "author": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "img": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "author": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "img": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "author": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "img": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "author": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "img": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "author": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "img": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "author": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "img": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    }, ]

class Album extends React.Component<propsAlbum> {
    constructor(props: propsAlbum) {
        super(props)
    }

    render() {
        const { classes } = this.props
        return (
            <Grid
                justify="space-around"
                alignItems="center"
                wrap="wrap"
                direction="row"
                className={classes.albumGrid}
                container>
                <GridList className={classes.albumGridList}>
                    {photosData.map((photaData, id) => (
                        <div key={id} style={{
                                                width: '200px', 
                                                height: 'auto'
                                            }}
                        >
                            <li style={{flexGrow: 1}}>
                                <div className={classes.albumGridListElem}>
                                    <img src={photaData.thumbnailUrl} className={classes.albumGridListElemImg} />
                                    <GridListTileBar
                                        className={classes.albumGridListDescElem}
                                        title={photaData.title}
                                        subtitle={<span>by: {photaData.author}</span>}
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

export default withStyles(styles)(Album);