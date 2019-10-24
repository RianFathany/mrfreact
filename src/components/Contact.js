/**
 * Created by AMP-3 on 9/23/2019.
 */
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class Contact extends Component{

    render(){
        const mapStyles ={
            map:{
                width:'50%',
                height:'50%',
                position:'relative !important'
            }
        };
        return (
            <div>
                <div className="breadcumb-cs"><span>Contact</span></div>

                <div className="cs-panel fix-size-panel">
                    <div className="cs-body-panel">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 lightPadding">
                            <div className="forMap">
                                <Map
                                    google={this.props.google}
                                    zoom={12}
                                    style={mapStyles}
                                    initialCenter={{ lat: -6.312, lng: 106.762}}
                                >
                                    <Marker position={{ lat: -6.312055, lng: 106.762669}} />
                                </Map>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="forContact">
                                <div className="labelData">Contact</div>
                                <div className="data">
                                    <span className="fa fa-envelope"></span>
                                    mrianfathany@gmail.com
                                </div>
                                <div className="data">
                                    <span className="fa fa-phone"></span>
                                    +6221-7422813
                                </div>
                                <div className="data">
                                    <span className="fa fa-whatsapp"></span>
                                    +62-812-1301-4442
                                </div>
                                <div className="data">
                                    <span className="fa fa-facebook"></span>
                                    <span>Muhammad Rian Fathany</span>
                                </div>
                                <div className="data">
                                    <span className="fa fa-twitter"></span>
                                    <span>@mrfathany_</span>
                                </div>
                                <div className="data flexStyle">
                                    <span className="fa fa-map-pin"></span>
                                    <div className="locDetail">
                                        Jl. Pisangan Barat No.55 Kelurahan Cirendeu, Kecamatan Ciputat Timur Kota Tangerang Selatan Banten 15419
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAV2eNwApbZyBUBg8lHS5M3UhE4TxfvqEU'
})(Contact);