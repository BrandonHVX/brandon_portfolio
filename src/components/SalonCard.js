import React from 'react';
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
import iphone from './Apple-X.png';
import Plyr from 'react-plyr';
import Popup from "reactjs-popup";
import BurgerIcon from './BurgerIcon';
import Menu from './Menu';
import MyAvatar from './Avatar.js';

const contentStyle = {
  background: "none",
  width: 300,
  
  margin: "auto",
  border: "none", 
  padding: 0,
};


const styles = theme => ({
  card: {
    maxWidth: 335,
    marginTop: 90,
    margin: 20,
    padding: 10,


  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
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
      <Card className="projects-card">
 
        <CardMedia>
       
        <Popup
            modal
            overlayStyle={{ background: "rgba(4, 240, 220, 0.93)" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <MyAvatar open={open} />}>
            {close => <Menu close={close} />}
          </Popup>

        </CardMedia>

        <CardContent>
            <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            </Typography>
        </CardContent>
        
       
       </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);