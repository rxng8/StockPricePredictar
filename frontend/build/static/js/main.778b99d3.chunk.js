(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){a(24),a(46),e.exports=a(61)},42:function(e,t,a){var n={"./log":43};function r(e){var t=c(e);return a(t)}function c(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=42},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=(a(51),a(11)),s=a(12),i=a(14),m=a(13),u=a(15),f=(a(53),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).dataFlow=function(e){return fetch(e).then(function(e){return e.json()}).then(function(e){return JSON.stringify(e)}).catch(function(e){return console.log(e.message)})},a.state={url:"https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+a.props.symbol+"&interval=5min&outputsize=full&apikey=G4PTCOL5F6R1SMMK",data:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({data:this.dataFlow(this.state.url)}),console.log(this.dataFlow(this.state.url))}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component)),d=(a(55),a(62)),h=a(63),E=a(64),p=a(65),y=a(66),g=a(70),w=a(67),v=a(68),b=a(69),k=function(){return r.a.createElement("div",null,r.a.createElement(d.a,{fluid:!0},r.a.createElement(h.a,null,r.a.createElement(E.a,{md:{span:3},className:"center"},r.a.createElement(p.a,{src:"/assets/img.jpg",alt:"avatar",className:"image"})),r.a.createElement(E.a,{md:{span:4},className:"center"},r.a.createElement("h1",{style:{color:"#ffffff",marginTop:50}},"Stock Price Predktar")),r.a.createElement(E.a,{md:{span:5},className:"center"},r.a.createElement(y.a,{justified:!0},r.a.createElement(g.a,{href:"https://www.google.com",color:"success",style:{color:"white",margin:20}},"Nh\u1ed9ng"),r.a.createElement(g.a,{href:"https://www.pornhub.com",color:"success",style:{color:"white",margin:20}},"B\xe9o")))),r.a.createElement(h.a,null,r.a.createElement(E.a,{md:{span:6},className:"center"},r.a.createElement(w.a,{body:!0,inverse:!0,className:"card"},r.a.createElement(v.a,null,r.a.createElement("h3",{style:{color:"#ffffff"}},"Real-time Stock Price")," "),r.a.createElement(b.a,{style:{color:"#ffffff"}},"See data of stock price market. Joint Stock Companies, Cryptocurrencies."),r.a.createElement(g.a,{style:{marginTop:20,marginLeft:20}}," Let's gooo =))"))),r.a.createElement(E.a,{md:{span:6},className:"center"},r.a.createElement(w.a,{body:!0,inverse:!0,className:"card"},r.a.createElement(v.a,null,r.a.createElement("h3",{style:{color:"#ffffff"}},"Predik the stock price!!!")," "),r.a.createElement(b.a,{style:{color:"#ffffff"}},"This AI machine will predict stock price in the short term based on companies historicla data"),r.a.createElement(g.a,{style:{marginTop:20,marginLeft:20}},"Let's go, yay =))"))))))},N=(a(59),function(){return r.a.createElement("div",null,r.a.createElement(d.a,{fluid:!0,className:"about"},r.a.createElement(h.a,{className:"center"},r.a.createElement("h4",null,"All right reserved to Alex Nguyen | Gettysburg College Class of 2022.")),r.a.createElement(h.a,{className:"center"},r.a.createElement(E.a,{md:{span:8,mdOffset:2}},"This is Col"),r.a.createElement(E.a,{md:{span:4}},"This is another col"))))}),O=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"body"},r.a.createElement(k,null),r.a.createElement(f,{symbol:"GE"}),r.a.createElement(N,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.778b99d3.chunk.js.map