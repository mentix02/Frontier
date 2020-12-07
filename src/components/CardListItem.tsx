import React from "react";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

import useStyles from "./styles/cardlist";
import { Card as CardType } from "../store/cards/types";

function CardListItem({ card }: { card: CardType }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          title={card.title}
          image={card.thumbnail}
          className={classes.cardMedia}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            <Link href={card.url} target="_blank" rel="noreferrer">
              {card.title}
            </Link>
          </Typography>
          <Typography>{card.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardListItem;
