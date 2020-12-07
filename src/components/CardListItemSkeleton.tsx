import React from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

import useStyles from "./styles/cardlist";

function CardListItemSkeleton() {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <Skeleton
          variant="rect"
          animation="wave"
          className={classes.cardMedia}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            <Skeleton animation="wave" variant="text" />
          </Typography>
          <Typography>
            <Skeleton height={15} animation="wave" />
            <Skeleton height={15} animation="wave" />
            <Skeleton height={15} animation="wave" />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardListItemSkeleton;
