import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Image from './../../Image';
import { Price } from './../CardsContainer/ContainerElements'

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
        minWidth: 275
    },
    media: {
        height: 140,
    },
});

export default function PriceCard(props) {
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
                        {props.title}
                    </Typography>
                </CardContent>

                <CardContent style={{ textAlign: "center" }}>
                    <Price variant="body2" component="h3">
                        {props.firstPrice}€
                    </Price>
                    <Typography variant="body2" component="p" >
                        (Sesión de 1 hora)
                    </Typography>
                </CardContent>
                <CardContent style={{ textAlign: "center" }}>
                    <Price variant="body2" component="h3">
                        {props.secondPrice}€
                    </Price>
                    <Typography variant="body2" component="p" >
                        (Sesión de 1 hora)
                    </Typography>
                </CardContent>
                {props.thirdPrice && <CardContent style={{ textAlign: "center" }}>
                    <Price variant="body2" component="h3">
                        {props.thirdPrice}€
                    </Price>
                    <Typography variant="body2" component="p" >
                        (Sesión de 1 hora)
                    </Typography>
                </CardContent>}
            </CardActionArea>
        </Card>
    );
}