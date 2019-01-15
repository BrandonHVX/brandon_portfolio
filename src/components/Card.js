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
import iphone from '../images/Apple-X.jpg';


class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div class="card-container">
  <div class="card card-1">
    <div class="card-img"></div>
    <a href="" class="card-link">
      <div class="card-img-hovered"></div>
    </a>
    <div class="card-info">
      <div class="card-about">
        <a class="card-tag tag-news">NEWS</a>
      <div class="card-time">6/11/2018</div>
      </div>
      <h1 class="card-title">There have been big Tesla accident at New Jersey</h1>
      <div class="card-creator">by <a href="">Sardorbek Usmonov</a></div>
    </div>
  </div>
  <div class="card card-2">
    <div class="card-img"></div>
    <a href="" class="card-link">
      <div class="card-img-hovered"></div>
    </a>
    <div class="card-info">
      <div class="card-about">
        <a class="card-tag">Tech</a>
      <div class="card-time">6/07/2018</div>
      </div>
      <h1 class="card-title">Samsung laptops is exploding again</h1>
      <div class="card-creator">by <a href="">Tyler Platt</a></div>
    </div>
  </div>
  <div class="card card-3">
    <div class="card-img"></div>
    <a href="" class="card-link">
      <div class="card-img-hovered"></div>
    </a>
    <div class="card-info">
      <div class="card-about">
        <a class="card-tag tag-deals">Deals</a>
      <div class="card-time">5/27/2018</div>
      </div>
      <h1 class="card-title">Apple is having big Sale for the first time</h1>
      <div class="card-creator">by <a href="">Timur Mirzoyev</a></div>
    </div>
  </div>
  <div class="card card-4">
    <div class="card-img"></div>
    <a href="" class="card-link">
      <div class="card-img-hovered"></div>
    </a>
    <div class="card-info">
      <div class="card-about">
        <a class="card-tag tag-politics">Politics</a>
      <div class="card-time">5/20/2018</div>
      </div>
      <h1 class="card-title">Net-Nutrality is coming to its end</h1>
      <div class="card-creator">by <a href="">Gregoy Trem</a></div>
    </div>
  </div>
</div>
    );
  }
}


export default RecipeReviewCard;