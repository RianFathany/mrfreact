/**
 * Created by AMP-3 on 9/23/2019.
 */
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Jobs from './components/Jobs';
import JobDetails from './components/JobDetails';
import Images from './components/Image';
import Epl from './components/Epl';
import Game from './components/Game';

const routerBaseName = process.env.PUBLIC_URL;
//routerBaseName basename yang di tambahkan ke browser router

class App extends Component{

    constructor(props){
        super(props);
        this.clickBody = this.clickBody.bind(this);
    }

    clickBody = () => {
        const idx = document.getElementById("standardSidenav");
        if(idx.style.width === '230px'){
            idx.style.width='0px';
            idx.style.transition='0.5s';
        }
    };

    render(){
        return(
            <HashRouter>
                <div className="container">
                    <Navigation />
                    <div onClick={this.clickBody}>
                        <Switch>
                            <Route path='/' component={Home} exact/>
                            <Route path='/about' component={About}/>
                            <Route path='/contact' component={Contact}/>
                            <Route path='/jobs' component={Jobs}/>
                            <Route path='/jobdetails/:id' component={JobDetails}/>
                            <Route path='/images' component={Images}/>
                            <Route path='/epl' component={Epl}/>
                            <Route path='/game' component={Game}/>
                            <Route component={Error}/>
                        </Switch>
                    </div>

                </div>
            </HashRouter>
        );
    }
}

class Content extends React.Component{
    render(){
        return(
            <div className="col-sm-3 contenLeft">
                <div className="cs-panel fix-size-panel">
                    <div className="">
                        <h3>Content</h3>
                        <p>This is Content</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

