import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "90%",
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      padding: theme.spacing(6),
      backgroundColor: theme.palette.background.paper,
    },
    cardActions: {
      paddingTop: 0,
    },
  })
);

export default useStyles;
