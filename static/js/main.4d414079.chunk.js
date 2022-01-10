(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{119:function(t,e,n){},120:function(t,e,n){},145:function(t,e,n){"use strict";n.r(e);var a,c,i=n(0),o=n.n(i),r=n(32),s=n.n(r),l=(n(119),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,209)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),i(t),o(t)}))}),d=(n(120),n(23)),u=n(14),j=n(16),b=n(93),O=n.n(b).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"3895237b-fa73-4a8c-be22-6b3619fd0f88"}}),f=function(){return O.get("todo-lists")},h=function(t){return O.post("todo-lists",{title:t})},T=function(t){return O.delete("todo-lists/".concat(t))},m=function(t,e){return O.put("todo-lists/".concat(t),{title:e})},p=function(t){return O.get("todo-lists/".concat(t,"/tasks"))},v=function(t,e){return O.delete("todo-lists/".concat(t,"/tasks/").concat(e))},g=function(t,e){return O.post("todo-lists/".concat(t,"/tasks"),{title:e})},x=function(t,e,n){return O.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},k=function(t){return O.post("auth/login",t)};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(c||(c={}));var S={status:"idle",error:null},C=function(t){return{type:"APP/SET-ERROR",error:t}},I=function(t){return{type:"APP/SET-STATUS",status:t}},y=[],E=n(5),D=function(t,e){t.messages.length?e(C(t.messages[0])):e(C("Some error occurred")),e(I("failed"))},A=function(t,e){e(C(t.message?t.message:"Some error occurred")),e(I("failed"))},w={},L=function(t,e,n){return function(a,c){var i=c().tasks[n].find((function(e){return e.id===t}));if(i){var o=Object(u.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);x(n,t,o).then((function(c){if(0===c.data.resultCode){var i=function(t,e,n){return{type:"UPDATE-TASK",model:e,todolistId:n,taskId:t}}(t,e,n);a(i)}else D(c.data,a)})).catch((function(t){A(t,a)}))}else console.warn("task not found in the state")}},P=n(198),F=n(206),N=n(13),R=n(191),M=n(199),K=n(187),H=n(1),U=o.a.memo((function(t){var e=t.addItem,n=t.disabled,a=void 0!==n&&n;console.log("AddItemForm called");var c=Object(i.useState)(""),o=Object(N.a)(c,2),r=o[0],s=o[1],l=Object(i.useState)(null),d=Object(N.a)(l,2),u=d[0],j=d[1],b=function(){""!==r.trim()?(e(r),s("")):j("Title is required")};return Object(H.jsxs)("div",{children:[Object(H.jsx)(R.a,{variant:"outlined",disabled:a,error:!!u,value:r,onChange:function(t){s(t.currentTarget.value)},onKeyPress:function(t){null!==u&&j(null),13===t.charCode&&b()},label:"Title",helperText:u}),Object(H.jsx)(M.a,{color:"primary",onClick:b,disabled:a,children:Object(H.jsx)(K.a,{})})]})})),G=n(100),V=o.a.memo((function(t){console.log("EditableSpan called");var e=Object(i.useState)(!1),n=Object(N.a)(e,2),a=n[0],c=n[1],o=Object(i.useState)(t.value),r=Object(N.a)(o,2),s=r[0],l=r[1];return a?Object(H.jsx)(R.a,{value:s,onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.onChange(s)}}):Object(H.jsx)("span",{onDoubleClick:function(){c(!0),l(t.value)},children:t.value})})),Y=n(200),B=n(188),J=n(193),Z=o.a.memo((function(t){var e=Object(i.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),n=Object(i.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?a.Completed:a.New,t.todolistId)}),[t.task.id,t.todolistId]),c=Object(i.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return Object(H.jsxs)("div",{className:t.task.status===a.Completed?"is-done":"",children:[Object(H.jsx)(J.a,{checked:t.task.status===a.Completed,color:"primary",onChange:n}),Object(H.jsx)(V,{value:t.task.title,onChange:c}),Object(H.jsx)(M.a,{onClick:e,children:Object(H.jsx)(B.a,{})})]},t.task.id)})),q=o.a.memo((function(t){var e=t.demo,n=void 0!==e&&e,c=Object(G.a)(t,["demo"]);console.log("Todolist called");var o=Object(d.b)();Object(i.useEffect)((function(){if(!n){var t,e=(t=c.todolist.id,function(e){e(I("loading")),p(t).then((function(n){var a=n.data.items;e(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(a,t)),e(I("succeeded"))}))});o(e)}}),[]);var r=Object(i.useCallback)((function(t){c.addTask(t,c.todolist.id)}),[c.addTask,c.todolist.id]),s=Object(i.useCallback)((function(t){c.changeTodolistTitle(c.todolist.id,t)}),[c.todolist.id,c.changeTodolistTitle]),l=Object(i.useCallback)((function(){return c.changeFilter("all",c.todolist.id)}),[c.todolist.id,c.changeFilter]),u=Object(i.useCallback)((function(){return c.changeFilter("active",c.todolist.id)}),[c.todolist.id,c.changeFilter]),j=Object(i.useCallback)((function(){return c.changeFilter("completed",c.todolist.id)}),[c.todolist.id,c.changeFilter]),b=c.tasks;return"active"===c.todolist.filter&&(b=c.tasks.filter((function(t){return t.status===a.New}))),"completed"===c.todolist.filter&&(b=c.tasks.filter((function(t){return t.status===a.Completed}))),Object(H.jsxs)("div",{children:[Object(H.jsxs)("h3",{children:[Object(H.jsx)(V,{value:c.todolist.title,onChange:s}),Object(H.jsx)(M.a,{onClick:function(){c.removeTodolist(c.todolist.id)},disabled:"loading"===c.todolist.entityStatus,children:Object(H.jsx)(B.a,{})})]}),Object(H.jsx)(U,{addItem:r,disabled:"loading"===c.todolist.entityStatus}),Object(H.jsx)("div",{children:b.map((function(t){return Object(H.jsx)(Z,{task:t,todolistId:c.todolist.id,removeTask:c.removeTask,changeTaskTitle:c.changeTaskTitle,changeTaskStatus:c.changeTaskStatus},t.id)}))}),Object(H.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(H.jsx)(Y.a,{variant:"all"===c.todolist.filter?"outlined":"text",onClick:l,color:"inherit",children:"All"}),Object(H.jsx)(Y.a,{variant:"active"===c.todolist.filter?"outlined":"text",onClick:u,color:"primary",children:"Active"}),Object(H.jsx)(Y.a,{variant:"completed"===c.todolist.filter?"outlined":"text",onClick:j,color:"secondary",children:"Completed"})]})]})})),_=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(d.c)((function(t){return t.todolists})),c=Object(d.c)((function(t){return t.tasks})),o=Object(d.b)();Object(i.useEffect)((function(){if(!n){var t=function(t){t(I("loading")),f().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data}),t(I("succeeded"))}))};o(t)}}),[]);var r=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){v(e,t).then((function(a){var c=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);n(c)}))}}(t,e);o(n)}),[]),s=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){n(I("loading")),g(e,t).then((function(t){if(0===t.data.resultCode){var e={type:"ADD-TASK",task:t.data.data.item};n(e),n(I("succeeded"))}else D(t.data,n)})).catch((function(t){A(t,n)}))}}(t,e);o(n)}),[]),l=Object(i.useCallback)((function(t,e,n){var a=L(t,{status:e},n);o(a)}),[]),u=Object(i.useCallback)((function(t,e,n){var a=L(t,{title:e},n);o(a)}),[]),j=Object(i.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};o(n)}),[]),b=Object(i.useCallback)((function(t){var e,n=(e=t,function(t){t(I("loading")),t({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e,status:"loading"}),T(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e)),t(I("succeeded"))}))});o(n)}),[]),O=Object(i.useCallback)((function(t,e){var n=function(t,e){return function(n){m(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);o(n)}),[]),p=Object(i.useCallback)((function(t){var e=function(t){return function(e){e(I("loading")),h(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item}),e(I("succeeded"))}))}}(t);o(e)}),[o]);return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(P.a,{container:!0,style:{padding:"20px"},children:Object(H.jsx)(U,{addItem:p})}),Object(H.jsx)(P.a,{container:!0,spacing:3,children:a.map((function(t){var e=c[t.id];return Object(H.jsx)(P.a,{item:!0,children:Object(H.jsx)(F.a,{style:{padding:"10px"},children:Object(H.jsx)(q,{todolist:t,tasks:e,removeTask:r,changeFilter:j,addTask:s,changeTaskStatus:l,removeTodolist:b,changeTaskTitle:u,changeTodolistTitle:O,demo:n})})},t.id)}))})]})},$=n(202),z=n(203),Q=n(201),W=n(205),X=n(204),tt=n(190),et=n(195),nt=n(194),at=o.a.forwardRef((function(t,e){return Object(H.jsx)(nt.a,Object(u.a)({elevation:6,ref:e,variant:"filled"},t))}));function ct(){var t=Object(d.c)((function(t){return t.app.error})),e=Object(d.b)(),n=function(t,n){"clickaway"!==n&&e(C(null))};return Object(H.jsx)(et.a,{open:null!==t,autoHideDuration:6e3,onClose:n,children:Object(H.jsx)(at,{onClose:n,severity:"error",sx:{width:"100%"},children:t})})}var it=n(99),ot=n(15),rt=n(196),st=n(208),lt=n(207),dt=n(185),ut=n(98),jt=function(){var t=Object(d.b)(),e=Object(ut.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email)||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<3&&(e.password="\u041a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"):e.password="\u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u0435\u043d",e},onSubmit:function(n){var a;t((a=n,function(t){t(I("loading")),k(a).then((function(e){0===e.data.resultCode?(alert("YO"),t(I("succeeded"))):(alert("NO"),t(I("succeeded")))}))})),alert(JSON.stringify(n)),e.resetForm()}});return Object(H.jsx)(P.a,{container:!0,justifyContent:"center",children:Object(H.jsx)(P.a,{item:!0,justifyContent:"center",children:Object(H.jsx)("form",{onSubmit:e.handleSubmit,children:Object(H.jsxs)(rt.a,{children:[Object(H.jsxs)(dt.a,{children:[Object(H.jsxs)("p",{children:["To log in get registered",Object(H.jsxs)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:[" ","here"]})]}),Object(H.jsx)("p",{children:"or use common test account credentials:"}),Object(H.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(H.jsx)("p",{children:"Password: free"})]}),Object(H.jsxs)(lt.a,{children:[Object(H.jsx)(R.a,Object(u.a)({label:"Email",margin:"normal"},e.getFieldProps("email"))),e.touched.email&&e.errors.email?Object(H.jsx)("div",{style:{color:"red"},children:e.errors.email}):null,Object(H.jsx)(R.a,Object(u.a)({type:"password",label:"Password",margin:"normal"},e.getFieldProps("password"))),e.touched.password&&e.errors.password?Object(H.jsx)("div",{style:{color:"red"},children:e.errors.password}):null,Object(H.jsx)(st.a,{label:"rememberMe",control:Object(H.jsx)(J.a,Object(u.a)(Object(u.a)({},e.getFieldProps("rememberMe")),{},{checked:e.values.rememberMe}))}),Object(H.jsx)(Y.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})};var bt=function(t){var e=t.demo,n=void 0!==e&&e,a=Object(d.c)((function(t){return t.app.status}));return Object(H.jsx)(it.a,{children:Object(H.jsxs)("div",{className:"App",children:[Object(H.jsx)(ct,{}),Object(H.jsxs)($.a,{position:"static",children:[Object(H.jsxs)(z.a,{children:[Object(H.jsx)(M.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(H.jsx)(tt.a,{})}),Object(H.jsx)(Q.a,{variant:"h6",children:"News"}),Object(H.jsx)(Y.a,{color:"inherit",children:Object(H.jsx)("a",{href:"/ToDo/login",children:"Login"})})]}),"loading"===a&&Object(H.jsx)(X.a,{})]}),Object(H.jsx)(W.a,{fixed:!0,children:Object(H.jsxs)(ot.d,{children:[Object(H.jsx)(ot.b,{path:"/ToDo/",element:Object(H.jsx)(_,{demo:n})}),Object(H.jsx)(ot.b,{path:"/ToDo/login",element:Object(H.jsx)(jt,{})}),Object(H.jsx)(ot.b,{path:"/ToDo/404",element:Object(H.jsx)("h1",{style:{textAlign:"center"},children:"404: page not founded"})}),Object(H.jsx)(ot.b,{path:"/ToDo/*",element:Object(H.jsx)(ot.a,{to:"404"})})]})})]})})},Ot=n(64),ft=n(97),ht=Object(Ot.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(E.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(E.a)({},e.task.todoListId,[e.task].concat(Object(j.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(u.a)(Object(u.a)({},t),{},Object(E.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(u.a)(Object(u.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(u.a)(Object(u.a)({},t),{},Object(E.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var n=Object(u.a)({},t);return delete n[e.id],n;case"SET-TODOLISTS":var a=Object(u.a)({},t);return e.todolists.forEach((function(t){a[t.id]=[]})),a;case"SET-TASKS":return Object(u.a)(Object(u.a)({},t),{},Object(E.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(u.a)(Object(u.a)({},e.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(j.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{entityStatus:e.status}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{filter:"all",entityStatus:"idle"})}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(u.a)(Object(u.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(u.a)(Object(u.a)({},t),{},{error:e.error});default:return Object(u.a)({},t)}}}),Tt=Object(Ot.c)(ht,Object(Ot.a)(ft.a));window.store=Tt,s.a.render(Object(H.jsx)(o.a.StrictMode,{children:Object(H.jsx)(d.a,{store:Tt,children:Object(H.jsx)(bt,{})})}),document.getElementById("root")),l()}},[[145,1,2]]]);
//# sourceMappingURL=main.4d414079.chunk.js.map