import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
//import { red } from '@material-ui/core/colors';
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "0 5vw 0 5vw",
    position: "relative",
    overflow: "unset",
    zIndex: "3",
  },
  avatar: {
    //backgroundColor: red[500],
    float: "left",
    width: "56px",
    height: "56px",
    marginTop: "-20px",
    marginLeft: "15px",
    boxShadow:
      "0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(244 67 54 / 40%)",
    background: "linear-gradient(60deg, #ef5350, #e53935)",
  },
  title: {
    margin: "0 0 0 56px",
  },
}));

function LayoutCard({ icon, content, subtitle }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Avatar aria-label="icon" variant="rounded" className={classes.avatar}>
        {icon}
      </Avatar>
      <CardHeader className={classes.title} subheader={subtitle} />
      <Divider variant="middle" />
      <div className="contentWrapper">{content}</div>
    </Card>
  );
}

export default LayoutCard;
