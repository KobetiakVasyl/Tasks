(this["webpackJsonpnerdisoft-test-task-front"]=this["webpackJsonpnerdisoft-test-task-front"]||[]).push([[0],{20:function(e,t,a){},34:function(e,t,a){e.exports=a(47)},39:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),c=a.n(s),o=(a(39),a(2)),i=a(7),u=a(9),l=a(8),d=a(10),p=a(15),h=(a(20),function(e){return{type:"ON_ENTER_USER",payload:"Welcome ".concat(e,"!")}}),m=a(17),f=a(3),g=new function e(){var t=this;Object(o.a)(this,e),this.BASE_URL="https://tasks-heroku.herokuapp.com/api",this.getTasks=function(e){return fetch("".concat(t.BASE_URL,"/task"),{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},this.postTask=function(e,a){return fetch("".concat(t.BASE_URL,"/task"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},this.deleteTask=function(e,a){return fetch("".concat(t.BASE_URL,"/task/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},this.putTask=function(e,a){return fetch("".concat(t.BASE_URL,"/task/").concat(e._id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},this.shareTask=function(e,a,n){return fetch("".concat(t.BASE_URL,"/task/").concat(e,"/share"),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},this.removeSharedLink=function(e,a,n){return fetch("".concat(t.BASE_URL,"/task/").concat(e,"/remove"),{method:"PATCH",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},E=new function e(){var t=this;Object(o.a)(this,e),this.BASE_URL="https://tasks-heroku.herokuapp.com/api/user",this.registerUser=function(e){return fetch("".concat(t.BASE_URL,"/register"),{method:"POST",headers:{Accept:"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},this.loginUser=function(e){return fetch("".concat(t.BASE_URL,"/login"),{method:"POST",headers:{Accept:"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},this.getAllUsers=function(e,a){return fetch("".concat(t.BASE_URL,"/").concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},b=function(e){return function(t){return r.a.createElement(e,Object.assign({},t,{TaskService:g,UserService:E}))}},k=function(e){return{type:"SHOW_ERROR_MSG",payload:e}};function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={userData:{name:"",email:"",password:""}},a.handleSubmit=function(e){e.preventDefault();var t=a.state.userData,n=a.props,r=n.onEnterUser,s=n.showErrorMessage;return(0,n.UserService.registerUser)(t).then((function(e){if(!e.success)return s(e.message);localStorage.setItem("user",JSON.stringify({id:e.id,name:e.name,token:e.token})),r(e.name)})).catch((function(e){return s(e.message)}))},a.handleInput=function(e,t){var n=t.target.value,r=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state.userData);r[e]=n,a.setState({userData:r})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container f-d-c"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"d-f f-d-c"},r.a.createElement("h1",{className:"d-f f-s-20px t-c-azure"},"Registration"),r.a.createElement("input",{type:"text",placeholder:"Name",name:"Name",required:!0,className:"input b-1px-s-cornflowerblue",onChange:function(t){return e.handleInput("name",t)}}),r.a.createElement("input",{type:"text",placeholder:"Email",name:"Email",required:!0,className:"input b-1px-s-cornflowerblue",onChange:function(t){return e.handleInput("email",t)}}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"Password",required:!0,className:"input b-1px-s-cornflowerblue",onChange:function(t){return e.handleInput("password",t)}}),r.a.createElement(m.b,{to:"/login",className:"d-f link m-b-5px"},"I already have an account"),r.a.createElement("button",{className:"button w-100 j-c-c p-10px"},"Register")))}}]),t}(n.Component),v=b(Object(f.b)((function(e){return{user:e.user}}),(function(e){return{onEnterUser:function(t){return e(h(t))},showErrorMessage:function(t){return e(k(t))}}}))(O)),y=a(16),w=a(5),T=a.n(w);function j(e){var t=JSON.parse(localStorage.getItem("user")),a=T.a.get(t,"token",!1),n=T.a.get(t,"token",!1),s=T.a.get(t,"token",!1);return t&&a&&n&&s?t.constructor===Object&&3===Object.entries(t).length?r.a.createElement(y.a,{to:"/main"}):r.a.createElement(y.a,{to:"/login"}):r.a.createElement(y.a,{to:{pathname:"/login"}})}function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={userData:{email:"",password:""}},a.renderLogin=function(){return r.a.createElement("form",{onSubmit:a.handleSubmit,className:"form"},r.a.createElement("h1",{className:"d-f f-s-20px t-c-azure"},"Log in"),r.a.createElement("input",{type:"text",placeholder:"Email",name:"Email",required:!0,className:"d-f input",onChange:function(e){return a.handleInput("email",e)}}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"Password",required:!0,className:"d-f input",onChange:function(e){return a.handleInput("password",e)}}),r.a.createElement(m.b,{to:"/register",className:"d-f link m-b-5px"},"I have no account"),r.a.createElement("button",{className:"d-f button w-100 j-c-c p-10px"},"Log In"))},a.handleSubmit=function(e){e.preventDefault();var t=a.state.userData,n=a.props,r=n.onEnterUser,s=n.startLoading,c=n.showErrorMessage,o=n.UserService.loginUser;return s(),o(t).then((function(e){if(!e.success)return c(e.message);localStorage.setItem("user",JSON.stringify({id:e.id,name:e.name,token:e.token})),r(e.name),j()})).catch((function(e){return c(e.message)}))},a.handleInput=function(e,t){var n=t.target.value,r=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state.userData);r[e]=n,a.setState({userData:r})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},this.renderLogin())}}]),t}(n.Component),x=b(Object(f.b)((function(e){return{user:e.user}}),(function(e){return{onEnterUser:function(t){return e(h(t))},startLoading:function(){return e({type:"START_LOADING"})},showErrorMessage:function(t){return e(k(t))}}}))(A)),_=a(18);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={taskBody:{title:"",content:"",scheduled:"",createdBy:"",userId:""}},a.renderTasks=function(){var e=a.props.tasks;return e.length?e.map((function(e,t){var n=e._id,s=e.title,c=e.content,o=e.scheduled,i=e.createdBy;return r.a.createElement("span",{key:t,className:"d-f f-d-c j-c-s-b list m-w-100p m-10-0px b-r-10px"},r.a.createElement("span",{className:"d-f f-s-2em m-b-10px"},s),r.a.createElement("span",{className:"d-f w-30 b-r-10px b-1px-s-dark-blue p-5px"},c),r.a.createElement("span",{className:"d-f f-w j-c-s-b m-t-10px"},r.a.createElement("span",{className:"d-f m-r-10px"},"Created by: ",i),r.a.createElement("span",{className:"d-f m-l-10px"},"Scheduled: ",o.split("T")[0])),i===T.a.get(JSON.parse(localStorage.getItem("user")),"name","")?a.renderButtons(n,s,c,o,t):r.a.createElement("div",{className:"d-f f-d-c f-w"},r.a.createElement("span",{className:"d-f f-w j-c-c p-10px b-r-10px"},i," has shared that task with you. Only ",i," can edit and delete it with someone else"),r.a.createElement("div",{className:"d-f w-100 f-w j-c-s-a"},r.a.createElement("button",{className:"b-r-10px d-f m-10px bg-dark-blue button p-10px j-c-c w-40",onClick:function(e){return a.removeSharedLink(n,t,e)}},"Remove shared link of this task from me"),r.a.createElement("button",{className:"b-r-10px d-f m-10px bg-dark-blue button p-10px j-c-c w-40",onClick:a.handleSharingTask.bind(Object(_.a)(a),n,s)},"Share"))))})):r.a.createElement("span",{className:"d-f j-c-c w-100 p-100-0 t-c-azure f-s-2em"},r.a.createElement("span",{className:"d-f"},"You have no tasks for now"))},a.handleEditing=function(e,t){var n=t.target.value;(0,a.props.handleEditingTaskField)(e,n)},a.handleCancel=function(){(0,a.props.handleCancel)()},a.handleCreating=function(e,t){var n=t.target.value,r=D({},a.state.taskBody);r[e]=n,a.setState({taskBody:r})},a.showCreateTask=function(){(0,a.props.handleCreatingTask)()},a.showEditTask=function(e,t,n,r,s){(0,a.props.showEditTask)(e,t,n,r,s)},a.saveChanges=function(){var e=a.props,t=e.showErrorMessage,n=e.startLoading,r=e.saveChanges,s=e.currentTaskData,c=e.TaskService.putTask;return n(),c(s,T.a.get(JSON.parse(localStorage.getItem("user")),"token",!1)).then((function(e){return e.success?r(e.message):t(e.message)})).catch((function(e){console.log(e.message),t(e.message)}))},a.createTask=function(e){e.preventDefault();var t=a.state.taskBody,n=a.props,r=n.showErrorMessage,s=n.startLoading,c=n.createTask,o=n.TaskService.postTask,i=D({},t),u=JSON.parse(localStorage.getItem("user"));return i.userId=u.id,i.createdBy=u.name,s(),o(i,u.token).then((function(e){return e.success?(i._id=e.taskId,c(i,e.message)):r(e.message)})).catch((function(e){console.log(e),r(e.message)}))},a.deleteTask=function(e,t,n){n.preventDefault();var r=a.props,s=r.startLoading,c=r.showErrorMessage,o=r.deleteChosenTask,i=r.TaskService.deleteTask,u=JSON.parse(localStorage.getItem("user"));return s(),i(e,u.token).then((function(e){return e.success?o(t,e.message):c(e.message)})).catch((function(e){console.log(e),c(e.message)}))},a.removeSharedLink=function(e,t,n){n.preventDefault();var r=a.props,s=r.startLoading,c=r.showErrorMessage,o=r.removeSharedLinkOfSelectedTask,i=r.TaskService.removeSharedLink,u=JSON.parse(localStorage.getItem("user"));return s(),i(e,T.a.get(u,"id",!1),T.a.get(u,"token",!1)).then((function(e){return e.success?o(t,e.message):c(e.message)})).catch((function(e){console.log(e),c(e.message)}))},a.handleSharingTask=function(e,t){(0,a.props.handleSharingTask)(t,e)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.startLoading,a=e.onTaskLoaded,n=e.showErrorMessage,r=e.TaskService.getTasks,s=JSON.parse(localStorage.getItem("user"));if(s&&s.token)return t(),r(s.token).then((function(e){return e.success?a(e.message):n(e.message)})).catch((function(e){return n(e.message)}))}},{key:"renderButtons",value:function(e,t,a,n,s){var c=this;return r.a.createElement("div",{className:"d-f w-100 f-w j-c-s-a"},r.a.createElement("button",{className:"b-r-10px m-10px d-f bg-dark-blue button w-30p p-10px j-c-c",onClick:this.showEditTask.bind(this,e,t,a,n,s)},"Edit"),r.a.createElement("button",{className:"b-r-10px m-10px d-f bg-dark-blue button w-30p p-10px j-c-c",onClick:function(t){return c.deleteTask(e,s,t)}},"Delete"),r.a.createElement("button",{className:"b-r-10px d-f m-10px bg-dark-blue button w-30p p-10px j-c-c",onClick:this.handleSharingTask.bind(this,e,t)},"Share"))}},{key:"renderTaskEditor",value:function(){var e=this.props,t=e.currentTaskData,a=e.isTaskCreating,n=this.state.taskBody,s=n.title,c=n.content,o=n.scheduled,i=a&&r.a.createElement("input",{type:"submit",className:"button m-0-5-5-5-px d-f j-c-c bg-dark-blue b-r-10px p-10px",value:"Create"}),u=a?this.handleCreating:this.handleEditing;return r.a.createElement("form",{onSubmit:this.createTask,className:"d-f f-w f-d-c w-100 list"},r.a.createElement("span",{className:"d-f"},"Title"),r.a.createElement("input",{type:"text",className:"d-f input b-n b-r-10px",value:a?s:t.title,onChange:function(e){return u("title",e)}}),r.a.createElement("span",{className:"d-f"},"Content"),r.a.createElement("textarea",{className:"d-f w-30 h-200px b-n input scroll-bar scroll-bar-b-c-white b-r-10px",value:a?c:t.content,onChange:function(e){return u("content",e)}}),r.a.createElement("span",{className:"d-f"},"At:"),r.a.createElement("input",{type:"date",className:"d-f input b-n w-40 b-r-10px",value:a?o:t.scheduled,onChange:function(e){return u("scheduled",e)}}),i)}},{key:"render",value:function(){var e=this.props.isEditable||this.props.isTaskCreating?this.renderTaskEditor():null,t=this.props.isEditable&&!this.props.isTaskCreating&&r.a.createElement("button",{className:"button m-10px w-100 d-f j-c-c p-10px",onClick:this.saveChanges},"Save"),a=!(!this.props.isEditable&&!this.props.isTaskCreating)&&r.a.createElement("button",{className:"button m-10px w-100 d-f j-c-c p-10px",onClick:this.handleCancel},"Cancel");return r.a.createElement("span",null,r.a.createElement("div",{className:"d-f f-d-c"},r.a.createElement("div",{className:"d-f w-100 j-c-s-b w-100"},r.a.createElement("button",{className:"button m-10px w-100 d-f j-c-c p-10px",onClick:this.showCreateTask},"Create"),t,a),r.a.createElement("div",{className:"d-f w-100 m-0-5-5-5-px"},e)),r.a.createElement("div",{className:"d-f f-d-c j-c-c p-10px"},this.renderTasks()))}}]),t}(n.Component),L=b(Object(f.b)((function(e){return{isEditable:e.isEditable,isTaskCreating:e.isTaskCreating,currentTaskData:e.currentTaskData,tasks:e.tasks,user:e.user,isUserEntered:e.isUserEntered}}),(function(e){return{handleEditingTaskField:function(t,a){return e(function(e,t){return{type:"HANDLE_EDITING_TASK_FIELD",payload:{field:e,value:t}}}(t,a))},handleCreatingTask:function(){return e({type:"HANDLE_CREATING_TASK"})},handleSharingTask:function(t,a){return e(function(e,t){return{type:"HANDLE_SHARING_TASK",payload:{title:e,_id:t}}}(t,a))},handleCancel:function(){return e({type:"HANDLE_CANCEL"})},saveChanges:function(t){return e({type:"SAVE_CHANGES",payload:t})},createTask:function(t,a){return e(function(e,t){return{type:"CREATE_TASK",payload:{taskBody:e,message:t}}}(t,a))},removeSharedLinkOfSelectedTask:function(t,a){return e({type:"DELETE_TASK",payload:{indexOfTask:t,message:a}})},deleteChosenTask:function(t,a){return e(function(e,t){return{type:"DELETE_TASK",payload:{indexOfTask:e,message:t}}}(t,a))},showEditTask:function(t,a,n,r,s){return e(function(e,t,a,n,r){return{type:"SHOW_EDIT_TASK",payload:{_id:e,title:t,content:a,scheduled:n,index:r}}}(t,a,n,r,s))},showErrorMessage:function(t){return e(k(t))},onTaskLoaded:function(t){return e({type:"ON_TASK_LOADED",payload:t})},startLoading:function(){return e({type:"START_LOADING"})}}}))(M)),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).renderSuccessMessage=function(e){return r.a.createElement("div",{className:"isa_success logMsg",onAnimationEnd:a.closeMessage.bind(Object(_.a)(a),"isa_success ")},r.a.createElement("i",{className:"fa fa-check"}),e)},a.renderErrorMessage=function(e){return r.a.createElement("div",{className:"isa_error logMsg",onAnimationEnd:a.closeMessage.bind(Object(_.a)(a),"isa_error")},r.a.createElement("i",{className:"fa fa-times-circle"}),e)},a.closeMessage=function(e){var t=a.props.hideMessage,n=document.getElementsByClassName(e)[0];setTimeout((function(){n.setAttribute("style","animation-name: hideMsg; animation-duration: 1s;")}),2e3),setTimeout((function(){t()}),4e3)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.showSuccessMsg,a=e.showErrorMsg,n=e.msg,s=t?this.renderSuccessMessage(n):null,c=a?this.renderErrorMessage(n):null;return r.a.createElement("div",null,s||c)}}]),t}(n.Component),I=Object(f.b)((function(e){return{showSuccessMsg:e.showSuccessMsg,showErrorMsg:e.showErrorMsg,msg:e.msg}}),(function(e){return{hideMessage:function(){return e({type:"HIDE_MSG"})}}}))(U),P=a(19),R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={chosenUserNames:[],chosenUsersId:[]},a.user=JSON.parse(localStorage.getItem("user")),a.shareTaskWithSelectedUsers=function(e){var t=a.props,n=t.shareSelectedTask,r=t.showErrorMessage,s=t.startLoading,c=t.TaskService.shareTask,o=a.state.chosenUsersId;return s(),c(e,o,T.a.get(a.user,"token",!1)).then((function(e){return e.success?n(e.message):r(e.message)})).catch((function(e){console.log(e),r(e.message)}))},a.handleChoosingUser=function(e,t){var n=a.state,r=n.chosenUserNames,s=n.chosenUsersId,c=Object(P.a)(r),o=Object(P.a)(s);if(c.includes(e)){var i=c.indexOf(e);c.splice(i,1),o.splice(i,1),a.setState({chosenUserNames:c,chosenUsersId:o})}else c.push(e),o.push(t),a.setState({chosenUserNames:c,chosenUsersId:o})},a.closeShareMenu=function(){(0,a.props.hideShareMenu)()},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.loadUsers,a=e.showErrorMessage,n=e.UserService.getAllUsers;if(T.a.get(this.user,"token",!1))return n(this.user.id,this.user.token).then((function(e){return e.success?t(e.message):a(e.message)})).catch((function(e){console.log(e.message),a(e.message)}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.users,n=t.taskToShare,s=n.title,c=n._id,o=this.state.chosenUserNames;return r.a.createElement("div",{className:"share-menu d-f f-s-20px j-c-c"},r.a.createElement("div",{className:"d-f w-30 f-d-c j-c-s-a p-10px t-c-azure share-list"},r.a.createElement("span",{className:"d-f"},"Select user with who you want to share task with title: ",s),r.a.createElement("ul",{className:"d-f j-c-c f-d-c bg-dark-blue h-500px p-10px"},r.a.createElement("span",{className:"d-f j-c-c m-b-10px b-b-1px-s-azure"},"Users"),r.a.createElement("div",{className:"scrollbar scroller"},a.map((function(t,a){var n=t.name,s=t.email,c=t._id;return r.a.createElement("li",{key:s,className:"b-1px-s-azure d-f clickable m-10px f-d-c j-c-c p-10px",onClick:e.handleChoosingUser.bind(e,n,c)},r.a.createElement("span",{className:"d-f"},"Name: ",n),r.a.createElement("span",{className:"d-f"},"Email: ",s))})))),r.a.createElement("span",null,"You choose: ",o.join(", ")),r.a.createElement("div",{className:"d-f j-c-s-a f-w w-100"},r.a.createElement("button",{className:"b-r-10px m-10px d-f bg-dark-blue button w-40 p-10px j-c-c",onClick:this.shareTaskWithSelectedUsers.bind(this,c)},"Share"),r.a.createElement("button",{className:"b-r-10px m-10px d-f bg-dark-blue button w-40 p-10px j-c-c",onClick:this.closeShareMenu},"Close"))))}}]),t}(n.Component),B=b(Object(f.b)((function(e){return{users:e.users,taskToShare:e.taskToShare}}),(function(e){return{loadUsers:function(t){return e({type:"GET_USERS",payload:t})},showErrorMessage:function(t){return e(k(t))},hideShareMenu:function(){return e({type:"HIDE_SHARE_MENU"})},shareSelectedTask:function(t){return e({type:"SHARE_TASK",payload:t})},startLoading:function(){return e({type:"START_LOADING"})}}}))(R));var H=function(){return r.a.createElement("header",{className:"header w-100"},r.a.createElement("span",{className:"header-text f-s-5em"},"Tasks"))},G=function(){return r.a.createElement("div",{className:"share-menu"},r.a.createElement("div",{className:"lds-facebook"},r.a.createElement("div",{className:"d-f"}),r.a.createElement("div",{className:"d-f"}),r.a.createElement("div",{className:"d-f"})))},J=(a(46),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).handleLogOut=function(){return(0,a.props.onLeaveUser)(),r.a.createElement(y.a,{to:{pathname:"/login"}})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){j()}},{key:"render",value:function(){var e=this.props,t=e.showShareMenu,a=e.loader,n=e.showMsg,s=r.a.createElement("button",{className:"log-out p-10px button f-s-20px",onClick:this.handleLogOut},"Log out");return r.a.createElement("div",null,r.a.createElement(m.a,null,j(),T.a.get(JSON.parse(localStorage.getItem("user")),"token",!1)&&s||j(),a&&r.a.createElement(G,null),t&&r.a.createElement(B,null),n&&r.a.createElement(I,null),r.a.createElement(H,null),r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/login",component:x}),r.a.createElement(y.b,{exact:!0,path:"/register",component:v}),r.a.createElement(y.b,{exact:!0,path:"/main",component:L}))))}}]),t}(n.Component)),K=Object(f.b)((function(e){return{showMsg:e.showMsg,showShareMenu:e.showShareMenu,isUserEntered:e.isUserEntered,loader:e.loader}}),(function(e){return{onLeaveUser:function(){return e({type:"ON_LEAVE_USER"})}}}))(J),z=a(22);function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var F={currentTaskData:{title:"",content:"",scheduled:""},taskToShare:{_id:null,title:null},tasks:[],users:[],isEditable:!1,isTaskCreating:!1,isUserEntered:!1,loader:!1,showShareMenu:!1,showSuccessMsg:!1,showErrorMsg:!1,showMsg:!1,value:null,indexOfCurrentTask:null,msg:""},V=a(33),Y=Object(z.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case"HANDLE_EDITING_TASK_FIELD":var n=a.field,r=a.value,s=q({},e.currentTaskData);return s[n]=r,q({},e,{currentTaskData:s});case"SHOW_EDIT_TASK":var c=a._id,o=a.title,i=a.content,u=a.scheduled,l=a.index,d={_id:c,title:o,content:i,scheduled:u};return q({},e,{currentTaskData:d,isEditable:!0,isTaskCreating:!1,indexOfCurrentTask:l});case"ON_TASK_LOADED":return q({},e,{tasks:a,loader:!1});case"HANDLE_CREATING_TASK":var p={title:"",content:"",scheduled:""};return q({},e,{isTaskCreating:!0,isEditable:!1,currentTaskData:p});case"HANDLE_SHARING_TASK":return q({},e,{taskToShare:a,showShareMenu:!0,loader:!1});case"HIDE_SHARE_MENU":return q({},e,{showShareMenu:!1});case"SAVE_CHANGES":var h=e.tasks,m=e.indexOfCurrentTask,f=e.currentTaskData,g=Object(P.a)(h);return f._id=g[m]._id,f.createdBy=g[m].createdBy,g[m]=f,q({},e,{tasks:g,msg:a,showSuccessMsg:!0,showMsg:!0,loader:!1});case"CREATE_TASK":var E=a.taskBody,b=a.message,k=e.tasks,S=Object(P.a)(k);return S.unshift(E),q({},e,{tasks:S,msg:b,showSuccessMsg:!0,showMsg:!0,loader:!1});case"DELETE_TASK":var O=a.indexOfTask,v=a.message,y=e.tasks,w=Object(P.a)(y);return w.splice(O,1),q({},e,{tasks:w,msg:v,showSuccessMsg:!0,showMsg:!0,loader:!1});case"SHARE_TASK":return q({},e,{msg:a,showSuccessMsg:!0,showMsg:!0,loader:!1});case"HANDLE_CANCEL":return q({},e,{isEditable:!1,isTaskCreating:!1});case"ON_ENTER_USER":var T=JSON.parse(localStorage.getItem("user"));return q({},e,{user:T,isUserEntered:!0,msg:a,showSuccessMsg:!0,showMsg:!0,loader:!1});case"ON_LEAVE_USER":return localStorage.removeItem("user"),q({},e,{isUserEntered:!1,tasks:[],users:[]});case"START_LOADING":return q({},e,{loader:!0});case"GET_USERS":return q({},e,{users:a,loader:!1});case"SHOW_ERROR_MSG":return q({},e,{msg:a,showErrorMsg:!0,showMsg:!0,loader:!1});case"HIDE_MSG":return q({},e,{showSuccessMsg:!1,showErrorMsg:!1,showMsg:!1,msg:""});default:return e}}),Object(z.a)(V.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f.a,{store:Y},r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.6b7568cd.chunk.js.map