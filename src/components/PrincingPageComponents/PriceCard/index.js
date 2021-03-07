import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Image from './../../Image';

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
        minWidth: 275
    },
    media: {
        height: 140,
    },
});

export default function PriceCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <div style={{ display: "flex", justifyContent: "center" }}>

                    <Image
                        src="sunset.jpg"
                        alt="Sunset Image"
                        style={

                            { height: "70%", width: "70%", marginTop: "10px" }
                        } />
                </div>
                <CardContent style={{ textAlign: "center" }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                </CardContent>

                <CardContent style={{ textAlign: "center" }}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}