(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t(21)},18:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(9),r=t.n(o),c=(t(18),t(1)),m=t(2),s=t(4),i=t(3),d=t(5),u=t(10),p=function(e){return console.log(e),l.a.createElement("div",{className:"modal fade",id:"appModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},"New application"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"companyName"},"Company Name"),l.a.createElement("input",{type:"text",onChange:e.onChangeModal,name:"companyName",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"jobTitle"},"Job Title"),l.a.createElement("input",{type:"text",onChange:e.onChangeModal,name:"jobTitle",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"jobUrl"},"Job Url"),l.a.createElement("input",{type:"text",onChange:e.onChangeModal,name:"jobUrl",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"appDate"},"Application Date"),l.a.createElement("input",{type:"text",onChange:e.onChangeModal,name:"appDate",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"contact"},"Contact"),l.a.createElement("input",{type:"text",onChange:e.onChangeModal,name:"contact",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"notes"},"Notes"),l.a.createElement("textarea",{type:"text",onChange:e.onChangeModal,name:"notes",className:"form-control"})))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-info","data-dismiss":"modal",onClick:e.onSaveModal},"Save changes"),l.a.createElement("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal"},"Close")))))},b=t(11),h=t.n(b),g=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){console.log(JSON.parse(localStorage.getItem("aqsam_jobs")))}},{key:"onChangeModal",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"delete",value:function(e){var a=JSON.parse(localStorage.getItem("aqsam_jobs"));a=a.filter(function(a){return a.id!==e}),localStorage.setItem("aqsam_jobs",JSON.stringify(a)),this.forceUpdate()}},{key:"onSaveModal",value:function(e){var a=JSON.parse(localStorage.getItem("aqsam_jobs"));this.state.id=h()(),null==a?(a=[]).push(this.state):a.push(this.state),localStorage.setItem("aqsam_jobs",JSON.stringify(a)),this.forceUpdate()}},{key:"mapJobs",value:function(){var e=this;return JSON.parse(localStorage.getItem("aqsam_jobs")).map(function(a,t){return l.a.createElement("div",{key:t,className:"col-sm-12 col-md-4"},l.a.createElement("div",{className:"card ",style:{textAlign:"center",margin:"10px 0px",minHeight:"300px",width:"100%"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"title"},l.a.createElement("h2",{style:{color:"#17a2b8"}},a.companyName)),l.a.createElement("div",{className:"card-text"},l.a.createElement("h4",null,a.jobTitle),l.a.createElement("h4",null,a.jobUrl),l.a.createElement("h4",null,a.appDate),l.a.createElement("h4",null,a.contact),l.a.createElement("h4",null,a.notes))),l.a.createElement("button",{className:"btn btn-danger",onClick:e.delete.bind(e,a.id)},"Delete")))})}},{key:"render",value:function(){return l.a.createElement("div",{className:"MainContainer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("button",{className:"btn btn-info","data-toggle":"modal","data-target":"#appModal",style:{marginTop:"10px"}},"Add Job")))),l.a.createElement(p,{onChangeModal:this.onChangeModal.bind(this),onSaveModal:this.onSaveModal.bind(this)})," ",l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},null===localStorage.getItem("aqsam_jobs")||0===JSON.parse(localStorage.getItem("aqsam_jobs")).length?l.a.createElement("h1",null,"Lets get the job search going"):this.mapJobs())))}}]),a}(n.Component),E=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(g,null)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.2b6c984f.chunk.js.map