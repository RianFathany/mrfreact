import React,{ Component } from "react";
import { NavLink } from 'react-router-dom';

class Game extends Component{
    constructor(props){
        super(props);
        this.state={
            error:null,
            isLoaded:false,
            items:[]
        };
    }

    setNext = (x) => {
        alert(x);
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = (x) => {

        if(x == undefined){
            var url = "https://api.rawg.io/api/games";
        }else{
            var url = x;
        }
        //var urly = "https://rawg-video-games-database.p.rapidapi.com/games";
        //var url = "https://api.rawg.io/api/games";

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded:true,
                        items:result,
                        result:result.results
                    });
                },
                (error)=>{
                    this.setState({
                        isLoaded:true,
                        error
                    });
                }
            )
    };

    render(){
        const { error, isLoaded, items, result} = this.state;
        const style = {
            height :'100px',
        };

        if(error){
            return (
                <div>
                    <div className="breadcumb-cs"><span>Games</span></div>

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
                    <div className="breadcumb-cs"><span>Games</span></div>

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
                    <div className="breadcumb-cs"><span>Games</span></div>
                    <div className="cs-panel fix-size-panel black-panel">
                        <div className="flexStyle gameHead">
                            <div className="title whiteText"><h3> GAMES</h3></div>
                            <div className="buttonPlace">
                                {items.previous === null ? '':<button className="buttonGame" onClick={ () => this.fetchData(items.previous)}>Previous</button>}
                                <button className="buttonGame" onClick={ () => this.fetchData(items.next)}>Next</button>
                            </div>
                        </div>
                        <div className="cs-body-panel cs-body-panel-game">
                            {
                                result.length > 0 ? result.map((item,i) => {
                                    const getImage = {
                                        backgroundImage: "url("+item.background_image+")"
                                    };
                                    return(
                                        <div key={item.id} className="col-xs-6 col-sm-2 col-md-2 col-lg-2 mediumLightPadding">
                                            <div className="forGame">
                                                <div className="image" style={getImage}></div>
                                                <div className="info">
                                                    <div className="title">{item.name}</div>
                                                    <div className="rating"><i className="fa fa-star yellowText"></i> {item.rating}</div>
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

export default Game;