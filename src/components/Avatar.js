import React , {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import BrandonPic from './BrandonPic.jpg';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 260,
    height: 260,
  },
};

function ImageAvatars(props) {
    const { classes } = props;
    return (
        <div>
      <Grid container justify="center" alignItems="center">
        <Avatar alt="Remy Sharp" src={BrandonPic} className={classes.avatar} />
      </Grid>
  
      </div>
    );
  }




  export default withStyles(styles)(ImageAvatars);