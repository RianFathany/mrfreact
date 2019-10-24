/**
 * Created by AMP-3 on 10/9/2019.
 */
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";
import Moment from "react-moment";

class JobDetails extends Component{

    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount(){
        var urx = "http://localhost:2019/jobDetail/"+this.props.match.params.id;
        var url = "https://rx-node.herokuapp.com/jobDetail/"+this.props.match.params.id;

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded:true,
                        items: result.values
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render(){
        const {error, isLoaded, items} = this.state;

        if(error){
            return (
                <div>
                    <div className="breadcumb-cs">
                        <NavLink to={process.env.PUBLIC_URL+'/jobs'} className="aLink"><span>Jobs </span></NavLink>
                        <span className="linkDivider fa fa-angle-right"></span>
                        <span>Job Detail</span>
                    </div>

                    <div className="cs-panel fix-size-panel">
                        <div>
                            <div>Error: {error.message}</div>
                        </div>
                    </div>
                </div>
            )
        }
        else if(!isLoaded){
            return (
                <div>
                    <div className="breadcumb-cs">
                        <NavLink to={process.env.PUBLIC_URL+'/jobs'} className="aLink"><span>Jobs </span></NavLink>
                        <span className="linkDivider fa fa-angle-right"></span>
                        <span>Job Detail</span>
                    </div>
                    <div className="cs-panel fix-size-panel">
                        <div className="text-center">
                            <div><i className="fa fa-gear fa-spin"></i> Loading...</div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div>
                    <div className="breadcumb-cs">
                        <NavLink to={process.env.PUBLIC_URL+'/jobs'} className="aLink"><span>Jobs </span></NavLink>
                        <span className="linkDivider fa fa-angle-right"></span>
                        <span>Job Detail</span>
                        <span className="linkDivider fa fa-angle-right"></span>
                        <span>{items.title} ({items.company})</span>
                    </div>

                    <div className="cs-panel fix-size-panel">
                        <div className="cs-body-panel">
                            <span className="hidden">{items.id}</span>
                            <div className="detailLogo">
                                {items.company_logo===null ? <span>-</span>:<img src={items.company_logo} alt="logo" />}
                            </div>
                            <div className="detailData"><div className="key">Title</div><div className="value">{items.title}</div></div>
                            <div className="detailData"><div className="key">Type</div><div className="value">{items.type}</div></div>
                            <div className="detailData"><div className="key">Company</div><div className="value">{items.company}</div></div>
                            <div className="detailData"><div className="key">Location</div><div className="value">{items.location}</div></div>
                            <div className="detailData"><div className="key">Post Date</div><div className="value"><Moment format="YYYY-MM-DD H:m:s">{items.created_at}</Moment></div></div>
                            <div className="detailData"><div className="key">Description</div><div className="value">{ReactHtmlParser(items.description)}</div></div>
                            <div className="detailData"><div className="key">How To Appy</div><div className="value">{ReactHtmlParser(items.how_to_apply)}</div></div>
                        </div>
                    </div>
                </div>
            );
        }
    }

}

export default JobDetails;