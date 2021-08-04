import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  text: {
    margin: theme.spacing(0, 0, 0, 2),
  },
}));

export default function LayoutList({ infos }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <List>
          {infos.map((element, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar className={classes.large} src={element.image}></Avatar>
              </ListItemAvatar>
              <ListItemText primary={element.name} className={classes.text} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}
