(this["webpackJsonpnerdisoft-test-task-front"]=this["webpackJsonpnerdisoft-test-task-front"]||[]).push([[0],{20:function(e,t,n){},34:function(e,t,n){e.exports=n(47)},39:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(23),c=n.n(s),o=(n(39),n(2)),i=n(7),u=n(9),l=n(8),p=n(10),d=n(15),h=(n(20),function(e){return{type:"ON_ENTER_USER",payload:"Welcome ".concat(e,"!")}}),m=n(17),f=n(3),g=new function e(){Object(o.a)(this,e),this.getTasks=function(e){return fetch("/api/task/",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},this.postTask=function(e,t){return fetch("/api/task/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},this.deleteTask=function(e,t){return fetch("/api/task/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},this.putTask=function(e,t){return fetch("/api/task/".concat(e._id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},this.shareTask=function(e,t,n){return fetch("/api/task/".concat(e,"/share"),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},this.removeSharedLink=function(e,t,n){return fetch("/api/task/".concat(e,"/remove"),{method:"PATCH",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},b=new function e(){Object(o.a)(this,e),this.registerUser=function(e){return fetch("/api/user/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},this.loginUser=function(e){return fetch("/api/user/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},this.getAllUsers=function(e,t){return fetch("/api/user/".concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},E=function(e){return function(t){return r.a.createElement(e,Object.assign({},t,{TaskService:g,UserService:b}))}},k=function(e){return{type:"SHOW_ERROR_MSG",payload:e}};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var S=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={userData:{name:"",email:"",password:""}},n.handleSubmit=function(e){e.preventDefault();var t=n.state.userData,a=n.props,r=a.onEnterUser,s=a.showErrorMessage;return(0,a.UserService.registerUser)(t).then((function(e){if(!e.success)return s(e.message);localStorage.setItem("user",JSON.stringify({id:e.id,name:e.name,token:e.token})),r(e.name)})).catch((function(e){return s(e.message)}))},n.handleInput=function(e,t){var a=t.target.value,r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.state.userData);r[e]=a,n.setState({userData:r})},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container f-d-c"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"d-f f-d-c"},r.a.createElement("h1",{className:"d-f f-s-20px t-c-azure"},"Registration"),r.a.createElement("input",{type:"text",placeholder:"Name",name:"Name",required:!0,className:"input b-1px-s-cornflowerblue",onChange:function(t){return e.handleInput("name",t)}}),r.a.createElement("input",{type:"text",placeholder:"Email",name:"Email",required:!0,className:"input b-1px-s-cornflowerblue",onChange:function(t){return e.handleInput("email",t)}}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"Password",required:!0,className:"input b-1px-s-cornflowerblue",onChange:function(t){return e.handleInput("password",t)}}),r.a.createElement(m.b,{to:"/login",className:"d-f link m-b-5px"},"I already have an account"),r.a.createElement("button",{className:"button w-100 j-c-c p-10px"},"Register")))}}]),t}(a.Component),v=E(Object(f.b)((function(e){return{user:e.user}}),(function(e){return{onEnterUser:function(t){return e(h(t))},showErrorMessage:function(t){return e(k(t))}}}))(S)),y=n(16),w=n(5),T=n.n(w);function j(e){var t=JSON.parse(localStorage.getItem("user")),n=T.a.get(t,"token",!1),a=T.a.get(t,"token",!1),s=T.a.get(t,"token",!1);return t&&n&&a&&s?t.constructor===Object&&3===Object.entries(t).length?r.a.createElement(y.a,{to:"/main"}):r.a.createElement(y.a,{to:"/login"}):r.a.createElement(y.a,{to:{pathname:"/login"}})}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var x=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={userData:{email:"",password:""}},n.renderLogin=function(){return r.a.createElement("form",{onSubmit:n.handleSubmit,className:"form"},r.a.createElement("h1",{className:"d-f f-s-20px t-c-azure"},"Log in"),r.a.createElement("input",{type:"text",placeholder:"Email",name:"Email",required:!0,className:"d-f input",onChange:function(e){return n.handleInput("email",e)}}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"Password",required:!0,className:"d-f input",onChange:function(e){return n.handleInput("password",e)}}),r.a.createElement(m.b,{to:"/register",className:"d-f link m-b-5px"},"I have no account"),r.a.createElement("button",{className:"d-f button w-100 j-c-c p-10px"},"Log In"))},n.handleSubmit=function(e){e.preventDefault();var t=n.state.userData,a=n.props,r=a.onEnterUser,s=a.startLoading,c=a.showErrorMessage,o=a.UserService.loginUser;return s(),o(t).then((function(e){if(!e.success)return c(e.message);localStorage.setItem("user",JSON.stringify({id:e.id,name:e.name,token:e.token})),r(e.name),j()})).catch((function(e){return c(e.message)}))},n.handleInput=function(e,t){var a=t.target.value,r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.state.userData);r[e]=a,n.setState({userData:r})},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},this.renderLogin())}}]),t}(a.Component),C=E(Object(f.b)((function(e){return{user:e.user}}),(function(e){return{onEnterUser:function(t){return e(h(t))},startLoading:function(){return e({type:"START_LOADING"})},showErrorMessage:function(t){return e(k(t))}}}))(x)),A=n(18);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={taskBody:{title:"",content:"",scheduled:"",createdBy:"",userId:""}},n.renderTasks=function(){var e=n.props.tasks;return e.length?e.map((function(e,t){var a=e._id,s=e.title,c=e.content,o=e.scheduled,i=e.createdBy;return r.a.createElement("span",{key:t,className:"d-f f-d-c j-c-s-b list m-w-100p m-10-0px b-r-10px"},r.a.createElement("span",{className:"d-f f-s-2em m-b-10px"},s),r.a.createElement("span",{className:"d-f w-30 w-b b-r-10px b-1px-s-dark-blue p-5px"},c),r.a.createElement("span",{className:"d-f f-w j-c-s-b m-t-10px"},r.a.createElement("span",{className:"d-f m-r-10px"},"Created by: ",i),r.a.createElement("span",{className:"d-f m-l-10px"},"Scheduled: ",o.split("T")[0])),i===T.a.get(JSON.parse(localStorage.getItem("user")),"name","")?n.renderButtons(a,s,c,o,t):r.a.createElement("div",{className:"d-f f-d-c f-w"},r.a.createElement("span",{className:"d-f f-w j-c-c p-10px b-r-10px"},i," has shared that task with you. Only ",i," can edit and delete it with someone else"),r.a.createElement("div",{className:"d-f w-100 f-w j-c-s-a"},r.a.createElement("button",{className:"b-r-10px d-f m-10px bg-dark-blue button p-10px j-c-c w-40",onClick:function(e){return n.removeSharedLink(a,t,e)}},"Remove shared link of this task from me"),r.a.createElement("button",{className:"b-r-10px d-f m-10px bg-dark-blue button p-10px j-c-c w-40",onClick:n.handleSharingTask.bind(Object(A.a)(n),a,s)},"Share"))))})):r.a.createElement("span",{className:"d-f j-c-c w-100 p-100-0 t-c-azure f-s-2em"},r.a.createElement("span",{className:"d-f"},"You have no tasks for now"))},n.handleEditing=function(e,t){var a=t.target.value;(0,n.props.handleEditingTaskField)(e,a)},n.handleCancel=function(){(0,n.props.handleCancel)()},n.handleCreating=function(e,t){var a=t.target.value,r=_({},n.state.taskBody);r[e]=a,n.setState({taskBody:r})},n.showCreateTask=function(){(0,n.props.handleCreatingTask)()},n.showEditTask=function(e,t,a,r,s){(0,n.props.showEditTask)(e,t,a,r,s)},n.saveChanges=function(){var e=n.props,t=e.showErrorMessage,a=e.startLoading,r=e.saveChanges,s=e.currentTaskData,c=e.TaskService.putTask;return a(),c(s,T.a.get(JSON.parse(localStorage.getItem("user")),"token",!1)).then((function(e){return e.success?r(e.message):t(e.message)})).catch((function(e){console.log(e.message),t(e.message)}))},n.createTask=function(e){e.preventDefault();var t=n.state.taskBody,a=n.props,r=a.showErrorMessage,s=a.startLoading,c=a.createTask,o=a.TaskService.postTask;if(t.content.length>1e3)return r("Field content cannot be bigger than 1000 symbols");if(t.title.length>40)return r("Field title cannot be bigger than 40 symbols");var i=_({},t),u=JSON.parse(localStorage.getItem("user"));return i.userId=u.id,i.createdBy=u.name,s(),o(i,u.token).then((function(e){return e.success?(i._id=e.taskId,c(i,e.message)):r(e.message)})).catch((function(e){console.log(e),r(e.message)}))},n.deleteTask=function(e,t,a){a.preventDefault();var r=n.props,s=r.startLoading,c=r.showErrorMessage,o=r.deleteChosenTask,i=r.TaskService.deleteTask,u=JSON.parse(localStorage.getItem("user"));return s(),i(e,u.token).then((function(e){return e.success?o(t,e.message):c(e.message)})).catch((function(e){console.log(e),c(e.message)}))},n.removeSharedLink=function(e,t,a){a.preventDefault();var r=n.props,s=r.startLoading,c=r.showErrorMessage,o=r.removeSharedLinkOfSelectedTask,i=r.TaskService.removeSharedLink,u=JSON.parse(localStorage.getItem("user"));return s(),i(e,T.a.get(u,"id",!1),T.a.get(u,"token",!1)).then((function(e){return e.success?o(t,e.message):c(e.message)})).catch((function(e){console.log(e),c(e.message)}))},n.handleSharingTask=function(e,t){(0,n.props.handleSharingTask)(t,e)},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.startLoading,n=e.onTaskLoaded,a=e.showErrorMessage,r=e.TaskService.getTasks,s=JSON.parse(localStorage.getItem("user"));if(s&&s.token)return t(),r(s.token).then((function(e){return e.success?n(e.message):a(e.message)})).catch((function(e){return a(e.message)}))}},{key:"renderButtons",value:function(e,t,n,a,s){var c=this;return r.a.createElement("div",{className:"d-f w-100 f-w j-c-s-a"},r.a.createElement("button",{className:"b-r-10px m-10px d-f bg-dark-blue button w-30p p-10px j-c-c",onClick:this.showEditTask.bind(this,e,t,n,a,s)},"Edit"),r.a.createElement("button",{className:"b-r-10px m-10px d-f bg-dark-blue button w-30p p-10px j-c-c",onClick:function(t){return c.deleteTask(e,s,t)}},"Delete"),r.a.createElement("button",{className:"b-r-10px d-f m-10px bg-dark-blue button w-30p p-10px j-c-c",onClick:this.handleSharingTask.bind(this,e,t)},"Share"))}},{key:"renderTaskEditor",value:function(){var e=this.props,t=e.currentTaskData,n=e.isTaskCreating,a=this.state.taskBody,s=a.title,c=a.content,o=a.scheduled,i=n&&r.a.createElement("input",{type:"submit",className:"button m-0-5-5-5-px d-f j-c-c bg-dark-blue b-r-10px p-10px",value:"Create"}),u=n?this.handleCreating:this.handleEditing;return r.a.createElement("form",{onSubmit:this.createTask,className:"d-f f-w f-d-c w-100 list"},r.a.createElement("span",{className:"d-f"},"Title"),r.a.createElement("input",{type:"text",className:"d-f input b-n b-r-10px",value:n?s:t.title,onChange:function(e){return u("title",e)}}),r.a.createElement("span",{className:"d-f"},"Content"),r.a.createElement("textarea",{className:"d-f w-30 h-200px b-n input scroll-bar scroll-bar-b-c-white b-r-10px",value:n?c:t.content,onChange:function(e){return u("content",e)}}),r.a.createElement("span",{className:"d-f"},"At:"),r.a.createElement("input",{type:"date",className:"d-f input b-n w-40 b-r-10px",value:n?o:t.scheduled,onChange:function(e){return u("scheduled",e)}}),i)}},{key:"render",value:function(){var e=this.props.isEditable||this.props.isTaskCreating?this.renderTaskEditor():null,t=this.props.isEditable&&!this.props.isTaskCreating&&r.a.createElement("button",{className:"button m-10px w-100 d-f j-c-c p-10px",onClick:this.saveChanges},"Save"),n=!(!this.props.isEditable&&!this.props.isTaskCreating)&&r.a.createElement("button",{className:"button m-10px w-100 d-f j-c-c p-10px",onClick:this.handleCancel},"Cancel");return r.a.createElement("span",null,r.a.createElement("div",{className:"d-f f-d-c"},r.a.createElement("div",{className:"d-f w-100 j-c-s-b w-100"},r.a.createElement("button",{className:"button m-10px w-100 d-f j-c-c p-10px",onClick:this.showCreateTask},"Create"),t,n),r.a.createElement("div",{className:"d-f w-100 m-0-5-5-5-px"},e)),r.a.createElement("div",{className:"d-f f-d-c j-c-c p-10px"},this.renderTasks()))}}]),t}(a.Component),I=E(Object(f.b)((function(e){return{isEditable:e.isEditable,isTaskCreating:e.isTaskCreating,currentTaskData:e.currentTaskData,tasks:e.tasks,user:e.user,isUserEntered:e.isUserEntered}}),(function(e){return{handleEditingTaskField:function(t,n){return e(function(e,t){return{type:"HANDLE_EDITING_TASK_FIELD",payload:{field:e,value:t}}}(t,n))},handleCreatingTask:function(){return e({type:"HANDLE_CREATING_TASK"})},handleSharingTask:function(t,n){return e(function(e,t){return{type:"HANDLE_SHARING_TASK",payload:{title:e,_id:t}}}(t,n))},handleCancel:function(){return e({type:"HANDLE_CANCEL"})},saveChanges:function(t){return e({type:"SAVE_CHANGES",payload:t})},createTask:function(t,n){return e(function(e,t){return{type:"CREATE_TASK",payload:{taskBody:e,message:t}}}(t,n))},removeSharedLinkOfSelectedTask:function(t,n){return e({type:"DELETE_TASK",payload:{indexOfTask:t,message:n}})},deleteChosenTask:function(t,n){return e(function(e,t){return{type:"DELETE_TASK",payload:{indexOfTask:e,message:t}}}(t,n))},showEditTask:function(t,n,a,r,s){return e(function(e,t,n,a,r){return{type:"SHOW_EDIT_TASK",payload:{_id:e,title:t,content:n,scheduled:a,index:r}}}(t,n,a,r,s))},showErrorMessage:function(t){return e(k(t))},onTaskLoaded:function(t){return e({type:"ON_TASK_LOADED",payload:t})},startLoading:function(){return e({type:"START_LOADING"})}}}))(M)),L=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).renderSuccessMessage=function(e){return r.a.createElement("div",{className:"isa_success logMsg",onAnimationEnd:n.closeMessage.bind(Object(A.a)(n),"isa_success ")},r.a.createElement("i",{className:"fa fa-check"}),e)},n.renderErrorMessage=function(e){return r.a.createElement("div",{className:"isa_error logMsg",onAnimationEnd:n.closeMessage.bind(Object(A.a)(n),"isa_error")},r.a.createElement("i",{className:"fa fa-times-circle"}),e)},n.closeMessage=function(e){var t=n.props.hideMessage,a=document.getElementsByClassName(e)[0];setTimeout((function(){a.setAttribute("style","animation-name: hideMsg; animation-duration: 1s;")}),2e3),setTimeout((function(){t()}),4e3)},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.showSuccessMsg,n=e.showErrorMsg,a=e.msg,s=t?this.renderSuccessMessage(a):null,c=n?this.renderErrorMessage(a):null;return r.a.createElement("div",null,s||c)}}]),t}(a.Component),U=Object(f.b)((function(e){return{showSuccessMsg:e.showSuccessMsg,showErrorMsg:e.showErrorMsg,msg:e.msg}}),(function(e){return{hideMessage:function(){return e({type:"HIDE_MSG"})}}}))(L),P=n(19),R=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={chosenUserNames:[],chosenUsersId:[]},n.user=JSON.parse(localStorage.getItem("user")),n.shareTaskWithSelectedUsers=function(e){var t=n.props,a=t.shareSelectedTask,r=t.showErrorMessage,s=t.startLoading,c=t.TaskService.shareTask,o=n.state.chosenUsersId;return s(),c(e,o,T.a.get(n.user,"token",!1)).then((function(e){return e.success?a(e.message):r(e.message)})).catch((function(e){console.log(e),r(e.message)}))},n.handleChoosingUser=function(e,t){var a=n.state,r=a.chosenUserNames,s=a.chosenUsersId,c=Object(P.a)(r),o=Object(P.a)(s);if(c.includes(e)){var i=c.indexOf(e);c.splice(i,1),o.splice(i,1),n.setState({chosenUserNames:c,chosenUsersId:o})}else c.push(e),o.push(t),n.setState({chosenUserNames:c,chosenUsersId:o})},n.closeShareMenu=function(){(0,n.props.hideShareMenu)()},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.loadUsers,n=e.showErrorMessage,a=e.UserService.getAllUsers;if(T.a.get(this.user,"token",!1))return a(this.user.id,this.user.token).then((function(e){return e.success?t(e.message):n(e.message)})).catch((function(e){console.log(e.message),n(e.message)}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.users,a=t.taskToShare,s=a.title,c=a._id,o=this.state.chosenUserNames;return r.a.createElement("div",{className:"share-menu d-f f-s-20px j-c-c"},r.a.createElement("div",{className:"d-f w-30 f-d-c j-c-s-a p-10px t-c-azure share-list"},r.a.createElement("span",{className:"d-f"},"Select user with who you want to share task with title: ",s),r.a.createElement("ul",{className:"d-f j-c-c f-d-c bg-dark-blue h-500px p-10px"},r.a.createElement("span",{className:"d-f j-c-c m-b-10px b-b-1px-s-azure"},"Users"),r.a.createElement("div",{className:"scrollbar scroller"},n.map((function(t,n){var a=t.name,s=t.email,c=t._id;return r.a.createElement("li",{key:s,className:"b-1px-s-azure d-f clickable m-10px f-d-c j-c-c p-10px",onClick:e.handleChoosingUser.bind(e,a,c)},r.a.createElement("span",{className:"d-f"},"Name: ",a),r.a.createElement("span",{className:"d-f"},"Email: ",s))})))),r.a.createElement("span",null,"You choose: ",o.join(", ")),r.a.createElement("div",{className:"d-f j-c-s-a f-w w-100"},r.a.createElement("button",{className:"b-r-10px m-10px d-f bg-dark-blue button w-40 p-10px j-c-c",onClick:this.shareTaskWithSelectedUsers.bind(this,c)},"Share"),r.a.createElement("button",{className:"b-r-10px m-10px d-f bg-dark-blue button w-40 p-10px j-c-c",onClick:this.closeShareMenu},"Close"))))}}]),t}(a.Component),H=E(Object(f.b)((function(e){return{users:e.users,taskToShare:e.taskToShare}}),(function(e){return{loadUsers:function(t){return e({type:"GET_USERS",payload:t})},showErrorMessage:function(t){return e(k(t))},hideShareMenu:function(){return e({type:"HIDE_SHARE_MENU"})},shareSelectedTask:function(t){return e({type:"SHARE_TASK",payload:t})},startLoading:function(){return e({type:"START_LOADING"})}}}))(R));var B=function(){return r.a.createElement("header",{className:"header w-100"},r.a.createElement("span",{className:"header-text f-s-5em"},"Tasks"))},G=function(){return r.a.createElement("div",{className:"share-menu"},r.a.createElement("div",{className:"lds-facebook"},r.a.createElement("div",{className:"d-f"}),r.a.createElement("div",{className:"d-f"}),r.a.createElement("div",{className:"d-f"})))},J=(n(46),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).handleLogOut=function(){return(0,n.props.onLeaveUser)(),r.a.createElement(y.a,{to:{pathname:"/login"}})},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){j()}},{key:"render",value:function(){var e=this.props,t=e.showShareMenu,n=e.loader,a=e.showMsg,s=r.a.createElement("button",{className:"log-out p-10px button f-s-20px",onClick:this.handleLogOut},"Log out");return r.a.createElement("div",null,r.a.createElement(m.a,null,j(),T.a.get(JSON.parse(localStorage.getItem("user")),"token",!1)&&s||j(),n&&r.a.createElement(G,null),t&&r.a.createElement(H,null),a&&r.a.createElement(U,null),r.a.createElement(B,null),r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/login",component:C}),r.a.createElement(y.b,{exact:!0,path:"/register",component:v}),r.a.createElement(y.b,{exact:!0,path:"/main",component:I}))))}}]),t}(a.Component)),K=Object(f.b)((function(e){return{showMsg:e.showMsg,showShareMenu:e.showShareMenu,isUserEntered:e.isUserEntered,loader:e.loader}}),(function(e){return{onLeaveUser:function(){return e({type:"ON_LEAVE_USER"})}}}))(J),z=n(22);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q={currentTaskData:{title:"",content:"",scheduled:""},taskToShare:{_id:null,title:null},tasks:[],users:[],isEditable:!1,isTaskCreating:!1,isUserEntered:!1,loader:!1,showShareMenu:!1,showSuccessMsg:!1,showErrorMsg:!1,showMsg:!1,value:null,indexOfCurrentTask:null,msg:""},V=n(33),Y=Object(z.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case"HANDLE_EDITING_TASK_FIELD":var a=n.field,r=n.value,s=F({},e.currentTaskData);return s[a]=r,F({},e,{currentTaskData:s});case"SHOW_EDIT_TASK":var c=n._id,o=n.title,i=n.content,u=n.scheduled,l=n.index,p={_id:c,title:o,content:i,scheduled:u};return F({},e,{currentTaskData:p,isEditable:!0,isTaskCreating:!1,indexOfCurrentTask:l});case"ON_TASK_LOADED":return F({},e,{tasks:n,loader:!1});case"HANDLE_CREATING_TASK":var d={title:"",content:"",scheduled:""};return F({},e,{isTaskCreating:!0,isEditable:!1,currentTaskData:d});case"HANDLE_SHARING_TASK":return F({},e,{taskToShare:n,showShareMenu:!0,loader:!1});case"HIDE_SHARE_MENU":return F({},e,{showShareMenu:!1});case"SAVE_CHANGES":var h=e.tasks,m=e.indexOfCurrentTask,f=e.currentTaskData,g=Object(P.a)(h);return f._id=g[m]._id,f.createdBy=g[m].createdBy,g[m]=f,F({},e,{tasks:g,msg:n,showSuccessMsg:!0,showMsg:!0,loader:!1});case"CREATE_TASK":var b=n.taskBody,E=n.message,k=e.tasks,O=Object(P.a)(k);return O.unshift(b),F({},e,{tasks:O,msg:E,showSuccessMsg:!0,showMsg:!0,loader:!1});case"DELETE_TASK":var S=n.indexOfTask,v=n.message,y=e.tasks,w=Object(P.a)(y);return w.splice(S,1),F({},e,{tasks:w,msg:v,showSuccessMsg:!0,showMsg:!0,loader:!1});case"SHARE_TASK":return F({},e,{msg:n,showSuccessMsg:!0,showMsg:!0,loader:!1});case"HANDLE_CANCEL":return F({},e,{isEditable:!1,isTaskCreating:!1});case"ON_ENTER_USER":var T=JSON.parse(localStorage.getItem("user"));return F({},e,{user:T,isUserEntered:!0,msg:n,showSuccessMsg:!0,showMsg:!0,loader:!1});case"ON_LEAVE_USER":return localStorage.removeItem("user"),F({},e,{isUserEntered:!1,tasks:[],users:[]});case"START_LOADING":return F({},e,{loader:!0});case"GET_USERS":return F({},e,{users:n,loader:!1});case"SHOW_ERROR_MSG":return F({},e,{msg:n,showErrorMsg:!0,showMsg:!0,loader:!1});case"HIDE_MSG":return F({},e,{showSuccessMsg:!1,showErrorMsg:!1,showMsg:!1,msg:""});default:return e}}),Object(z.a)(V.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f.a,{store:Y},r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.24e7daa1.chunk.js.map