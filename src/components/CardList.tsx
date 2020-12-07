import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { useCards } from "../store/cards/hooks";
import CardListItem from "./CardListItem";
import CardListItemSkeleton from "./CardListItemSkeleton";

interface CardListProps {
  loading?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
  })
);

function CardList({ loading = true }: CardListProps) {
  const cards = useCards();
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={2}>
        {loading ? (
          <>
            {Array.from(new Array(6)).map((_, idx) => (
              <CardListItemSkeleton key={idx} />
            ))}
          </>
        ) : (
          cards.map((card, idx) => <CardListItem card={card} key={idx} />)
        )}
      </Grid>
    </Container>
  );
}

export default CardList;
