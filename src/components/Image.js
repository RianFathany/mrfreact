/**
 * Created by AMP-3 on 10/10/2019.
 */
import React, { Component } from "react";

class Images extends Component{
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            items:[]
        };
    }

    componentDidMount(){
        var url = "https://pixabay.com/api/?key=13885680-7a1dd804d4847f5a59401c73a&q=yellow+flowers&image_type=photo&pretty=true";

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded:true,
                        items:result.hits
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
        const {error, isLoaded, items} = this.state;

        if(error){
            return (
                <div>
                    <div className="breadcumb-cs"><span>Images</span></div>

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
                    <div className="breadcumb-cs"><span>Images</span></div>

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
                    <div className="breadcumb-cs"><span>Images</span></div>

                    <div className="cs-panel fix-size-panel">
                        <div className="cs-body-panel">
                            {
                                items.length > 0 ? items.map((item,i) => {

                                    return(
                                        <div key={i}>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 lightPadding">
                                                <div className="contentImage">
                                                    <img src={item.webformatURL} alt="alternate" />
                                                    <div className="desc">
                                                        <div className="data"><span className="fa fa-camera"></span>{item.user}</div>
                                                        <div className="flexStyle">
                                                            <div className="data"><span className="fa fa-heart"></span>{item.likes}</div>
                                                            <div className="data"><span className="fa fa-eye"></span>{item.views}</div>
                                                            <div className="data"><span className="fa fa-download"></span>{item.downloads}</div>
                                                        </div>
                                                    </div>
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

export default Images;