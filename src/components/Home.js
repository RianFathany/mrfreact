/**
 * Created by AMP-3 on 9/23/2019.
 */
import React, { Component } from 'react';

class Home extends Component{

    constructor(props){
        super(props);
        this.greetLoad = this.greetLoad.bind(this);
    }

    componentDidMount(){
        //window.addEventListener('load',this.greetLoad);
        this.greetLoad();
    }

    greetLoad = () => {
        const greet = document.getElementById("greet");
        const jam   = document.getElementById("jam");
        const today = new Date();
        const h = today.getHours();
        const m = today.getMinutes();
        const n = this.checkTime(m);
        if(greet !== null){
            if(h <= 10){
                greet.innerHTML="<div class='selamat-pagi-banner'></div>";
            }
            if(h > 10 && h < 15 ){
                greet.innerHTML="<div class='selamat-siang-banner'></div>";
            }
            if(h >= 15 && h < 19){
                greet.innerHTML="<div class='selamat-sore-banner'></div>";
            }
            if(h >= 19 && h <= 23){
                greet.innerHTML="<div class='selamat-malam-banner'></div>";
            }
            jam.innerHTML= h + " : " + n;

            setTimeout(this.greetLoad,36000);
        }

    };

    checkTime = (i) => {
        if(i < 10){i = "0" + i};
        return i;
    };

    render (){
        return (
            <div id="load">
                <div className="breadcumb-cs"><span>Home</span></div>
                <div className="cs-panel fix-size-panel black-panel">
                    <div className="text-center">
                        <div>
                            <div id="greet"></div>
                        </div>
                        <p>sekarang menunjukkan pukul</p>
                        <div className="banner-2">
                            <span id="jam"></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;
