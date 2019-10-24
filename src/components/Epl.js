/**
 * Created by AMP-3 on 10/11/2019.
 */
import React, { Component } from "react";


class Epl extends Component{
    render(){
        return(
            <div className="col-sm-12 paddingless">
                <div className="col-sm-3 paddingless">
                    <Content></Content>
                </div>
                <div className="col-sm-9 paddingless">
                    <Club></Club>
                </div>
            </div>
        )
    }
}

class Club extends Component{
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            items:[]
        };
    }

    componentDidMount(){

        var url = "https://api-football-v1.p.rapidapi.com/v2/teams/league/2"

        fetch(url,{
            "method":"GET",
            "headers":{
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "9cbdf5bedemshc005c46cbaad3d5p1f7cafjsn3f8e7837bfa1"
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded:true,
                        items:result.api.teams
                    });
                },
                (error)=>{
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render(){
        const { error, isLoaded, items} = this.state;

        if(error){
            return (
                <div>
                    <div className="breadcumb-cs"><span>Premier League Profile Club 2018-2019</span></div>

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
                    <div className="breadcumb-cs"><span>Premier League Profile Club 2018-2019</span></div>

                    <div className="cs-panel fix-size-panel">
                        <div className="text-center">
                            <div><i className="fa fa-gear fa-spin"></i> Loading...</div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <div className="breadcumb-cs"><span>Premier League Profile Club 2018-2019</span></div>

                    <div className="cs-panel fix-size-panel">
                        <div className="cs-body-panel ">
                            {
                                items.length > 0 ? items.map((item,i) => {
                                    return(
                                        <div key={i} className="forEpl col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                            <div className="logo">
                                                <img src={item.logo} />
                                            </div>
                                            <div className="data">
                                                <div className="dataLabel">{item.name}</div>
                                                <div className="data-child">
                                                    <label>Country</label>
                                                    <span>{item.country}</span>
                                                </div>
                                                <div className="data-child">
                                                    <label>Founded</label>
                                                    <span>{item.founded}</span>
                                                </div>
                                                <div className="data-child">
                                                    <label>Venue</label>
                                                    <span>{item.venue_name}</span>
                                                </div>
                                                <div className="data-child">
                                                    <label>Venue Surface</label>
                                                    <span>{item.venue_surface}</span>
                                                </div>
                                                <div className="data-child">
                                                    <label>Venue Address</label>
                                                    <span>{item.venue_address}</span>
                                                </div>
                                                <div className="data-child">
                                                    <label>Venue City</label>
                                                    <span>{item.venue_city}</span>
                                                </div>
                                                <div className="data-child">
                                                    <label>Venue Capacity</label>
                                                    <span>{item.venue_capacity}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }):null
                            }
                        </div>
                    </div>
                </div>
            )
        }
    }

}

class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            items:[]
        };
    }

    componentDidMount(){

        var url = "https://api-football-v1.p.rapidapi.com/v2/leagueTable/2"

        fetch(url,{
            "method":"GET",
            "headers":{
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "9cbdf5bedemshc005c46cbaad3d5p1f7cafjsn3f8e7837bfa1"
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded:true,
                        items:result.api.standings[0]
                    });
                },
                (error)=>{
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render(){
        const { error, isLoaded, items} = this.state;

        if(error){
            return (
                <div className="col-sm-11 contenLeft">
                    <div className="breadcumb-cs"><span>Premier League Standings 2018-2019</span></div>

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
                <div className="col-sm-11 contenLeft">
                    <div className="breadcumb-cs"><span>Premier League Standings 2018-2019</span></div>

                    <div className="cs-panel fix-size-panel">
                        <div className="text-center">
                            <div><i className="fa fa-gear fa-spin"></i> Loading...</div>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="col-sm-12 contenLeft">
                    <div className="breadcumb-cs"><span>Premier League Standings 2018-2019</span></div>
                    <div className="cs-panel fix-size-panel">
                        <div className="cs-body-panel ">
                            <table className="forEplTable">
                                <thead>
                                <tr>
                                    <th>Pos</th>
                                    <th>Name</th>
                                    <th>P</th>
                                    <th>W</th>
                                    <th>D</th>
                                    <th>L</th>
                                    <th>Pts</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    items.length > 0 ? items.map((item,i) => {
                                        if(item.rank < 5 ){
                                            return(
                                                <tr key={i} className="ucl" >
                                                <td>{item.rank}</td>
                                                <td>{item.teamName}</td>
                                                <td>{item.all.matchsPlayed}</td>
                                                <td>{item.all.win}</td>
                                                <td>{item.all.draw}</td>
                                                <td>{item.all.lose}</td>
                                                <td>{item.points}</td>
                                                </tr>
                                            )
                                        }
                                        if(item.rank > 4 && item.rank < 7 ){
                                            return(
                                                <tr key={i} className="uel" >
                                                    <td>{item.rank}</td>
                                                    <td>{item.teamName}</td>
                                                    <td>{item.all.matchsPlayed}</td>
                                                    <td>{item.all.win}</td>
                                                    <td>{item.all.draw}</td>
                                                    <td>{item.all.lose}</td>
                                                    <td>{item.points}</td>
                                                </tr>
                                            )
                                        }
                                        if(item.rank > 17){
                                            return(
                                                <tr key={i} className="degradasi" >
                                                    <td>{item.rank}</td>
                                                    <td>{item.teamName}</td>
                                                    <td>{item.all.matchsPlayed}</td>
                                                    <td>{item.all.win}</td>
                                                    <td>{item.all.draw}</td>
                                                    <td>{item.all.lose}</td>
                                                    <td>{item.points}</td>
                                                </tr>
                                            )
                                        }
                                        return(
                                            <tr key={i} >
                                                <td>{item.rank}</td>
                                                <td>{item.teamName}</td>
                                                <td>{item.all.matchsPlayed}</td>
                                                <td>{item.all.win}</td>
                                                <td>{item.all.draw}</td>
                                                <td>{item.all.lose}</td>
                                                <td>{item.points}</td>
                                            </tr>
                                        )

                                    }):null
                                }
                                </tbody>
                            </table>
                            <div className="infoTableEpl">
                                <span><i className="fa fa-circle ucl-color"></i> UCL Stage</span>
                                <span><i className="fa fa-circle uel-color"></i> UEL Stage</span>
                                <span><i className="fa fa-circle degradasi-color"></i> Relegation</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

}


export default Epl;