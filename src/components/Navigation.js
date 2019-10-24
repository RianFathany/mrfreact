/**
 * Created by AMP-3 on 9/23/2019.
 */
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Navigation extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.dropdownChild();
    }

    handleClick = () => {
        const idx = document.getElementById("standardSidenav");
        if(idx.style.width === '230px'){
            idx.style.width='0px';
            idx.style.transition='0.5s';
        }else{
            idx.style.width='230px';
            idx.style.transition='0.5s';
        }
    };

    dropdownChild(){
        const dropdown = document.getElementsByClassName("dropdown-sidenav");
        for (var i=0;i<dropdown.length ; i++){
            dropdown[i].addEventListener("click",function () {
                /*this.classList.toggle("active");*/
                const dropdownContent = this.nextElementSibling;
                if(dropdownContent.style.display === "none" || dropdownContent.style.display === "" ){
                    dropdownContent.style.display = "block";
                }else{
                    dropdownContent.style.display = "none";
                }
            });
        }
    }

    render(){

        const currestStyle={
            width:'0px',
            display:'block'
        };

        return (
            <div>
                <div className="menu-bar">
                    <div className="menu-icon">
                        <div className="my-icon"></div>
                        <div className="my-title">MR.FREACT</div>
                    </div>
                    <div className="menuLine text-right">
                        <NavLink to={process.env.PUBLIC_URL+'/'}>Home</NavLink>
                        <NavLink to={process.env.PUBLIC_URL+'/about'}>About</NavLink>
                        <NavLink to={process.env.PUBLIC_URL+'/contact'}>Contact</NavLink>
                        <div className="dropdown">
                            <a>Data</a>
                            <div className="dropdown-content">
                                <NavLink to={process.env.PUBLIC_URL+'/jobs'}>Jobs</NavLink>
                                <NavLink to={process.env.PUBLIC_URL+'/images'}>Images</NavLink>
                                <NavLink to={process.env.PUBLIC_URL+'/epl'}>EPL</NavLink>
                            </div>
                        </div>
                        <div className="icon-bar" onClick={this.handleClick}>
                            <span className="fa fa-bars"></span>
                        </div>
                    </div>
                </div>
                <div id="standardSidenav" style={currestStyle}  className="sidenav">
                    <NavLink to={process.env.PUBLIC_URL+'/'}>Home</NavLink>
                    <NavLink to={process.env.PUBLIC_URL+'/about'}>About</NavLink>
                    <NavLink to={process.env.PUBLIC_URL+'/contact'}>Contact</NavLink>
                    <button className="dropdown-sidenav">
                        Data <i className="fa fa-caret-down"/>
                    </button>
                    <div className="dropdown-sidenav-container">
                        <NavLink to={process.env.PUBLIC_URL+'/jobs'}>Jobs</NavLink>
                        <NavLink to={process.env.PUBLIC_URL+'/images'}>Images</NavLink>
                        <NavLink to={process.env.PUBLIC_URL+'/epl'}>EPL</NavLink>
                    </div>
                </div>
                <script src="sidebarJs.js"></script>
            </div>
        );
    }
}

export default Navigation;