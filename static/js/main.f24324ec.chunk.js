(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},12:function(e,t,a){e.exports={UserProfile:"UserProfile_UserProfile__345MY",Heading:"UserProfile_Heading__1yUsX",Form:"UserProfile_Form__2X5-E",Img:"UserProfile_Img__13Vor",Wrapper:"UserProfile_Wrapper__1d2aY",Wrap:"UserProfile_Wrap__1nAO7",Button:"UserProfile_Button__1Yfn3",Spinner:"UserProfile_Spinner__1Nz2A"}},141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(41),o=a.n(s),i=a(19),l=a(10),c=a(36),m={productInfo:!1,isLoggedIn:!1,userId:!1,userInfo:!1,firstItem:0,lastItem:6},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT_INFO":return Object(c.a)({},e,{productInfo:t.productInfo});case"IS_LOGGED_IN":return Object(c.a)({},e,{isLoggedIn:t.isLoggedIn});case"ADD_USER_ID":return Object(c.a)({},e,{userId:t.userId});case"IS_LOGGED_OUT":return Object(c.a)({},e,{isLoggedIn:t.isLoggedOut,userId:!1,userInfo:!1});case"ADD_USER_INFO":return Object(c.a)({},e,{userInfo:t.userInfo});default:return e}},p=a(48);var d=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log(t)}}(),h=Object(p.b)(u,d,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());h.subscribe(function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log(a)}}(h.getState())});var g=h,f=(a(97),a(3)),b=a(4),I=a(7),E=a(5),_=a(6),v=a(32),y=a(58),C=a.n(y),O=(a(142),a(98),a(101),{fire:C.a.initializeApp({apiKey:"AIzaSyBRDiKVc0xqKUNQtnGo-DTWOupsNnhH20w",authDomain:"webshop-9a548.firebaseapp.com",databaseURL:"https://webshop-9a548.firebaseio.com/",projectId:"webshop-9a548",storageBucket:"webshop-9a548.appspot.com",messagingSenderId:"83664322465",appId:"1:83664322465:web:6ff640bcc036edd3"}),storage:C.a.storage()}),N=(a(103),function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(I.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={isChecked:!1},a.toggleCheckboxChange=function(){var e=a.props,t=e.handleCheckboxChange,n=e.label;a.setState(function(e){return{isChecked:!e.isChecked}}),t(n)},a}return Object(_.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.label,t=this.state.isChecked;return r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:e,checked:t,onChange:this.toggleCheckboxChange}),e))}}]),t}(n.Component)),j=a(73),w=a.n(j),L=function(e){return r.a.createElement("div",{className:w.a.Button},r.a.createElement("button",e,e.children))},k=["Shoes","Socks","Hoodies","Shorts","T-Shirts","Shirts","Jackets","Jeans","Underwear"],U=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(I.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(s)))).state={type:[]},a.componentWillMount=function(){a.selectedCheckboxes=new Set},a.toggleCheckbox=function(e){var t=a.state.type;if(t.includes(e))for(var n=0;t.length>=n;n++)t[n]===e&&t.splice(n,1);else t.push(e),a.setState({type:t})},a.handleFormSubmit=function(e){e.preventDefault(),a.props.onChange(a.state.type)},a.createCheckbox=function(e){return r.a.createElement(N,{label:e,handleCheckboxChange:a.toggleCheckbox,key:e})},a.createCheckboxes=function(){return k.map(a.createCheckbox)},a}return Object(_.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"m-3",style:{border:"1px solid #dedede",borderRadius:"5px",maxHeight:"350px",padding:"10px"},onSubmit:this.handleFormSubmit},this.createCheckboxes(),r.a.createElement(L,null,"Save"))}}]),t}(n.Component),S=a(43),P=a.n(S),x=a(25),A=a(26),D=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(I.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={cartItems:[],wishlistItems:[]},a.addToCart=function(){a.props.isLoggedIn?O.fire.database().ref("users/"+a.props.userId+"/cartItems").push({brand:a.props.brand,description:a.props.description,price:a.props.price,imgUrl:a.props.imgUrl}).then(function(e){alert("Item added to cart")}).catch(function(e){console.log(e)}):alert("You must be logged in")},a.addToWishlist=function(){a.props.isLoggedIn?O.fire.database().ref("users/"+a.props.userId+"/wishlistItems").push({brand:a.props.brand,description:a.props.description,price:a.props.price,imgUrl:a.props.imgUrl}).then(function(e){alert("Item added to wishlist")}).catch(function(e){console.log(e)}):alert("You must be logged in")},a.productInfo=function(){var e={brand:a.props.brand,description:a.props.description,detailedDescription:a.props.detailedDescription,price:a.props.price,imgUrl:a.props.imgUrl,id:a.props.uniqueId};a.props.onAddProductInfo(e)},a}return Object(_.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:P.a.Card+" card m-3"},r.a.createElement("img",{className:"card-img-top",src:this.props.imgUrl,alt:this.props.imgUrl}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.props.brand),r.a.createElement("p",{onClick:this.productInfo,className:"card-text"},r.a.createElement(i.b,{to:"/product-page"},"Click here for more info.")),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"30px"},className:P.a.Buttons},r.a.createElement("p",{className:P.a.CartButton+" btn btn-success"},r.a.createElement(x.a,{onClick:this.addToCart,icon:A.c})),r.a.createElement("p",{className:P.a.WishlistButton+" btn btn-danger"},r.a.createElement(x.a,{onClick:this.addToWishlist,icon:A.d})))))}}]),t}(n.Component),R=Object(l.b)(function(e){return{isLoggedIn:e.isLoggedIn,userId:e.userId}},function(e){return{onAddProductInfo:function(t){return e({type:"ADD_PRODUCT_INFO",productInfo:t})}}})(D),T=a(75),W=a.n(T),B=function(){return r.a.createElement("div",{className:W.a.Loader},"Loading...")},F=a(76),z=a.n(F).a.create({baseURL:"https://webshop-9a548.firebaseio.com/"}),G=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(I.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],loading:!0,firstItem:0,lastItem:6},a}return Object(_.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e,t,a,n,s,o,i,l,c,m,u=this.state.items;if(this.props.itemType&&(t=this.props.itemType[0],a=this.props.itemType[1],n=this.props.itemType[2],s=this.props.itemType[3],o=this.props.itemType[4],i=this.props.itemType[5],l=this.props.itemType[6],c=this.props.itemType[7],m=this.props.itemType[8]),this.state.loading)e=r.a.createElement("div",null,r.a.createElement(B,null));else if(this.props.itemType){e=u.filter(function(e){return e.type===t||e.type===a||e.type===n||e.type===s||e.type===o||e.type===i||e.type===l||e.type===c||e.type===m}).slice(this.state.firstItem,this.state.lastItem).map(function(e,t){return r.a.createElement(R,{uniqueId:e.id,imgUrl:e.imgUrl,key:t,brand:e.brand,description:e.description,price:e.price,detailedDescription:e.detailedDescription})})}else e=u.slice(this.state.firstItem,this.state.lastItem).map(function(e,t){return r.a.createElement(R,{uniqueId:e.id,imgUrl:e.imgUrl,key:t,brand:e.brand,description:e.description,price:e.price,detailedDescription:e.detailedDescription})});return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},e)}},{key:"componentDidMount",value:function(){var e=this;z.get("https://webshop-9a548.firebaseio.com/item.json").then(function(t){e.setState({items:t.data}),e.setState({loading:!1})})}},{key:"componentWillReceiveProps",value:function(e){this.setState({firstItem:e.firstItem,lastItem:e.lastItem})}}]),t}(n.Component),H=a(44),V=a.n(H),J=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(I.a)(this,Object(E.a)(t).call(this,e))).onChangeType=function(e){a.setState({type:e})},a.onPaginateNext=function(){30===a.state.lastItem||(a.setState(function(e){return{firstItem:e.firstItem+6,lastItem:e.lastItem+6}}),window.scrollTo({top:0,left:0,behavior:"smooth"}))},a.onPaginatePrevious=function(){0===a.state.firstItem||(a.setState(function(e){return{firstItem:e.firstItem-6,lastItem:e.lastItem-6}}),window.scrollTo({top:0,left:0,behavior:"smooth"}))},a.state={type:null,firstItem:0,lastItem:6},a}return Object(_.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:V.a.Webshop},r.a.createElement(U,{onChange:this.onChangeType.bind(this)}),r.a.createElement(G,{firstItem:this.state.firstItem,lastItem:this.state.lastItem,itemType:this.state.type})),r.a.createElement("div",{className:V.a.Buttons},r.a.createElement(x.a,{className:V.a.Previous,onClick:this.onPaginatePrevious,icon:A.a}),r.a.createElement(x.a,{className:V.a.Next,onClick:this.onPaginateNext,icon:A.b})))}}]),t}(n.Component),M=a(77),K=a.n(M),X=a(33),Y=a.n(X),q=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(I.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).removeCartItem=function(){z.delete("https://webshop-9a548.firebaseio.com/users/"+a.props.userId+"/cartItems/"+a.props.itemKey+".json").then(function(e){window.location.reload()}).catch(function(e){console.log(e)})},a.removeWishlistItem=function(){z.delete("https://webshop-9a548.firebaseio.com/users/"+a.props.userId+"/wishlistItems/"+a.props.itemKey+".json").then(function(){window.location.reload()}).catch(function(e){console.log(e)})},a.addToCart=function(){O.fire.database().ref("users/"+a.props.userId+"/cartItems").push({brand:a.props.brand,description:a.props.description,price:a.props.price,imgUrl:a.props.imgUrl}).then(function(e){alert("Item added to cart"),z.delete("https://webshop-9a548.firebaseio.com/users/"+a.props.userId+"/wishlistItems/"+a.props.itemKey+".json").then(function(){window.location.reload()}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})},a}return Object(_.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e,t;return"/cart"===this.props.history.location.pathname?t=r.a.createElement("p",{className:"btn btn-danger",onClick:this.removeCartItem},r.a.createElement(x.a,{style:{fontSize:"25px"},icon:A.e})):(e=r.a.createElement("p",{className:"btn btn-success"},r.a.createElement(x.a,{style:{fontSize:"25px"},onClick:this.addToCart,icon:A.c})),t=r.a.createElement("p",{className:"btn btn-danger",onClick:this.removeWishlistItem},r.a.createElement(x.a,{style:{fontSize:"25px"},icon:A.e}))),r.a.createElement("div",{className:Y.a.StoreItem},r.a.createElement("div",{className:Y.a.Image},r.a.createElement("img",{src:this.props.imgUrl,alt:this.props.imgUrl})),r.a.createElement("div",{className:Y.a.Name},r.a.createElement("h3",null,this.props.brand)),r.a.createElement("div",{className:Y.a.Description},r.a.createElement("p",null,this.props.description)),r.a.createElement("div",{className:Y.a.Price},r.a.createElement("p",null,this.props.price,"$")),r.a.createElement("div",{className:Y.a.Buttons},t,e))}}]),t}(n.Component),Q=Object(v.e)(Object(l.b)(function(e){return{userId:e.userId}})(q)),Z=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(I.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={cartItems:!1},a}return Object(_.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e,t=this;this.state.cartItems&&(e=Object.keys(this.state.cartItems).map(function(e){return r.a.createElement(Q,{imgUrl:t.state.cartItems[e].imgUrl,key:e,itemKey:e,brand:t.state.cartItems[e].brand,description:t.state.cartItems[e].description,price:t.state.cartItems[e].price})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:K.a.CartItems},e))}},{key:"componentDidMount",value:function(){var e=this;this.props.isLoggedIn&&z.get("https://webshop-9a548.firebaseio.com/users/"+this.props.userId+"/cartItems.json").then(function(t){e.setState({cartItems:t.data})}).catch(function(e){console.log(e)})}}]),t}(n.Component),$=Object(l.b)(function(e){return{isLoggedIn:e.isLoggedIn,userId:e.userId}})(Z),ee=a(78),te=a.n(ee),ae=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(I.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={wishlistItems:""},a}return Object(_.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e,t=this;this.state.wishlistItems&&(e=Object.keys(this.state.wishlistItems).map(function(e){return r.a.createElement(Q,{imgUrl:t.state.wishlistItems[e].imgUrl,itemKey:e,key:e,brand:t.state.wishlistItems[e].brand,description:t.state.wishlistItems[e].description,price:t.state.wishlistItems[e].price})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:te.a.WishlistItems},e))}},{key:"componentDidMount",value:function(){var e=this;this.props.isLoggedIn&&z.get("https://webshop-9a548.firebaseio.com/users/"+this.props.userId+"/wishlistItems.json").then(function(t){e.setState({wishlistItems:t.data})}).catch(function(e){console.log(e)})}},{key:"componentWillUnmount",value:function(){O.fire.auth().onAuthStateChanged(function(e){})()}}]),t}(n.Component),ne=Object(l.b)(function(e){return{isLoggedIn:e.isLoggedIn,userId:e.userId}})(ae),re=a(18),se=a(8),oe=a(37),ie=a.n(oe),le=a(38),ce=a.n(le),me=function(e){var t=null;switch(e.typeOfInput){case"input":t=r.a.createElement("input",Object.assign({className:ce.a.InputElement},e));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:ce.a.InputElement},e));break;default:return t=r.a.createElement("input",Object.assign({className:ce.a.InputElement},e)),r.a.createElement("div",{className:ce.a.InputField},r.a.createElement("label",{className:ce.a.Label},e.Label),t)}},ue=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(I.a)(this,Object(E.a)(t).call(this,e))).login=a.login.bind(Object(se.a)(Object(se.a)(a))),a.handleChange=a.handleChange.bind(Object(se.a)(Object(se.a)(a))),a.state={email:"",password:"",wrongPasswordCounter:0,error:"",isLoggedIn:!1,userId:"",user:""},a}return Object(_.a)(t,e),Object(b.a)(t,[{key:"login",value:function(e){var t=this;e.preventDefault(),O.fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(function(e){t.setState({isLoggedIn:!0}),t.setState({userId:e.user.uid}),t.props.onIsLoggedIn(t.state.isLoggedIn),t.props.onAddUserId(t.state.userId),z.get("https://webshop-9a548.firebaseio.com/users/"+t.state.userId+".json").then(function(e){t.setState({user:e.data}),t.props.onAddingUserInfo(e.data),t.props.history.push("/webshop")})}).catch(function(e){var a=e.message;t.setState({error:a})})}},{key:"handleChange",value:function(e){this.setState(Object(re.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=null;return this.state.error&&(e={color:"red",marginTop:"-22px",marginBottom:"10px",marginLeft:"100px",fontSize:".7em"}),r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:ie.a.Login},r.a.createElement("h3",null,"Login to your account."),r.a.createElement("label",{className:ie.a.Label},"E-mail address"),r.a.createElement(me,{value:this.state.email,onChange:this.handleChange,type:"email",name:"email",placeholder:"Enter e-mail"}),r.a.createElement("label",{className:ie.a.Label},"Password"),r.a.createElement(me,{value:this.state.pasword,onChange:this.handleChange,type:"password",name:"password",placeholder:"Enter password",autoComplete:"on"}),r.a.createElement("p",{style:e},this.state.error),r.a.createElement("div",{className:ie.a.Button},r.a.createElement(L,{onClick:this.login},"Log In")),r.a.createElement("div",{className:ie.a.Footer},r.a.createElement("a",{href:"/register"},"Don't have an account?"),r.a.createElement("a",{href:"/password-reset"},"Forgot password?"))))}}]),t}(n.Component),pe=Object(l.b)(null,function(e){return{onIsLoggedIn:function(t){return e({type:"IS_LOGGED_IN",isLoggedIn:t})},onAddUserId:function(t){return e({type:"ADD_USER_ID",userId:t})},onAddingUserInfo:function(t){return e({type:"ADD_USER_INFO",userInfo:t})}}})(Object(v.e)(ue)),de=a(39),he=a.n(de),ge=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(I.a)(this,Object(E.a)(t).call(this,e))).signUp=a.signUp.bind(Object(se.a)(Object(se.a)(a))),a.handleChange=a.handleChange.bind(Object(se.a)(Object(se.a)(a))),a.state={email:"",password:"",verifyPassword:"",error:"",isLoggedIn:a.props.isLoggedIn},a}return Object(_.a)(t,e),Object(b.a)(t,[{key:"signUp",value:function(e){var t=this;e.preventDefault();var a=this.state.email,n=this.state.password,r=this.state.verifyPassword;n===r?O.fire.auth().createUserWithEmailAndPassword(a,r).then(function(e){t.setState({isLoggedIn:!0}),t.props.onIsLoggedIn(t.state.isLoggedIn),t.props.onUserId(e.user.uid),t.props.history.push("/edit-user")}).catch(function(e){var a=e.message;t.setState({error:a})}):this.setState({error:"Passwords do not match!"})}},{key:"handleChange",value:function(e){this.setState(Object(re.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=null;return this.state.error&&(e={color:"red",marginTop:"-22px",marginBottom:"10px",fontSize:".7em",textAlign:"center"}),r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:he.a.Register},r.a.createElement("h3",null,"Register your account here."),r.a.createElement("label",{className:he.a.Label},"E-mail address"),r.a.createElement(me,{value:this.state.email,onChange:this.handleChange,type:"email",name:"email",placeholder:"Johnsmith@example.com"}),r.a.createElement("label",{className:he.a.Label},"Password"),r.a.createElement(me,{value:this.state.password,onChange:this.handleChange,type:"password",name:"password",placeholder:"Minimum 6 characters",autoComplete:"on"}),r.a.createElement("label",{className:he.a.Label},"Verify Password"),r.a.createElement(me,{value:this.state.verifyPassword,onChange:this.handleChange,type:"password",name:"verifyPassword",placeholder:"Repeat password",autoComplete:"on"}),r.a.createElement("p",{style:e},this.state.error),r.a.createElement("div",{className:he.a.Button},r.a.createElement(L,{onClick:this.signUp},"Register")),r.a.createElement("a",{href:"/login"},"Already have an account?")))}}]),t}(n.Component),fe=Object(l.b)(function(e){return{isLoggedIn:e.isLoggedIn}},function(e){return{onIsLoggedIn:function(t){return e({type:"IS_LOGGED_IN",isLoggedIn:t})},onUserId:function(t){return e({type:"ADD_USER_ID",userId:t})}}})(ge),be=a(51),Ie=a.n(be),Ee=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(I.a)(this,Object(E.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(se.a)(Object(se.a)(a))),a.passReset=a.passReset.bind(Object(se.a)(Object(se.a)(a))),a.state={email:"",error:""},a}return Object(_.a)(t,e),Object(b.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(re.a)({},e.target.name,e.target.value))}},{key:"passReset",value:function(e){var t=this;e.preventDefault(),O.fire.auth().sendPasswordResetEmail(this.state.email).then(function(e){alert("An email has been sent to your email address with further instructions"),t.props.history.push("/login")}).catch(function(e){t.setState({error:"There is no user associated with this email address"})})}},{key:"render",value:function(){var e=null;return this.state.error&&(e={color:"red",marginTop:"-22px",marginBottom:"10px",marginLeft:"100px",fontSize:".7em"}),r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:Ie.a.PassReset},r.a.createElement("h3",null,"Reset password."),r.a.createElement("label",{className:Ie.a.Label},"E-mail address"),r.a.createElement(me,{value:this.state.email,onChange:this.handleChange,type:"email",name:"email",placeholder:"Enter e-mail"}),r.a.createElement("p",{style:e},this.state.error),r.a.createElement("div",{className:Ie.a.Button},r.a.createElement(L,{onClick:this.passReset},"Reset password"))))}}]),t}(n.Component),_e=Object(v.e)(Ee),ve=a(16),ye=a.n(ve),Ce=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(I.a)(this,Object(E.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(se.a)(Object(se.a)(a))),a.handleImageChange=a.handleImageChange.bind(Object(se.a)(Object(se.a)(a))),a.updateUser=a.updateUser.bind(Object(se.a)(Object(se.a)(a))),a.state={firstName:"",lastName:"",country:"",city:"",streetAddress:"",zipCode:"",error:null,imgUrl:null,uidInfo:null,imageFile:null},a}return Object(_.a)(t,e),Object(b.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(re.a)({},e.target.name,e.target.value))}},{key:"handleImageChange",value:function(e){e.target.files[0]&&this.setState({imageFile:e.target.files[0]})}},{key:"updateUser",value:function(e){var t=this;e.preventDefault(),this.state.imageFile?O.storage.ref("images/"+this.state.imageFile.name).put(this.state.imageFile).on("state_changed",function(e){},function(e){console.log(e)},function(){O.storage.ref("images").child(t.state.imageFile.name).getDownloadURL().then(function(e){O.fire.database().ref("users/").child(t.props.userId).set({firstName:t.state.firstName,lastName:t.state.lastName,country:t.state.country,city:t.state.city,streetAddress:t.state.streetAddress,zipCode:t.state.zipCode,imgUrl:e}).then(function(){t.props.history.push("/user-profile")}).catch(function(e){console.log(e)})})}):O.fire.database().ref("users/").child(this.props.userId).set({firstName:this.state.firstName,lastName:this.state.lastName,country:this.state.country,city:this.state.city,streetAddress:this.state.streetAddress,zipCode:this.state.zipCode,imgUrl:this.state.imgUrl}).then(function(){t.props.history.push("/user-profile")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:ye.a.User},r.a.createElement("h3",null,"Edit user information"),r.a.createElement("div",{className:ye.a.Wrapper},r.a.createElement("div",{className:ye.a.Left},r.a.createElement("label",{className:ye.a.Label},"First name"),r.a.createElement(me,{value:this.state.firstName,onChange:this.handleChange,type:"text",name:"firstName",placeholder:"John"}),r.a.createElement("label",{className:ye.a.Label},"Last name"),r.a.createElement(me,{value:this.state.lastName,onChange:this.handleChange,type:"text",name:"lastName",placeholder:"Smith"}),r.a.createElement("label",{className:ye.a.Label},"Country"),r.a.createElement(me,{value:this.state.country,onChange:this.handleChange,type:"text",name:"country",placeholder:"USA"})),r.a.createElement("div",{className:ye.a.Right},r.a.createElement("label",{className:ye.a.Label},"City"),r.a.createElement(me,{value:this.state.city,onChange:this.handleChange,type:"text",name:"city",placeholder:"Richmond"}),r.a.createElement("label",{className:ye.a.Label},"Street Address"),r.a.createElement(me,{value:this.state.streetAddress,onChange:this.handleChange,type:"text",name:"streetAddress",placeholder:"Richmond Rd. 2015"}),r.a.createElement("label",{className:ye.a.Label},"ZIP/Postal Code"),r.a.createElement(me,{value:this.state.zipCode,onChange:this.handleChange,type:"text",name:"zipCode",placeholder:"31852"}))),r.a.createElement("div",{className:ye.a.UploadImage},r.a.createElement("label",null,"Profile image"),r.a.createElement(me,{className:ye.a.InputImage,onChange:this.handleImageChange,type:"file",name:"profileImage"})),r.a.createElement("div",{className:ye.a.Button},r.a.createElement(L,{onClick:this.updateUser},"Update User"))))}},{key:"componentDidMount",value:function(){var e=this;this.props.isLoggedIn&&z.get("https://webshop-9a548.firebaseio.com/users/"+this.props.userId+".json").then(function(t){e.setState({firstName:t.data.firstName,lastName:t.data.lastName,city:t.data.city,country:t.data.country,imgUrl:t.data.imgUrl,streetAddress:t.data.streetAddress,zipCode:t.data.zipCode})}).catch(function(t){e.setState({firstName:"",lastName:"",cirt:"",country:"",imgUrl:"",streetAddress:"",zipCode:""})})}}]),t}(n.Component),Oe=Object(l.b)(function(e){return{isLoggedIn:e.isLoggedIn,userId:e.userId}})(Ce),Ne=a(12),je=a.n(Ne),we=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(I.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={uidInfo:!1,loading:!0},a.editProfileHandler=function(){a.props.history.push("/edit-user")},a}return Object(_.a)(t,e),Object(b.a)(t,[{key:"renderResults",value:function(){var e=this.state,t=e.uidInfo,a=e.loading;return t?r.a.createElement("div",{className:je.a.UserProfile},r.a.createElement("div",{className:je.a.Heading},r.a.createElement("h1",null,"User profile")),r.a.createElement("div",{className:je.a.Form},r.a.createElement("div",{className:je.a.Img},r.a.createElement("img",{src:this.state.uidInfo.imgUrl,alt:"slika"})),r.a.createElement("div",{className:je.a.Info},r.a.createElement("div",{className:je.a.Wrapper},r.a.createElement("div",{className:je.a.Wrap},r.a.createElement("label",null,"Name: "),r.a.createElement("p",null,this.state.uidInfo.firstName+" "+this.state.uidInfo.lastName)),r.a.createElement("div",{className:je.a.Wrap},r.a.createElement("label",null,"Country: "),r.a.createElement("p",null,this.state.uidInfo.country)),r.a.createElement("div",{className:je.a.Wrap},r.a.createElement("label",null,"Zip Code: "),r.a.createElement("p",null,this.state.uidInfo.zipCode)),r.a.createElement("div",{className:je.a.Wrap},r.a.createElement("label",null,"City: "),r.a.createElement("p",null,this.state.uidInfo.city)),r.a.createElement("div",{className:je.a.Wrap},r.a.createElement("label",null,"Street Address: "),r.a.createElement("p",null,this.state.uidInfo.streetAddress)))),r.a.createElement("div",{className:je.a.Button},r.a.createElement(L,{onClick:this.editProfileHandler},"Edit profile")))):a?r.a.createElement("div",{className:je.a.UserProfile},r.a.createElement("div",{className:je.a.Spinner},r.a.createElement(B,null))):this.props.isLoggedIn?r.a.createElement("div",{className:je.a.UserProfile},r.a.createElement("div",{className:je.a.Heading},r.a.createElement("h1",null,"User profile")),r.a.createElement("div",{className:je.a.Form},r.a.createElement("h3",null,"Please edit your profile")),r.a.createElement("div",{className:je.a.Button},r.a.createElement(L,{onClick:this.editProfileHandler},"Edit profile"))):void 0}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderResults())}},{key:"componentDidMount",value:function(){var e=this;this.props.isLoggedIn&&z.get("https://webshop-9a548.firebaseio.com/users/"+this.props.userId+".json").then(function(t){e.setState({uidInfo:t.data}),e.setState({loading:!1})}).catch(function(e){console.log(e)})}}]),t}(n.PureComponent),Le=Object(l.b)(function(e){return{isLoggedIn:e.isLoggedIn,userId:e.userId}})(we),ke=a(145),Ue=a(144),Se=(a(129),a(79)),Pe=a.n(Se),xe=a(80),Ae=a.n(xe),De=function(e){return r.a.createElement("li",{className:Ae.a.NavItem},r.a.createElement(i.b,{to:e.link},e.children))},Re=a(81),Te=a.n(Re),We=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(I.a)(this,Object(E.a)(t).call(this,e))).logout=a.logout.bind(Object(se.a)(Object(se.a)(a))),a.state={isLoggedIn:a.props.isLoggedIn},a}return Object(_.a)(t,e),Object(b.a)(t,[{key:"logout",value:function(e){var t=this;e.preventDefault(),O.fire.auth().signOut().then(function(e){t.props.onIsLoggedOut(!t.state.isLoggedIn),t.props.history.push("/login")}).catch(function(e){console.log(e),alert(e)})}},{key:"render",value:function(){return r.a.createElement("p",{className:Te.a.Logout,onClick:this.logout},"Logout")}}]),t}(n.Component),Be=Object(l.b)(function(e){return{isLoggedIn:e.isLoggedIn}},function(e){return{onIsLoggedOut:function(t){return e({type:"IS_LOGGED_OUT",isLoggedOut:t})}}})(Object(v.e)(We)),Fe=function(e){function t(){return Object(f.a)(this,t),Object(I.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e,t=r.a.createElement("p",null,"Login/Register");return this.props.isLoggedIn&&(t=r.a.createElement(Be,null),e="User Profile"),r.a.createElement(ke.a,{className:Pe.a.NavigationItems,expand:"lg"},r.a.createElement(ke.a.Toggle,null,"Menu"),r.a.createElement(ke.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(Ue.a,{className:"ml-auto"},r.a.createElement(Ue.a.Item,{style:{paddingRight:"20px"}},r.a.createElement(De,{className:"mr-1",link:"/webshop"},"Webshop")),r.a.createElement(Ue.a.Item,{style:{paddingRight:"20px"}},r.a.createElement(De,{className:"mr-1",link:"/cart"},"Cart")),r.a.createElement(Ue.a.Item,{style:{paddingRight:"20px"}},r.a.createElement(De,{className:"mr-1",link:"/wishlist"},"Wishlist")),r.a.createElement(Ue.a.Item,{style:{paddingRight:"20px"}},r.a.createElement(De,{className:"mr-1",link:"/user-profile"},e)),r.a.createElement(Ue.a.Item,{style:{paddingRight:"20px"}},r.a.createElement(De,{className:"mr-1",link:"/login"},t)))))}}]),t}(n.Component),ze=Object(l.b)(function(e){return{isLoggedIn:e.isLoggedIn}})(Fe),Ge=a(23),He=a.n(Ge),Ve=a(45),Je=a.n(Ve),Me=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(I.a)(this,Object(E.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(re.a)({},e.target.name,e.target.value))},a.addCommentHandler=function(){a.props.userId&&!a.props.userInfo?alert("You need to fill your information before leaving a comment"):a.props.userId?O.fire.database().ref("item/"+a.props.id+"/comments").push({firstName:a.props.userInfo.firstName,lastName:a.props.userInfo.lastName,title:a.state.title,comment:a.state.comment}).then(function(e){alert("Comment added successfuly"),window.location.reload()}).catch(function(e){console.log(e)}):alert("To leave a comment you need to be logged in!")},a.handleChange=a.handleChange.bind(Object(se.a)(Object(se.a)(a))),a.state={title:"",comment:""},a}return Object(_.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e={marginLeft:"0"};return r.a.createElement("div",{className:Je.a.AddComment},r.a.createElement("div",{className:Je.a.Title},r.a.createElement("label",null,"Title"),r.a.createElement(me,{style:e,value:this.state.title,onChange:this.handleChange,type:"text",name:"title",autoComplete:"off"})),r.a.createElement("div",{className:Je.a.Comment},r.a.createElement("label",null,"Comment"),r.a.createElement("textarea",{style:e,rows:"4",cols:"50",value:this.state.comment,onChange:this.handleChange,type:"textarea",name:"comment",autoComplete:"off"})),r.a.createElement(L,{onClick:this.addCommentHandler,style:{width:"none"},className:Je.a.Button},"Add Comment"))}}]),t}(n.Component),Ke=Object(l.b)(function(e){return{userInfo:e.userInfo,userId:e.userId}})(Me),Xe=a(46),Ye=a.n(Xe),qe=function(e){function t(){return Object(f.a)(this,t),Object(I.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Ye.a.CommentList},r.a.createElement("div",{className:Ye.a.User},r.a.createElement("p",null,this.props.firstName," ",this.props.lastName)),r.a.createElement("div",{className:Ye.a.Title},r.a.createElement("p",null,this.props.title)),r.a.createElement("div",{className:Ye.a.Comment},r.a.createElement("p",null,this.props.comment))))}}]),t}(n.Component),Qe=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(I.a)(this,Object(E.a)(t).call(this,e))).addToCart=function(){O.fire.database().ref("users/"+a.props.userId+"/cartItems").push({brand:a.props.productInfo.brand,description:a.props.productInfo.description,price:a.props.productInfo.price,imgUrl:a.props.productInfo.imgUrl}).then(function(e){alert("Item added to cart")}).catch(function(e){console.log(e)})},a.addToWishlist=function(){O.fire.database().ref("users/"+a.props.userId+"/wishlistItems").push({brand:a.props.productInfo.brand,description:a.props.productInfo.description,price:a.props.productInfo.price,imgUrl:a.props.productInfo.imgUrl}).then(function(e){alert("Item added to wishlist")}).catch(function(e){console.log(e)})},a.state={comments:!1},a}return Object(_.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e;this.state.comments&&(e=Object.values(this.state.comments).map(function(e,t){return r.a.createElement(qe,{firstName:e.firstName,lastName:e.lastName,key:t,title:e.title,comment:e.comment})}));var t=this.props.productInfo;return r.a.createElement("div",{className:He.a.ProductPage},r.a.createElement("div",{className:He.a.Wrapper},r.a.createElement("div",{className:He.a.Image},r.a.createElement("img",{src:t.imgUrl,alt:t.imgUrl})),r.a.createElement("div",{className:He.a.BPWrapper},r.a.createElement("div",{className:He.a.Brand},r.a.createElement("h1",null,t.brand)),r.a.createElement("div",{className:He.a.Price},r.a.createElement("h1",null,t.price,"$")))),r.a.createElement("div",{className:He.a.Description},r.a.createElement("p",null,t.detailedDescription)),r.a.createElement("div",{className:He.a.Buttons},r.a.createElement(L,{className:He.a.Cart,onClick:this.addToCart},"Add to cart"),r.a.createElement(L,{className:He.a.Wishlist,onClick:this.addToWishlist},"Add to wishlist")),r.a.createElement(Ke,{id:this.props.productInfo.id}),e)}},{key:"componentDidMount",value:function(){var e=this;z.get("https://webshop-9a548.firebaseio.com/item/"+this.props.productInfo.id+"/comments.json").then(function(t){e.setState({comments:t.data})}).catch(function(e){console.log(e)})}}]),t}(n.Component),Ze=Object(l.b)(function(e){return{productInfo:e.productInfo,isLoggedIn:e.isLoggedIn,userId:e.userId}})(Qe),$e=a(87),et=a.n($e),tt=function(){return r.a.createElement("div",{className:et.a.Footer},r.a.createElement("p",null,"\xa9 2019 Webshop. All rights reserved"))},at=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(I.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={user:null,userEmail:null},a}return Object(_.a)(t,e),Object(b.a)(t,[{key:"authListener",value:function(){var e=this;O.fire.auth().onAuthStateChanged(function(t){t?(e.setState({user:t}),e.setState({userEmail:t.email})):e.setState({user:null})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ze,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",exact:!0,component:J}),r.a.createElement(v.a,{path:"/webshop",component:J}),r.a.createElement(v.a,{path:"/cart",component:$}),r.a.createElement(v.a,{path:"/wishlist",component:ne}),r.a.createElement(v.a,{path:"/register",component:fe}),r.a.createElement(v.a,{path:"/password-reset",component:_e}),r.a.createElement(v.a,{path:"/edit-user",exact:!0,component:Oe}),r.a.createElement(v.a,{path:"/user-profile",component:Le}),r.a.createElement(v.a,{path:"/login",render:function(){return r.a.createElement(pe,null)}}),r.a.createElement(v.a,{path:"/product-page",component:Ze})),r.a.createElement(tt,null))}},{key:"componentDidMount",value:function(){this.authListener()}}]),t}(n.Component),nt=Object(v.e)(at);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var rt=r.a.createElement(l.a,{store:g},r.a.createElement(i.a,null,r.a.createElement(nt,null)));o.a.render(rt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},16:function(e,t,a){e.exports={User:"EditUser_User__3Tff5",Wrapper:"EditUser_Wrapper__fvTYj",Left:"EditUser_Left__3X_Ut",Right:"EditUser_Right__17G7v",Label:"EditUser_Label__LznTs",UploadImage:"EditUser_UploadImage__3kyow",Button:"EditUser_Button__3GZJK"}},23:function(e,t,a){e.exports={ProductPage:"ProductPage_ProductPage__SNVtw",Wrapper:"ProductPage_Wrapper__3QyeE",Image:"ProductPage_Image__mCJR-",Brand:"ProductPage_Brand__3QX2R",Price:"ProductPage_Price__3wiYO",Description:"ProductPage_Description__233WS",Buttons:"ProductPage_Buttons__l6PVq",Cart:"ProductPage_Cart__35bgZ",Wishlist:"ProductPage_Wishlist__2SsDz",BPWrapper:"ProductPage_BPWrapper__2W6pY"}},33:function(e,t,a){e.exports={StoreItem:"StoreItem_StoreItem__6p8p4",Image:"StoreItem_Image__Ux3fe",Name:"StoreItem_Name__1K7L6",Description:"StoreItem_Description__iiV50",Price:"StoreItem_Price__2HplU",RemoveCart:"StoreItem_RemoveCart__2lsJs",Buttons:"StoreItem_Buttons__fXhkQ",AddToCart:"StoreItem_AddToCart__i2dfm",CartIcon:"StoreItem_CartIcon__27ZH_"}},37:function(e,t,a){e.exports={Login:"Login_Login__2ioly",Label:"Login_Label__tUyB2",Button:"Login_Button__2z491",Footer:"Login_Footer__1kV4L"}},38:function(e,t,a){e.exports={InputField:"Input_InputField__2qddu",Label:"Input_Label__87i2q",InputElement:"Input_InputElement__1LVcw"}},39:function(e,t,a){e.exports={Register:"Register_Register__1LABV",Label:"Register_Label__2KAmw",Button:"Register_Button__12G2G",Footer:"Register_Footer__3mpRc"}},43:function(e,t,a){e.exports={Card:"StoreItem_Card__h73g_"}},44:function(e,t,a){e.exports={Webshop:"Webshop_Webshop__2VTyS",Buttons:"Webshop_Buttons__3MkIK",Previous:"Webshop_Previous__j5lim",Next:"Webshop_Next__T7A16"}},45:function(e,t,a){e.exports={AddComment:"AddComment_AddComment__1QGrl",Title:"AddComment_Title__2Xc_6",Comment:"AddComment_Comment__u9Ed2",Button:"AddComment_Button__4dGDt"}},46:function(e,t,a){e.exports={CommentList:"CommentList_CommentList__3N4-a",User:"CommentList_User__2SN95",Title:"CommentList_Title__1a1Nn",Comment:"CommentList_Comment__1YOhz"}},51:function(e,t,a){e.exports={PassReset:"PassReset_PassReset__1PYJz",Label:"PassReset_Label__1cxpd",Button:"PassReset_Button__wDEQs",Footer:"PassReset_Footer__3tX5R"}},73:function(e,t,a){e.exports={Button:"Button_Button__2CFFk"}},75:function(e,t,a){e.exports={Loader:"Spinner_Loader__3yLBS",load8:"Spinner_load8__3cG8h"}},77:function(e,t,a){e.exports={CartItems:"Cart_CartItems__19ltZ"}},78:function(e,t,a){e.exports={WishlistItems:"Wishlist_WishlistItems__1aJku"}},79:function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__V4qMF"}},80:function(e,t,a){e.exports={NavItem:"NavigationItem_NavItem__3LoTV"}},81:function(e,t,a){},87:function(e,t,a){e.exports={Footer:"Footer_Footer__3xdop"}},88:function(e,t,a){e.exports=a(141)},97:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.f24324ec.chunk.js.map