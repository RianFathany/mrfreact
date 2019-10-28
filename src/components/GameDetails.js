/**
 * Created by AMP-3 on 10/28/2019.
 */
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";

class GameDetails extends Component{

    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount(){
        var url = "https://rawg-video-games-database.p.rapidapi.com/games/"+this.props.match.params.slug;

        fetch(url,{
            "method":"GET",
            "headers":{
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "x-rapidapi-key":"9cbdf5bedemshc005c46cbaad3d5p1f7cafjsn3f8e7837bfa1"
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded:true,
                        items:result
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
        const{ error, isLoaded, items } = this.state;

        if(error){
            return (
                <div>
                    <div className="breadcumb-cs"><span>Game Details</span></div>

                    <div className="cs-panel fix-size-panel black-panel">
                        <div>
                            <div className="whiteText">Error: {error.message}</div>
                        </div>
                    </div>
                </div>
            )
        }
        else if(!isLoaded){
            return (
                <div>
                    <div className="breadcumb-cs"><span>Game Details</span></div>

                    <div className="cs-panel fix-size-panel black-panel">
                        <div className="text-center whiteText">
                            <div><i className="fa fa-gear fa-spin"></i> Loading...</div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <div className="breadcumb-cs">
                        <NavLink to='/game' className="aLink">
                            <span>Games</span>
                        </NavLink>
                        <span className="linkDivider fa fa-angle-right"></span>
                        <span>{items.name}</span>
                    </div>
                    <div className="cs-panel fix-size-panel black-panel forGameDetails">
                        <div className=" cs-body-panel whiteText o-x-hidden">
                            <div className="row head">
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                    <img src={items.background_image} />
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-6 col-xs-6">
                                    <div className="title">{items.name}</div>
                                    <div className="rating">
                                        <i className="fa fa-star yellowText"></i>&nbsp;
                                        {items.rating}
                                    </div>
                                    <div className="data"><span><i className="fa fa-calendar"></i>&nbsp;&nbsp;</span>{items.released}</div>
                                    <div className="data">
                                        <a href={items.website}>
                                            <span><i className="fa fa-link"></i>&nbsp;&nbsp;</span>{items.website}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="body" >
                                <div className="desc">Description</div>
                                <div>{ReactHtmlParser(items.description)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }

}

export default GameDetails;
