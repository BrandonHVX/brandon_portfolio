import React , {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import BrandonPic from '../images/BrandonPic.jpg';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 40,
    height: 40,
  },
};

function ImageAvatars(props) {
    const { classes } = props;
    return (
        <div>

      <Avatar alt="Remy Sharp" src={BrandonPic} className={classes.bigAvatar} />
    
      </div>
    );
  }

  ImageAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
  };


  export default withStyles(styles)(ImageAvatars);