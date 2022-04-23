import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, withRouter } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menuOpen:false
        };
    }    
    handleStateChange = (state) => {
        this.setState({
            menuOpen: state.isOpen
        })
    }
    closeMenu = () => {
        this.setState({
            menuOpen: false
        })
    }
    render() {
        const { location } = this.props;
        const path = location.pathname;
        return (
            <Menu 
                isOpen={this.state.menuOpen}
                onStateChange={(state)=>this.handleStateChange(state)}
            >
                <Link to='/' onClick ={()=>this.closeMenu()}
                    className={`menu-item ${path === '/' ? 'active-item' : ''}`}>
                    Home
                </Link>
                <Link to='/about' onClick ={()=>this.closeMenu()}
                    className={`menu-item ${path === '/about' ? 'active-item' : ''}`}>
                    About
                </Link>
                <Link to='/projects' onClick ={()=>this.closeMenu()}
                    className={`menu-item ${path === '/projects' ? 'active-item' : ''}`}>
                    Projects
                </Link>
                <Link to='/skills' onClick ={()=>this.closeMenu()} 
                    className={`menu-item ${path === '/skills' ? 'active-item' : ''}`}>
                    Skills
                </Link>
                <Link to='/contact' onClick ={()=>this.closeMenu()} 
                    className={`menu-item ${path === '/contact' ? 'active-item' : ''}`}>
                    Contact
                </Link>
            </Menu>
        );
    }
}

export default withRouter(NavBar);