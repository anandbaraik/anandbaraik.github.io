import React,{Component} from "react";
import { withRouter } from "react-router-dom";
import "./GoHome.css";
import homeIconWhite from "./../../assets/home_white.png";
import homeIconBlack from "./../../assets/home_black.png";

class GoHome extends Component {
    navigateToHome = () => {
        let {history} = this.props;
        history.push("/");
    }
    render(){
        let {location} = this.props;
        let whiteBtn = location.pathname === "/";
        return(
            <button onClick={this.navigateToHome}
                className={`go-home-btn ${
                    whiteBtn ? 'white-bg' : 'gradient-bg'
                }`}>
                <img src={whiteBtn ? homeIconBlack : homeIconWhite}
                    className="home-icon"
                    alt="Home-Icon"
                    loading="lazy"
                />
            </button>
        )
    }
}

export default withRouter(GoHome);