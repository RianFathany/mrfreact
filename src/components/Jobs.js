/**
 * Created by AMP-3 on 9/23/2019.
 */
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Jobs extends Component{
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            items:[],
        };
    }

    componentDidMount(){
        //var urx = "http://localhost:2019/jobList";
        var url = "https://rx-node.herokuapp.com/jobList";
        fetch(url)
            .then(res => res.json())
            .then(parsedJson => parsedJson.values.map(data => (
                {
                    id: `${data.id}`,
                    type:  `${data.type}`,
                    company: `${data.company}`,
                    location: `${data.location}`,
                    title: `${data.title}`,
                    logo: `${data.company_logo}`,
                }
            )))
            .then(items => this.setState({
                items,
                isLoaded: true
            }))
            .catch(error => console.log("parsing failed", error))
    }

    render(){
        const { error, isLoaded, items} = this.state;

        if(error){
            return (
                    <div>
                        <div className="breadcumb-cs"><span>Jobs</span></div>

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
                    <div className="breadcumb-cs"><span>Jobs</span></div>

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
                    <div className="breadcumb-cs"><span>Jobs</span></div>

                    <div className="cs-panel fix-size-panel">
                        <div className="cs-body-panel">
                            {
                                items.length > 0 ? items.map((item,i) =>{
                                    const {id, type, company, location, title, logo} = item;
                                    return(
                                        <div className="dataPanel" key={i}>
                                            <div className="data">
                                                <span className="hidden">{id}</span>
                                                <div className="forTitle">
                                                    <span className="title">{title}</span>
                                                </div>
                                                <div className="forTitle">
                                                    <span className="type">{type}</span>
                                                </div>
                                                <div className="forName">
                                                    <span className="fa fa-home icon"></span>
                                                    <span className="name">{company}</span>
                                                </div>
                                                <div className="forLoc">
                                                    <span className="fa fa-map-pin icon"></span>
                                                    <span className="location">{location}</span>
                                                </div>
                                                <div>
                                                    <NavLink to={'/JobDetails/'+id}>
                                                        <button className="btn btn-default btn-sm">Details</button>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="image">
                                                {logo==='null' ? <span>-</span>:<img src={logo} alt="logo" />}
                                            </div>
                                        </div>
                                    );
                                }):null
                            }
                        </div>
                    </div>
                </div>
            );
        }
    }
};

export default Jobs;
