(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(18)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e){e.exports=[{name:"Boysenberry",image:"container-of-blackberries.jpeg"}]},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),c=t.n(o),i=(t(14),t(1)),l=t(2),u=t(4),s=t(3),m=t(5);t(15),t(16);var d=function(e){return r.a.createElement("button",{className:"card",style:{backgroundImage:e.image?"url(".concat(e.image,")"):"none"},onClick:e.onClick})},b=t(17);console.log("berry data:",b);var f=function(e){function n(e){var t;return Object(i.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).state={score:0,cards:t.makeBoard()},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"makeBoard",value:function(){for(var e=[],n=0;n<3;n++)for(var t=0;t<3;t++)e.push({image:"../img/blackberries/container-of-blackberries.jpg",row:n,col:t});return e}},{key:"onClick",value:function(){console.log("clicky!")}},{key:"renderSquare",value:function(e,n){var t=this;return r.a.createElement(d,{image:n,value:e,key:e,onClick:function(){return t.onClick()}})}},{key:"render",value:function(){var e=this,n="Current score: ".concat(this.score);return r.a.createElement("div",null,r.a.createElement("div",{className:"status"},n),this.state.cards.map(function(n,t){return t%3<0?r.a.createElement("div",{className:"board-row"},e.renderSquare(t,n.image)):e.renderSquare(t,n.image)}))}}]),n}(a.Component),k=function(e){function n(){return Object(i.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Click the Berries!"),r.a.createElement(f,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.2c46278b.chunk.js.map