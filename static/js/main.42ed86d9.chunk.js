(window.webpackJsonpmrfreact=window.webpackJsonpmrfreact||[]).push([[0],{113:function(e,a,t){},114:function(e,a,t){},115:function(e,a,t){},116:function(e,a,t){},117:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(18),s=t.n(c),r=t(2),m=t(3),i=t(5),d=t(4),o=t(12),u=t(6),E=t(1),p=t(13),v=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).greetLoad=function(){var e=document.getElementById("greet"),a=document.getElementById("jam"),l=new Date,n=l.getHours(),c=l.getMinutes(),s=t.checkTime(c);null!==e&&(n<=10&&(e.innerHTML="<div class='selamat-pagi-banner'></div>"),n>10&&n<15&&(e.innerHTML="<div class='selamat-siang-banner'></div>"),n>=15&&n<19&&(e.innerHTML="<div class='selamat-sore-banner'></div>"),n>=19&&n<=23&&(e.innerHTML="<div class='selamat-malam-banner'></div>"),a.innerHTML=n+" : "+s,setTimeout(t.greetLoad,36e3))},t.checkTime=function(e){return e<10&&(e="0"+e),e},t.greetLoad=t.greetLoad.bind(Object(o.a)(t)),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.greetLoad()}},{key:"render",value:function(){return n.a.createElement("div",{id:"load"},n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Home")),n.a.createElement("div",{className:"cs-panel fix-size-panel black-panel"},n.a.createElement("div",{className:"text-center"},n.a.createElement("div",null,n.a.createElement("div",{id:"greet"})),n.a.createElement("p",null,"Welcome to  my site"),n.a.createElement("p",null,"Sekarang menunjukkan pukul"),n.a.createElement("div",{className:"banner-2"},n.a.createElement("span",{id:"jam"})))))}}]),a}(l.Component),b=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"About")),n.a.createElement("div",{className:"cs-panel fix-size-panel black-panel"},n.a.createElement("div",{className:"whiteText"},n.a.createElement("h3",null,"About"),n.a.createElement("p",null,"This app linked from various API "))))},f=t(21),N=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Contact")),n.a.createElement("div",{className:"cs-panel fix-size-panel black-panel"},n.a.createElement("div",{className:"cs-body-panel"},n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12 lightPadding"},n.a.createElement("div",{className:"forMap"},n.a.createElement(f.Map,{google:this.props.google,zoom:12,style:{map:{width:"50%",height:"50%",position:"relative !important"}},initialCenter:{lat:-6.312,lng:106.762}},n.a.createElement(f.Marker,{position:{lat:-6.312055,lng:106.762669}})))),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6 col-xs-12"},n.a.createElement("div",{className:"forContact"},n.a.createElement("div",{className:"labelData"},"Contact"),n.a.createElement("div",{className:"data"},n.a.createElement("span",{className:"fa fa-envelope"}),"mrianfathany@gmail.com"),n.a.createElement("div",{className:"data"},n.a.createElement("span",{className:"fa fa-phone"}),"+6221-7422813"),n.a.createElement("div",{className:"data"},n.a.createElement("span",{className:"fa fa-whatsapp"}),"+62-812-1301-4442"),n.a.createElement("div",{className:"data"},n.a.createElement("span",{className:"fa fa-facebook"}),n.a.createElement("span",null,"Muhammad Rian Fathany")),n.a.createElement("div",{className:"data"},n.a.createElement("span",{className:"fa fa-twitter"}),n.a.createElement("span",null,"@mrfathany_")),n.a.createElement("div",{className:"data flexStyle"},n.a.createElement("span",{className:"fa fa-map-pin"}),n.a.createElement("div",{className:"locDetail"},"Jl. Pisangan Barat No.55 Kelurahan Cirendeu, Kecamatan Ciputat Timur Kota Tangerang Selatan Banten 15419")))))))}}]),a}(l.Component),h=Object(f.GoogleApiWrapper)({apiKey:"AIzaSyAV2eNwApbZyBUBg8lHS5M3UhE4TxfvqEU"})(N),g=function(){return n.a.createElement("div",{className:"panel panel-primary"},n.a.createElement("div",{className:"panel-body text-center"},n.a.createElement("h2",null,"404 Not Found")))},y=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).handleClick=function(){var e=document.getElementById("standardSidenav");"230px"===e.style.width?(e.style.width="0px",e.style.transition="0.5s"):(e.style.width="230px",e.style.transition="0.5s")},t.handleClick=t.handleClick.bind(Object(o.a)(t)),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.dropdownChild()}},{key:"dropdownChild",value:function(){for(var e=document.getElementsByClassName("dropdown-sidenav"),a=0;a<e.length;a++)e[a].addEventListener("click",(function(){var e=this.nextElementSibling;"none"===e.style.display||""===e.style.display?e.style.display="block":e.style.display="none"}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"menu-bar"},n.a.createElement("div",{className:"menu-icon"},n.a.createElement("div",{className:"my-icon"}),n.a.createElement("div",{className:"my-title"},"MR.FREACT")),n.a.createElement("div",{className:"menuLine text-right"},n.a.createElement(E.b,{to:"/"},"Home"),n.a.createElement(E.b,{to:"/about"},"About"),n.a.createElement(E.b,{to:"/contact"},"Contact"),n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",null,"Data"),n.a.createElement("div",{className:"dropdown-content"},n.a.createElement(E.b,{to:"/jobs"},"Jobs"),n.a.createElement(E.b,{to:"/images"},"Images"),n.a.createElement(E.b,{to:"/epl"},"EPL"),n.a.createElement(E.b,{to:"/game"},"Games"))),n.a.createElement("div",{className:"icon-bar",onClick:this.handleClick},n.a.createElement("span",{className:"fa fa-bars"})))),n.a.createElement("div",{id:"standardSidenav",style:{width:"0px",display:"block"},className:"sidenav"},n.a.createElement(E.b,{to:"/"},"Home"),n.a.createElement(E.b,{to:"/about"},"About"),n.a.createElement(E.b,{to:"/contact"},"Contact"),n.a.createElement("button",{className:"dropdown-sidenav"},"Data ",n.a.createElement("i",{className:"fa fa-caret-down"})),n.a.createElement("div",{className:"dropdown-sidenav-container"},n.a.createElement(E.b,{to:"/jobs"},"Jobs"),n.a.createElement(E.b,{to:"/images"},"Images"),n.a.createElement(E.b,{to:"/epl"},"EPL"),n.a.createElement(E.b,{to:"/game"},"Games"))),n.a.createElement("script",{src:"sidebarJs.js"}))}}]),a}(l.Component),k=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).state={error:null,isLoaded:!1,items:[]},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://rx-node.herokuapp.com/jobList").then((function(e){return e.json()})).then((function(e){return e.values.map((function(e){return{id:"".concat(e.id),type:"".concat(e.type),company:"".concat(e.company),location:"".concat(e.location),title:"".concat(e.title),logo:"".concat(e.company_logo)}}))})).then((function(a){return e.setState({items:a,isLoaded:!0})})).catch((function(e){return console.log("parsing failed",e)}))}},{key:"render",value:function(){var e=this.state,a=e.error,t=e.isLoaded,l=e.items;return a?n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Jobs")),n.a.createElement("div",{className:"cs-panel fix-size-panel"},n.a.createElement("div",null,n.a.createElement("div",null,"Error: ",a.message)))):t?n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Jobs")),n.a.createElement("div",{className:"cs-panel fix-size-panel"},n.a.createElement("div",{className:"cs-body-panel"},l.length>0?l.map((function(e,a){var t=e.id,l=e.type,c=e.company,s=e.location,r=e.title,m=e.logo;return n.a.createElement("div",{className:"dataPanel",key:a},n.a.createElement("div",{className:"data"},n.a.createElement("span",{className:"hidden"},t),n.a.createElement("div",{className:"forTitle"},n.a.createElement("span",{className:"title"},r)),n.a.createElement("div",{className:"forTitle"},n.a.createElement("span",{className:"type"},l)),n.a.createElement("div",{className:"forName"},n.a.createElement("span",{className:"fa fa-home icon"}),n.a.createElement("span",{className:"name"},c)),n.a.createElement("div",{className:"forLoc"},n.a.createElement("span",{className:"fa fa-map-pin icon"}),n.a.createElement("span",{className:"location"},s)),n.a.createElement("div",null,n.a.createElement(E.b,{to:"/JobDetails/"+t},n.a.createElement("button",{className:"btn btn-default btn-sm"},"Details")))),n.a.createElement("div",{className:"image"},"null"===m?n.a.createElement("span",null,"-"):n.a.createElement("img",{src:m,alt:"logo"})))})):null))):n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Jobs")),n.a.createElement("div",{className:"cs-panel fix-size-panel"},n.a.createElement("div",{className:"text-center"},n.a.createElement("div",null,n.a.createElement("i",{className:"fa fa-gear fa-spin"})," Loading..."))))}}]),a}(l.Component),j=t(19),x=t.n(j),L=t(46),w=t.n(L),O=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).state={error:null,isLoaded:!1,items:[]},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=(this.props.match.params.id,"https://rx-node.herokuapp.com/jobDetail/"+this.props.match.params.id);fetch(a).then((function(e){return e.json()})).then((function(a){e.setState({isLoaded:!0,items:a.values})}),(function(a){e.setState({isLoaded:!0,error:a})}))}},{key:"render",value:function(){var e=this.state,a=e.error,t=e.isLoaded,l=e.items;return a?n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement(E.b,{to:"/jobs",className:"aLink"},n.a.createElement("span",null,"Jobs ")),n.a.createElement("span",{className:"linkDivider fa fa-angle-right"}),n.a.createElement("span",null,"Job Detail")),n.a.createElement("div",{className:"cs-panel fix-size-panel"},n.a.createElement("div",null,n.a.createElement("div",null,"Error: ",a.message)))):t?n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement(E.b,{to:"/jobs",className:"aLink"},n.a.createElement("span",null,"Jobs ")),n.a.createElement("span",{className:"linkDivider fa fa-angle-right"}),n.a.createElement("span",null,"Job Detail"),n.a.createElement("span",{className:"linkDivider fa fa-angle-right"}),n.a.createElement("span",null,l.title," (",l.company,")")),n.a.createElement("div",{className:"cs-panel fix-size-panel"},n.a.createElement("div",{className:"cs-body-panel"},n.a.createElement("span",{className:"hidden"},l.id),n.a.createElement("div",{className:"detailLogo"},null===l.company_logo?n.a.createElement("span",null,"-"):n.a.createElement("img",{src:l.company_logo,alt:"logo"})),n.a.createElement("div",{className:"detailData"},n.a.createElement("div",{className:"key"},"Title"),n.a.createElement("div",{className:"value"},l.title)),n.a.createElement("div",{className:"detailData"},n.a.createElement("div",{className:"key"},"Type"),n.a.createElement("div",{className:"value"},l.type)),n.a.createElement("div",{className:"detailData"},n.a.createElement("div",{className:"key"},"Company"),n.a.createElement("div",{className:"value"},l.company)),n.a.createElement("div",{className:"detailData"},n.a.createElement("div",{className:"key"},"Location"),n.a.createElement("div",{className:"value"},l.location)),n.a.createElement("div",{className:"detailData"},n.a.createElement("div",{className:"key"},"Post Date"),n.a.createElement("div",{className:"value"},n.a.createElement(w.a,{format:"YYYY-MM-DD H:m:s"},l.created_at))),n.a.createElement("div",{className:"detailData"},n.a.createElement("div",{className:"key"},"Description"),n.a.createElement("div",{className:"value"},x()(l.description))),n.a.createElement("div",{className:"detailData"},n.a.createElement("div",{className:"key"},"How To Appy"),n.a.createElement("div",{className:"value"},x()(l.how_to_apply)))))):n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement(E.b,{to:"/jobs",className:"aLink"},n.a.createElement("span",null,"Jobs ")),n.a.createElement("span",{className:"linkDivider fa fa-angle-right"}),n.a.createElement("span",null,"Job Detail")),n.a.createElement("div",{className:"cs-panel fix-size-panel"},n.a.createElement("div",{className:"text-center"},n.a.createElement("div",null,n.a.createElement("i",{className:"fa fa-gear fa-spin"})," Loading..."))))}}]),a}(l.Component),D=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).state={error:null,isLoaded:!1,items:[]},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pixabay.com/api/?key=13885680-7a1dd804d4847f5a59401c73a&q=yellow+flowers&image_type=photo&pretty=true").then((function(e){return e.json()})).then((function(a){e.setState({isLoaded:!0,items:a.hits})}),(function(a){e.setState({isLoaded:!0,error:a})}))}},{key:"render",value:function(){var e=this.state,a=e.error,t=e.isLoaded,l=e.items;return a?n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Images")),n.a.createElement("div",{className:"cs-panel fix-size-panel black-panel"},n.a.createElement("div",{className:"whiteText"},n.a.createElement("div",null,"Error: ",a.message)))):t?n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Images")),n.a.createElement("div",{className:"cs-panel fix-size-panel black-panel"},n.a.createElement("div",{className:"cs-body-panel"},l.length>0?l.map((function(e,a){return n.a.createElement("div",{key:a},n.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-3 col-xs-6 lightPadding"},n.a.createElement("div",{className:"contentImage"},n.a.createElement("img",{src:e.webformatURL,alt:"alternate"}),n.a.createElement("div",{className:"desc"},n.a.createElement("div",{className:"data"},n.a.createElement("span",{className:"fa fa-camera"}),e.user),n.a.createElement("div",{className:"flexStyle"},n.a.createElement("div",{className:"data"},n.a.createElement("span",{className:"fa fa-heart"}),e.likes),n.a.createElement("div",{className:"data"},n.a.createElement("span",{className:"fa fa-eye"}),e.views),n.a.createElement("div",{className:"data"},n.a.createElement("span",{className:"fa fa-download"}),e.downloads))))))})):null))):n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Images")),n.a.createElement("div",{className:"cs-panel fix-size-panel black-panel"},n.a.createElement("div",{className:"text-center whiteText"},n.a.createElement("div",null,n.a.createElement("i",{className:"fa fa-gear fa-spin"})," Loading..."))))}}]),a}(l.Component),T=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"col-sm-12 paddingless"},n.a.createElement("div",{className:"col-sm-3 paddingless"},n.a.createElement(S,null)),n.a.createElement("div",{className:"col-sm-9 paddingless"},n.a.createElement(C,null)))}}]),a}(l.Component),C=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).state={error:null,isLoaded:!1,items:[]},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api-football-v1.p.rapidapi.com/v2/teams/league/2",{method:"GET",headers:{"x-rapidapi-host":"api-football-v1.p.rapidapi.com","x-rapidapi-key":"9cbdf5bedemshc005c46cbaad3d5p1f7cafjsn3f8e7837bfa1"}}).then((function(e){return e.json()})).then((function(a){e.setState({isLoaded:!0,items:a.api.teams})}),(function(a){e.setState({isLoaded:!0,error:a})}))}},{key:"render",value:function(){var e=this.state,a=e.error,t=e.isLoaded,l=e.items;return a?n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Premier League Profile Club 2018-2019")),n.a.createElement("div",{className:"cs-panel fix-size-panel black-panel"},n.a.createElement("div",{className:"whiteText"},n.a.createElement("div",null,"Error: ",a.message)))):t?n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Premier League Profile Club 2018-2019")),n.a.createElement("div",{className:"cs-panel fix-size-panel black-panel"},n.a.createElement("div",{className:"cs-body-panel "},l.length>0?l.map((function(e,a){return n.a.createElement("div",{key:a,className:"forEpl col-lg-4 col-md-4 col-sm-4 col-xs-12"},n.a.createElement("div",{className:"logo"},n.a.createElement("img",{src:e.logo})),n.a.createElement("div",{className:"data whiteText"},n.a.createElement("div",{className:"dataLabel"},e.name),n.a.createElement("div",{className:"data-child"},n.a.createElement("label",null,"Country"),n.a.createElement("span",null,e.country)),n.a.createElement("div",{className:"data-child"},n.a.createElement("label",null,"Founded"),n.a.createElement("span",null,e.founded)),n.a.createElement("div",{className:"data-child"},n.a.createElement("label",null,"Venue"),n.a.createElement("span",null,e.venue_name)),n.a.createElement("div",{className:"data-child"},n.a.createElement("label",null,"Venue Surface"),n.a.createElement("span",null,e.venue_surface)),n.a.createElement("div",{className:"data-child"},n.a.createElement("label",null,"Venue Address"),n.a.createElement("span",null,e.venue_address)),n.a.createElement("div",{className:"data-child"},n.a.createElement("label",null,"Venue City"),n.a.createElement("span",null,e.venue_city)),n.a.createElement("div",{className:"data-child"},n.a.createElement("label",null,"Venue Capacity"),n.a.createElement("span",null,e.venue_capacity))))})):null))):n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Premier League Profile Club 2018-2019")),n.a.createElement("div",{className:"cs-panel fix-size-panel black-panel"},n.a.createElement("div",{className:"text-center whiteText"},n.a.createElement("div",null,n.a.createElement("i",{className:"fa fa-gear fa-spin"})," Loading..."))))}}]),a}(l.Component),S=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).state={error:null,isLoaded:!1,items:[]},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api-football-v1.p.rapidapi.com/v2/leagueTable/2",{method:"GET",headers:{"x-rapidapi-host":"api-football-v1.p.rapidapi.com","x-rapidapi-key":"9cbdf5bedemshc005c46cbaad3d5p1f7cafjsn3f8e7837bfa1"}}).then((function(e){return e.json()})).then((function(a){e.setState({isLoaded:!0,items:a.api.standings[0]})}),(function(a){e.setState({isLoaded:!0,error:a})}))}},{key:"render",value:function(){var e=this.state,a=e.error,t=e.isLoaded,l=e.items;return a?n.a.createElement("div",{className:"col-sm-11 contenLeft"},n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Premier League Standings 2018-2019")),n.a.createElement("div",{className:"cs-panel fix-size-panel black-panel"},n.a.createElement("div",{className:"whiteText"},n.a.createElement("div",null,"Error: ",a.message)))):t?n.a.createElement("div",{className:"col-sm-12 contenLeft"},n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Premier League Standings 2018-2019")),n.a.createElement("div",{className:"cs-panel fix-size-panel black-panel"},n.a.createElement("div",{className:"cs-body-panel "},n.a.createElement("table",{className:"forEplTable whiteText"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Pos"),n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"P"),n.a.createElement("th",null,"W"),n.a.createElement("th",null,"D"),n.a.createElement("th",null,"L"),n.a.createElement("th",null,"Pts"))),n.a.createElement("tbody",null,l.length>0?l.map((function(e,a){return e.rank<5?n.a.createElement("tr",{key:a,className:"ucl"},n.a.createElement("td",null,e.rank),n.a.createElement("td",null,e.teamName),n.a.createElement("td",null,e.all.matchsPlayed),n.a.createElement("td",null,e.all.win),n.a.createElement("td",null,e.all.draw),n.a.createElement("td",null,e.all.lose),n.a.createElement("td",null,e.points)):e.rank>4&&e.rank<7?n.a.createElement("tr",{key:a,className:"uel"},n.a.createElement("td",null,e.rank),n.a.createElement("td",null,e.teamName),n.a.createElement("td",null,e.all.matchsPlayed),n.a.createElement("td",null,e.all.win),n.a.createElement("td",null,e.all.draw),n.a.createElement("td",null,e.all.lose),n.a.createElement("td",null,e.points)):e.rank>17?n.a.createElement("tr",{key:a,className:"degradasi"},n.a.createElement("td",null,e.rank),n.a.createElement("td",null,e.teamName),n.a.createElement("td",null,e.all.matchsPlayed),n.a.createElement("td",null,e.all.win),n.a.createElement("td",null,e.all.draw),n.a.createElement("td",null,e.all.lose),n.a.createElement("td",null,e.points)):n.a.createElement("tr",{key:a},n.a.createElement("td",null,e.rank),n.a.createElement("td",null,e.teamName),n.a.createElement("td",null,e.all.matchsPlayed),n.a.createElement("td",null,e.all.win),n.a.createElement("td",null,e.all.draw),n.a.createElement("td",null,e.all.lose),n.a.createElement("td",null,e.points))})):null)),n.a.createElement("div",{className:"infoTableEpl"},n.a.createElement("span",null,n.a.createElement("i",{className:"fa fa-circle ucl-color"})," ",n.a.createElement("span",{className:"whiteText"},"UCL Stage")),n.a.createElement("span",null,n.a.createElement("i",{className:"fa fa-circle uel-color"})," ",n.a.createElement("span",{className:"whiteText"},"UEL Stage")),n.a.createElement("span",null,n.a.createElement("i",{className:"fa fa-circle degradasi-color"})," ",n.a.createElement("span",{className:"whiteText"},"Relegation")))))):n.a.createElement("div",{className:"col-sm-11 contenLeft"},n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Premier League Standings 2018-2019")),n.a.createElement("div",{className:"cs-panel fix-size-panel black-panel"},n.a.createElement("div",{className:"text-center whiteText"},n.a.createElement("div",null,n.a.createElement("i",{className:"fa fa-gear fa-spin"})," Loading..."))))}}]),a}(l.Component),P=T,z=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).setNext=function(e){alert(e)},t.fetchData=function(e){if(void 0==e)var a="https://api.rawg.io/api/games";else a=e;fetch(a).then((function(e){return e.json()})).then((function(e){t.setState({isLoaded:!0,items:e,result:e.results})}),(function(e){t.setState({isLoaded:!0,error:e})}))},t.state={error:null,isLoaded:!1,items:[]},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this,a=this.state,t=a.error,l=a.isLoaded,c=a.items,s=a.result;return t?n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Games")),n.a.createElement("div",{className:"cs-panel fix-size-panel black-panel"},n.a.createElement("div",null,n.a.createElement("div",{className:"whiteText"},"Error: ",t.message)))):l?n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Games")),n.a.createElement("div",{className:"cs-panel fix-size-panel black-panel"},n.a.createElement("div",{className:"flexStyle gameHead"},n.a.createElement("div",{className:"title whiteText"},n.a.createElement("h3",null," GAMES")),n.a.createElement("div",{className:"buttonPlace"},null===c.previous?"":n.a.createElement("button",{className:"buttonGame",onClick:function(){return e.fetchData(c.previous)}},"Previous"),n.a.createElement("button",{className:"buttonGame",onClick:function(){return e.fetchData(c.next)}},"Next"))),n.a.createElement("div",{className:"cs-body-panel cs-body-panel-game"},s.length>0?s.map((function(e,a){var t={backgroundImage:"url("+e.background_image+")"};return n.a.createElement("div",{key:e.id,className:"col-xs-6 col-sm-2 col-md-2 col-lg-2 mediumLightPadding"},n.a.createElement(E.b,{to:"/GameDetails/"+e.slug,className:"linkPlain"},n.a.createElement("div",{className:"forGame"},n.a.createElement("div",{className:"image",style:t}),n.a.createElement("div",{className:"info"},n.a.createElement("div",{className:"title"},e.name),n.a.createElement("div",{className:"rating"},n.a.createElement("i",{className:"fa fa-star yellowText"})," ",e.rating)))))})):null))):n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Games")),n.a.createElement("div",{className:"cs-panel fix-size-panel black-panel"},n.a.createElement("div",{className:"text-center whiteText"},n.a.createElement("div",null,n.a.createElement("i",{className:"fa fa-gear fa-spin"})," Loading..."))))}}]),a}(l.Component),M=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).state={error:null,isLoaded:!1,items:[]},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,a="https://rawg-video-games-database.p.rapidapi.com/games/"+this.props.match.params.slug;fetch(a,{method:"GET",headers:{"x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com","x-rapidapi-key":"9cbdf5bedemshc005c46cbaad3d5p1f7cafjsn3f8e7837bfa1"}}).then((function(e){return e.json()})).then((function(a){e.setState({isLoaded:!0,items:a})}),(function(a){e.setState({isLoaded:!0,error:a})}))}},{key:"render",value:function(){var e=this.state,a=e.error,t=e.isLoaded,l=e.items;return a?n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Game Details")),n.a.createElement("div",{className:"cs-panel fix-size-panel black-panel"},n.a.createElement("div",null,n.a.createElement("div",{className:"whiteText"},"Error: ",a.message)))):t?n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement(E.b,{to:"/game",className:"aLink"},n.a.createElement("span",null,"Games")),n.a.createElement("span",{className:"linkDivider fa fa-angle-right"}),n.a.createElement("span",null,l.name)),n.a.createElement("div",{className:"cs-panel fix-size-panel black-panel forGameDetails"},n.a.createElement("div",{className:" cs-body-panel whiteText o-x-hidden"},n.a.createElement("div",{className:"row head"},n.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-6 col-xs-6"},n.a.createElement("img",{src:l.background_image})),n.a.createElement("div",{className:"col-lg-9 col-md-9 col-sm-6 col-xs-6"},n.a.createElement("div",{className:"title"},l.name),n.a.createElement("div",{className:"rating"},n.a.createElement("i",{className:"fa fa-star yellowText"}),"\xa0",l.rating),n.a.createElement("div",{className:"data"},n.a.createElement("span",null,n.a.createElement("i",{className:"fa fa-calendar"}),"\xa0\xa0"),l.released),n.a.createElement("div",{className:"data"},n.a.createElement("a",{href:l.website},n.a.createElement("span",null,n.a.createElement("i",{className:"fa fa-link"}),"\xa0\xa0"),l.website)))),n.a.createElement("div",{className:"body"},n.a.createElement("div",{className:"desc"},"Description"),n.a.createElement("div",null,x()(l.description)))))):n.a.createElement("div",null,n.a.createElement("div",{className:"breadcumb-cs"},n.a.createElement("span",null,"Game Details")),n.a.createElement("div",{className:"cs-panel fix-size-panel black-panel"},n.a.createElement("div",{className:"text-center whiteText"},n.a.createElement("div",null,n.a.createElement("i",{className:"fa fa-gear fa-spin"})," Loading..."))))}}]),a}(l.Component),G=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(d.a)(a).call(this,e))).clickBody=function(){var e=document.getElementById("standardSidenav");"230px"===e.style.width&&(e.style.width="0px",e.style.transition="0.5s")},t.clickBody=t.clickBody.bind(Object(o.a)(t)),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(E.a,null,n.a.createElement("div",{className:"container"},n.a.createElement(y,null),n.a.createElement("div",{onClick:this.clickBody},n.a.createElement(p.c,null,n.a.createElement(p.a,{path:"/",component:v,exact:!0}),n.a.createElement(p.a,{path:"/about",component:b}),n.a.createElement(p.a,{path:"/contact",component:h}),n.a.createElement(p.a,{path:"/jobs",component:k}),n.a.createElement(p.a,{path:"/jobdetails/:id",component:O}),n.a.createElement(p.a,{path:"/images",component:D}),n.a.createElement(p.a,{path:"/epl",component:P}),n.a.createElement(p.a,{path:"/game",component:z}),n.a.createElement(p.a,{path:"/gamedetails/:slug",component:M}),n.a.createElement(p.a,{component:g})))))}}]),a}(l.Component),J=(n.a.Component,G);t(112),t(113),t(114),t(115),t(116);s.a.render(n.a.createElement(J,null),document.getElementById("app"))},47:function(e,a,t){e.exports=t(117)},92:function(e,a){}},[[47,1,2]]]);
//# sourceMappingURL=main.42ed86d9.chunk.js.map