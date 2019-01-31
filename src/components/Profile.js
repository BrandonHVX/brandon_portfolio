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
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BrandonPic from '../images/BrandonPic.jpg';

const styles = theme => ({
  card: {
    maxWidth: 300,
    height:475,
   justifyContent: 'center',
   
  },
  media: {
    height: 150,
    width:150,
   marginLeft: "80px",
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
     
        <CardMedia
          className={classes.media}
          image={BrandonPic}
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
          <h6> Brandon Gines</h6>
          Experienced creative professional with cross-functional skills including expertise in full stack web development, film/video production and digital design, product marketing, customer service and client engagement.
          
          </Typography>
          <Typography component="p">
          <h6> Brandon Gines</h6>
          Experienced creative professional with cross-functional skills including expertise in full stack web development, film/video production and digital design, product marketing, customer service and client engagement.
          
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