import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import MyAvatar from './Avatar.js';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BrandonPic from '../images/BrandonPic.jpg';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  card: {
    maxWidth: 300,
    height:350,
   justifyContent: 'center',
   paddingTop:30,
  },
  media: {
    height: 150,
    maxWidth:150,
  
    justifyContent: 'center',

  },
  bigAvatar: {
    
    width: 150,
    height: 150,
    margin: 'auto',
   
    justifyContent: 'center',

  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
     
        <CardMedia>
     <Avatar alt="Remy Sharp" src={BrandonPic} className={classes.bigAvatar} />   
</CardMedia>

        <CardContent>
        <Typography component="p">
        <Chip label="Contact" className="title-button" variant="outlined" color="primary"/>

          
          </Typography>

        <Typography component="p">
          <h4> Brandon Gines</h4>
          
          </Typography>
        
          <Typography component="p"> 
          <div id="contact">
          <div class="item">
          <a href="https://github.com/BrandonHVX">
          <i class="icon-contact fab fa-github"></i>
         <span class="caption">Git Hub</span></a>
</div>
<div class="item">

<a href="https://www.linkedin.com/in/brandon-gines-02a9a6169">
<i class="icon-contact fab fa-linkedin"></i>
<span class="caption">LinkedIn</span></a>
</div>

<div class="item">
<a href="mailto:brandongines@gmail.com">
<i class="icon-contact fas fa-envelope "></i>
    <span class="caption">E-mail</span></a>
</div>

<div class="item">
<a href="tel://1-310-651-1330"><i class="icon-contact fas fa-phone"></i>
    <span class="caption">Phone  </span></a>
</div>

     </div>
          </Typography>
       
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          
        
        </CardActions>
      
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);