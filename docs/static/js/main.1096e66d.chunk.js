(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),c=n.n(r),l=n(1),o=n(2),s=n(4),u=n(3),v=n(5),m=(n(15),n(8)),h=n.n(m),d=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).intervalId=null,n.timerId=Date.now(),n.state={value:n.props.initialValue},n.handleButtonClick=function(){(0,n.props.onTimerClick)(n.timerId),n.startTimer()},n.startTimer=function(){if(!n.intervalId){var e=n.state.value;e>0&&(n.intervalId=setInterval(function(){n.setState(function(e){return{value:e.value-1}},function(){0===e&&clearInterval(n.intervalId)})},1e3))}},n.isActive=function(){return n.props.active===n.timerId},n.checkIfActive=function(){n.isActive()?n.startTimer():n.intervalId&&(clearInterval(n.intervalId),n.intervalId=null)},n}return Object(v.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){this.intervalId&&clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this.state.value;this.checkIfActive();var t,n=h()("timer",{"timer--active":this.isActive()});return i.a.createElement("button",{onClick:this.handleButtonClick,className:n},i.a.createElement("span",null,(t=e,new Intl.DateTimeFormat("pl-PL",{minute:"numeric",second:"numeric"}).format(new Date(1e3*t)))))}}]),t}(i.a.Component),f=(n(16),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={active:null,version:0},n.handleTimerClick=function(e){n.setState({active:e})},n.handlePause=function(){n.setState({active:null})},n.handleReset=function(){n.setState(function(e){return{version:e.version+1}})},n}return Object(v.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.active,n=e.version;return i.a.createElement("div",{key:n,className:"App"},i.a.createElement(d,{onTimerClick:this.handleTimerClick,active:t,initialValue:1200}),i.a.createElement("div",{className:"controls"},i.a.createElement("button",{onClick:this.handlePause},"PAUSE"),i.a.createElement("button",{onClick:this.handleReset},"RESET")),i.a.createElement(d,{onTimerClick:this.handleTimerClick,active:t,initialValue:1200}))}}]),t}(i.a.Component));n(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.1096e66d.chunk.js.map