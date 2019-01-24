import React , {Component} from "react";
import Button from '@material-ui/core/Button';
import { BrowserRouter, withRouter, Route, Link } from "react-router-dom";
import phone from '../images/iphone.png';



class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }
  
    render() {
      return this.props.children;
    }
  }
  
  export default withRouter(ScrollToTop);