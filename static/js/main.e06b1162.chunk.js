(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(20),i=a.n(c),r=(a(28),a(2)),u=a(3),o=a(5),m=a(4),s=a(6),d=(a(29),a(30),a(1)),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).showMenu2=function(e,t,a){return l.a.createElement("div",{className:"menu2 container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"menu2-title col-md-3"},l.a.createElement("h1",null," ",e," "),l.a.createElement("button",{style:{bottom:"55px"},className:"align-self-end"}," ",t," ",l.a.createElement("i",{className:"fas fa-globe"})),l.a.createElement("button",{style:{bottom:"10px"}}," LI\xcaN H\u1ec6 ",l.a.createElement("i",{className:"far fa-comment-alt"})," ")),l.a.createElement("div",{className:"menu2-detail col-md-9"},a.routes.map(function(e,t){return l.a.createElement(d.b,{key:t,to:"".concat(e.path,"/").concat(e.subroute[0].id)}," ",e.title," ")}))))},a.showNavBar=function(){var e=document.getElementById("vertical-nav");""!==e.style.display&&"none"!==e.style.display||(e.style.display="block")},a.closeNavBar=function(){var e=document.getElementById("vertical-nav");""!==e.style.display&&"block"!==e.style.display||(e.style.display="none")},a.showSubMenu=function(e){var t=document.getElementById("submenu-"+e.toString());"none"===t.style.display?t.style.display="block":t.style.display="none"},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"head-1 container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"icon col-md-3"},l.a.createElement(d.b,{to:"/"}," ",l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1562254248/Project1/icon.png",alt:"icon"}))),l.a.createElement("div",{className:"navBar col-md-9"},l.a.createElement("div",{className:"contact container-fluid"},l.a.createElement("i",{className:"fas fa-user-circle"}),l.a.createElement("div",{className:"btn-contact"},l.a.createElement("button",null," Y\xeau c\u1ea7u g\u1eb7p tr\u1ef1c ti\u1ebfp "),l.a.createElement("button",null," B\u1ea3n demo "),l.a.createElement("button",null," D\xf9ng th\u1eed ngay ")),l.a.createElement("a",{href:"#"}," ",l.a.createElement("i",{className:"fas fa-headphones-alt"})," 000-0000-0000 ")),l.a.createElement("nav",{className:"menu container-fluid"},this.props.mainRoute.map(function(t,a){return l.a.createElement("div",{key:a,className:"menu1"},l.a.createElement(d.b,{to:"".concat(t.routes[0].path,"/").concat(t.routes[0].subroute[0].id)}," ",t.title," "),e.showMenu2(t.title,"T\xcdNH N\u0102NG",t))}))))),l.a.createElement("div",{className:"head-2 container-fluid"},l.a.createElement("div",{className:"contact-mobile row"},l.a.createElement("a",{href:"#",style:{color:"red",fontWeight:"bold"},className:"col-2"},"000-0000-0000"),l.a.createElement("a",{href:"#",className:"col-4"},"Y\xeau c\u1ea7u g\u1eb7p tr\u1ef1c ti\u1ebfp"),l.a.createElement("a",{href:"#",className:"col-2"},"B\u1ea3n Demo"),l.a.createElement("a",{href:"#",className:"col-3"},"D\xf9ng th\u1eed ngay"),l.a.createElement("a",{href:"#",className:"col-1"},l.a.createElement("i",{className:"fas fa-user-circle"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement(d.b,{to:"/"}," ",l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1562254248/Project1/icon.png",alt:""})," ")),l.a.createElement("div",{className:"menu-mobile col-8 container-fluid"},l.a.createElement("i",{onClick:function(){return e.showNavBar()},className:"fas fa-bars"}),l.a.createElement("div",{id:"vertical-nav",className:"vertical-menu scale-in-right"},l.a.createElement("button",{onClick:function(){return e.closeNavBar()}}," X "),this.props.mainRoute.map(function(t,a){return l.a.createElement("div",{key:a},l.a.createElement("div",{className:"nav"},l.a.createElement(d.b,{to:"".concat(t.routes[0].path,"/").concat(t.routes[0].subroute[0].id)}," ",t.title),"\xa0\xa0 ",l.a.createElement("i",{onClick:function(){return e.showSubMenu(a)},className:"fas fa-chevron-down"})),l.a.createElement("ul",{id:"submenu-"+a.toString(),style:{display:"none"}},t.routes.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(d.b,{to:"".concat(e.path,"/").concat(e.subroute[0].id)}," ",e.title," "))})))}))))))}}]),t}(n.Component),h=(a(35),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).setId=function(e){return e<0?a.state.comment.length-1:e>a.state.comment.length-1?0:e},a.showBtnMobile=function(){return a.state.comment.map(function(e,t){var n=t===a.state.commentId?{backgroundColor:"black",borderRadius:"50%"}:null;return l.a.createElement("i",{key:t,style:n,onClick:function(){return a.setState({commentId:t})},className:"far fa-circle"})})},a.state={commentId:0,comment:[{img:"https://res.cloudinary.com/buituan/image/upload/v1563301815/Project1/comment-1.png",detail:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,"},{img:"https://res.cloudinary.com/buituan/image/upload/v1563301828/Project1/comment-2.png",detail:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,"},{img:"https://res.cloudinary.com/buituan/image/upload/v1563301840/Project1/comment-3.png",detail:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,"}]},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"prev col-md-1 hidden-btn",onClick:function(){return e.setState({commentId:e.setId(e.state.commentId-1)})}},l.a.createElement("i",{className:"fas fa-chevron-left 7x"})),l.a.createElement("div",{className:"col-md-10 container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"img-comment col-md-5"},l.a.createElement("img",{src:this.state.comment[this.state.commentId].img,alt:""})),l.a.createElement("div",{className:"detail-comment col-md-7"},l.a.createElement("p",null,this.state.comment[this.state.commentId].detail)),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"show-btn"},this.showBtnMobile())))),l.a.createElement("button",{className:"next col-md-1 hidden-btn",onClick:function(){return e.setState({commentId:e.setId(e.state.commentId+1)})}},l.a.createElement("i",{className:"fas fa-chevron-right 7x"})))}}]),t}(n.Component)),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={width:null},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.scroll(0,0),this.setState({width:window.innerWidth})}},{key:"render",value:function(){return l.a.createElement("div",{className:"main container-fluid"},l.a.createElement("div",{className:"visual container-fluid"},l.a.createElement("div",{className:"visual-title container-fluid"},l.a.createElement("p",null,"H\xe3y tr\u1ea3i nghi\u1ec7m t\u1ea5t c\u1ea3 t\xednh n\u0103ng c\u1ee7a ECOUNT ERP"),l.a.createElement("p",null,"\u0111\u1ec3 Thay \u0110\u1ed5i Hi\u1ec7u Qu\u1ea3"),l.a.createElement("p",null,"ch\u1ec9 1.000.000 \u0111\u1ed3ng m\u1ed7i th\xe1ng")),l.a.createElement("ul",{className:"visual-detail container-fluid"},l.a.createElement("li",null,l.a.createElement(d.b,{to:"".concat(this.props.mainRoute[0].routes[0].path,"/").concat(this.props.mainRoute[0].routes[0].subroute[0].id)},l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1562339003/Project1/ico-nen-tang-erp.png",alt:""}),l.a.createElement("br",null),"N\u1ec0N T\u1ea2NG WEB")),l.a.createElement("li",null,l.a.createElement(d.b,{to:"".concat(this.props.mainRoute[0].routes[1].path,"/").concat(this.props.mainRoute[0].routes[1].subroute[0].id)},l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563300939/Project1/icon-quan-ly-kho.png",alt:""}),l.a.createElement("br",null),"QU\u1ea2N L\xdd KHO")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563300966/Project1/icon-san-xuat.png",alt:""}),l.a.createElement("br",null),"S\u1ea2N XU\u1ea4T")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563301002/Project1/icon-ban-hang.png",alt:""}),l.a.createElement("br",null),"B\xc1N H\xc0NG")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563301023/Project1/icon-mua-hang.png",alt:""}),l.a.createElement("br",null),"MUA H\xc0NG")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563301045/Project1/icon-ke-toan.png",alt:""}),l.a.createElement("br",null),"K\u1ebe TO\xc1N")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563301132/Project1/icon-bang-luong.png",alt:""}),l.a.createElement("br",null),"B\u1ea2NG L\u01af\u01a0NG")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563301151/Project1/icon-quan-ly-nhom.png",alt:""}),l.a.createElement("br",null),"QU\u1ea2N L\xdd NH\xd3M"))),l.a.createElement("div",{className:"more-visual container-fluid"},"       ",l.a.createElement("button",null,"Xem th\xeam"),"}")),l.a.createElement("div",{className:"comment container-fluid"},l.a.createElement("div",{className:"comment-slide container-fluid"},l.a.createElement(h,null)),l.a.createElement("div",{className:"more-comment container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("p",null,"H\xe3y c\u0169ng xem nh\u1eefng c\xe2u chuy\u1ec7n t\u1eeb kh\xe1ch h\xe0ng kh\xe1c"),l.a.createElement("button",null,l.a.createElement(d.b,{to:"".concat(this.props.mainRoute[4].routes[1].path,"/").concat(this.props.mainRoute[4].routes[1].subroute[0].id)},"Xem ngay t\u1ea1i \u0111\xe2y   ",l.a.createElement("i",{className:"fas fa-plus"})))))),l.a.createElement("div",{className:"statistic container-fluid"},l.a.createElement("p",null,"ECOUNT mang \u0111\u1ebfn ph\u01b0\u01a1ng ph\xe1p qu\u1ea3n l\xfd",l.a.createElement("br",null),"cho doanh nghi\u1ec7p v\u1eeba v\xe0 nh\u1ecf b\u1eb1ng s\u1ef1 tin c\u1eady v\xe0 t\xedn nhi\u1ec7m"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563301178/Project1/chi-nhanh.png",alt:""}),l.a.createElement("h1",null," 10 "),l.a.createElement("p",null,"Chi nh\xe1nh to\xe0n c\u1ea7u")),l.a.createElement("li",null,l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563301199/Project1/nam-kinh-nghiem.png",alt:""}),l.a.createElement("h1",null," 20 "),l.a.createElement("p",null,"N\u0103m kinh nghi\u1ec7m")),l.a.createElement("li",null,l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563301216/Project1/tinh-nang.png",alt:""}),l.a.createElement("h1",null," 27.030 "),l.a.createElement("p",null,"S\u1ed1 t\xednh n\u0103ng ph\xe1t tri\u1ec3n su\u1ed1t 20 n\u0103m")),l.a.createElement("li",null,l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563301230/Project1/dv-su-dung.png",alt:""}),l.a.createElement("h1",null," 40.000 "),l.a.createElement("p",null,"\u0110\u01a1n v\u1ecb s\u1eed d\u1ee5ng"))),l.a.createElement("div",{className:"more-statistic"},l.a.createElement("p",null,"1.256 ng\xe0nh h\xe0ng kinh doanh kh\xe1c nhau",l.a.createElement("br",null),"\u0111ang tin d\xf9ng ECOUNT ERP"),l.a.createElement("button",null,l.a.createElement(d.b,{to:"".concat(this.props.mainRoute[1].routes[1].path,"/").concat(this.props.mainRoute[1].routes[1].subroute[0].id)},"Xem chi ti\u1ebft ",l.a.createElement("i",{className:"fas fa-plus"}))))),l.a.createElement("div",{className:"merit container-fluid"},l.a.createElement("p",null,"ECOUNT ERP mang \u0111\u1ebfn d\u1ecbch v\u1ee5 t\u1ed1t nh\u1ea5t"),l.a.createElement("ul",null,l.a.createElement("li",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"img-merit col-md-4"},l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563301686/Project1/merit-1.png",alt:""})),l.a.createElement("a",{className:"col-md-8",href:"#"},"Kh\xf4ng c\u1ea7n c\xe0i \u0111\u1eb7t ban \u0111\u1ea7u",l.a.createElement("br",null),"D\xf9ng tr\xean tr\xecnh duy\u1ec7t web",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("u",null,l.a.createElement("b",null,"S\u1eed d\u1ee5ng ngay \u1edf b\u1ea5t c\u1ee9 n\u01a1i \u0111\xe2u"))))),l.a.createElement("li",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"img-merit col-md-4"},l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563301700/Project1/merit-2.png",alt:""})),l.a.createElement("a",{className:"col-md-8",href:"#"},"Kh\xf4ng c\u1ea7n c\xe0i \u0111\u1eb7t ban \u0111\u1ea7u",l.a.createElement("br",null),"D\xf9ng tr\xean tr\xecnh duy\u1ec7t web",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("u",null,l.a.createElement("b",null,"S\u1eed d\u1ee5ng ngay \u1edf b\u1ea5t c\u1ee9 n\u01a1i \u0111\xe2u"))))),l.a.createElement("li",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"img-merit col-md-4"},l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563301716/Project1/merit-3.png",alt:""})),l.a.createElement("a",{className:"col-md-8",href:"#"},"Kh\xf4ng c\u1ea7n c\xe0i \u0111\u1eb7t ban \u0111\u1ea7u",l.a.createElement("br",null),"D\xf9ng tr\xean tr\xecnh duy\u1ec7t web",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("u",null,l.a.createElement("b",null,"S\u1eed d\u1ee5ng ngay \u1edf b\u1ea5t c\u1ee9 n\u01a1i \u0111\xe2u"))))),l.a.createElement("li",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"img-merit col-md-4"},l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563301729/Project1/merit-4.png",alt:""})),l.a.createElement("a",{className:"col-md-8",href:"#"},"Kh\xf4ng c\u1ea7n c\xe0i \u0111\u1eb7t ban \u0111\u1ea7u",l.a.createElement("br",null),"D\xf9ng tr\xean tr\xecnh duy\u1ec7t web",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("u",null,l.a.createElement("b",null,"S\u1eed d\u1ee5ng ngay \u1edf b\u1ea5t c\u1ee9 n\u01a1i \u0111\xe2u"))))),l.a.createElement("li",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"img-merit col-md-4"},l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563301742/Project1/merit-5.png",alt:""})),l.a.createElement("a",{className:"col-md-8",href:"#"},"Kh\xf4ng c\u1ea7n c\xe0i \u0111\u1eb7t ban \u0111\u1ea7u",l.a.createElement("br",null),"D\xf9ng tr\xean tr\xecnh duy\u1ec7t web",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("u",null,l.a.createElement("b",null,"S\u1eed d\u1ee5ng ngay \u1edf b\u1ea5t c\u1ee9 n\u01a1i \u0111\xe2u"))))),l.a.createElement("li",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"img-merit col-md-4"},l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1563301757/Project1/merit-6.png",alt:""})),l.a.createElement("a",{className:"col-md-8",href:"#"},"Kh\xf4ng c\u1ea7n c\xe0i \u0111\u1eb7t ban \u0111\u1ea7u",l.a.createElement("br",null),"D\xf9ng tr\xean tr\xecnh duy\u1ec7t web",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("u",null,l.a.createElement("b",null,"S\u1eed d\u1ee5ng ngay \u1edf b\u1ea5t c\u1ee9 n\u01a1i \u0111\xe2u"))))))),l.a.createElement("div",{className:"trial container-fluid"},l.a.createElement("p",null,"Ch\u1ec9 1.000.000 \u0111\u1ed3ng m\u1ed7i th\xe1ng v\u1edbi \u0111\u1ea7y \u0111\u1ee7 t\xednh n\u0103ng ",l.a.createElement("br",null),"Mi\u1ec5n ph\xed 7 ng\xe0y d\xf9ng th\u1eed ngay h\xf4m nay"),l.a.createElement("button",null,l.a.createElement(d.b,{to:"".concat(this.props.mainRoute[3].routes[0].path,"/").concat(this.props.mainRoute[3].routes[0].subroute[0].id)},"Y\xeau c\u1ea7u d\xf9ng th\u1eed ",l.a.createElement("i",{className:"fas fa-plus"})))))}}]),t}(n.Component),g=(a(36),function(e){function t(e){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"location col-md-4"},l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fas fa-map-marker-alt"})," LI\xcaN H\u1ec6:",l.a.createElement("br",null),"L\u1ea7u 6, 51 Nguy\u1ec5n C\u01b0 Trinh, Ph\u01b0\u1eddng Nguy\u1ec5n C\u01b0 Trinh,",l.a.createElement("br",null),"Qu\u1eadn 1, H\u1ed3 Ch\xed Minh, Vi\u1ec7t Nam ",l.a.createElement("br",null)," ",l.a.createElement("br",null)),l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fas fa-phone"})," 028-3837-3100",l.a.createElement("br",null)),l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fas fa-envelope"})," askmail@ecount.vn",l.a.createElement("br",null)),l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fab fa-skype"}),"Skype ID : EcountERP-Viet")),l.a.createElement("div",{className:"menu-footer col-md-5"},l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-bars"})," MENU"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"T\xednh n\u0103ng ERP")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"V\u1ec0 ECOUNT ERP")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"DICH V\u1ee4")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"S\u1ea2N PH\u1ea8M")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"GI\u1edaI THI\u1ec6U"))),l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-globe-asia"})," GLOBAL SITES")),l.a.createElement("div",{className:"iso col-md-3"},l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-bookmark"})," CH\u1ee8NG CH\u1ec8 B\u1ea2O M\u1eacT"))))}}]),t}(n.Component)),b=a(11),f=(a(37),a(38),function(e){function t(e){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"content col-md-9"},l.a.createElement("h1",null,this.props.title),l.a.createElement("div",{className:"item"},l.a.createElement("h2",null,"AAAAAAAAAAAA"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend"),l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1562925138/Project1/example.jpg",alt:"abc"})),l.a.createElement("div",{className:"item"},l.a.createElement("h2",null,"AAAAAAAAAAAA"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend"),l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1562925138/Project1/example.jpg",alt:""})),l.a.createElement("h2",null,this.props.item.title),l.a.createElement("div",{className:"content-list"},l.a.createElement("ul",null,this.props.item.subroute.map(function(t,a){return l.a.createElement("li",{key:a},l.a.createElement(d.b,{to:"".concat(e.props.item.path,"/").concat(t.id)},t.title))}))))}}]),t}(n.Component)),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).showSideBar=function(e){return e.routes.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(d.b,{to:"".concat(e.path,"/").concat(e.subroute[0].id),className:"route"},"   ",e.title," ",l.a.createElement("i",{className:"fas fa-chevron-down"})),e.subroute.map(function(t,a){return l.a.createElement(d.b,{key:a,to:"".concat(e.path,"/").concat(t.id),activeClassName:"active-sub-route",className:"sub-route"},t.title)}))})},a.showItem=function(e,t){return l.a.createElement(f,{title:e,item:t})},a.state={re:1,arrow:[l.a.createElement("i",{className:"fas fa-chevron-up"}),l.a.createElement("i",{className:"fas fa-chevron-down"})]},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.scroll(0,0)}},{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement("div",{className:"content-page container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"side-bar col-md-3 hidden-side-bar"},l.a.createElement("h1",null,this.props.sidebar.title),l.a.createElement("ul",null,this.showSideBar(this.props.sidebar))),this.props.sidebar.routes.map(function(t){return t.subroute.map(function(a,n){return l.a.createElement(b.a,{key:n,path:"".concat(t.path,"/").concat(a.id),component:function(){return e.showItem(a.title,t)}})})}))))}}]),t}(n.Component),N=function(e){function t(e){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{paddingTop:"100px"}},l.a.createElement("h1",{style:{fontSize:"200px"}},"PAGE NOT FOUND"))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).RenderContent=function(e,t){var a=t.match;return l.a.createElement(v,{sidebar:e,match:a})},a.RenderMain=function(){return l.a.createElement(E,{mainRoute:a.state.mainRoute})},a.state={mainRoute:[{title:"T\xcdNH N\u0102NG",routes:[{title:"N\u1ec0N T\u1ea2NG WEB",path:"/tinh-nang/nen-tang-web",subroute:[{id:1,title:"T\xednh n\u0103ng 1"},{id:2,title:"T\xednh n\u0103ng 2"},{id:3,title:"T\xednh n\u0103ng 3"},{id:4,title:"T\xednh n\u0103ng 4"},{id:5,title:"T\xednh n\u0103ng 5"},{id:6,title:"T\xednh n\u0103ng 6"},{id:7,title:"T\xednh n\u0103ng 7"},{id:8,title:"T\xednh n\u0103ng 8"},{id:9,title:"T\xednh n\u0103ng 9"},{id:0,title:"T\xednh n\u0103ng 10"},{id:11,title:"T\xednh n\u0103ng 11"},{id:12,title:"T\xednh n\u0103ng 12"},{id:13,title:"T\xednh n\u0103ng 13"},{id:14,title:"T\xednh n\u0103ng 14"},{id:15,title:"T\xednh n\u0103ng 15"},{id:16,title:"T\xednh n\u0103ng 16"},{id:17,title:"T\xednh n\u0103ng 17"}]},{title:"QU\u1ea2N L\xdd KHO",path:"/tinh-nang/quan-ly-kho",subroute:[{id:1,title:"Qu\u1ea3n l\xfd 1"},{id:2,title:"Qu\u1ea3n l\xfd 2"}]}]},{title:"V\u1ec0 ECOUNT ERP",routes:[{title:"GI\u1ea2I PH\xc1P H\u1ee2P L\xdd",path:"/ve-ecount-erp/giai-phap",subroute:[{id:1,title:"Gi\u1ea3i ph\xe1p 1"},{id:2,title:"Gi\u1ea3i ph\xe1p 2"}]},{title:"V\xcc SAO CH\u1eccN ECOUNT",path:"/ve-ecount-erp/vi-sao-chon-ecount",subroute:[{id:1,title:"V\xec sao 1"},{id:2,title:"V\xec sao 2"}]}]},{title:"D\u1ecaCH V\u1ee4",routes:[{title:"H\u1ed6 TR\u1ee2 \u0110\xc0O T\u1ea0O",path:"/dich-vu/ho-tro",subroute:[{id:1,title:"H\u1ed7 tr\u1ee3 1"},{id:2,title:"H\u1ed7 tr\u1ee3 2"}]},{title:"C\u1eacP NH\u1eacT H\u1ec6 TH\u1ed0NG",path:"/dich-vu/cap-nhat",subroute:[{id:1,title:"C\u1eadp nh\u1eadt 1"},{id:2,title:"C\u1eadp nh\u1eadt 2"}]}]},{title:"S\u1ea2N PH\u1ea8M",routes:[{title:"B\u1ea2NG GI\xc1",path:"/san-pham/bang-gia",subroute:[{id:1,title:"B\u1ea2NG GI\xc1 1"},{id:2,title:"B\u1ea2NG GI\xc1 2"}]},{title:"G\u1eb6P TR\u1ef0C TI\u1ebeP",path:"/dich-vu/gap-truc-tiep",subroute:[{id:1,title:"G\u1eb7p tr\u1ef1c ti\u1ebfp 1"},{id:2,title:"G\u1eb7p tr\u1ef1c ti\u1ebfp 2"}]}]},{title:"GI\u1edaI THI\u1ec6U",routes:[{title:"GI\u1edaI THI\u1ec6U",path:"/gioi-thieu/gioi-thieu-chung",subroute:[{id:1,title:"Gi\u1edbi thi\u1ec7u 1"},{id:2,title:"Gi\u1edbi thi\u1ec7u 2"}]},{title:"V\u1ec0 \u0110\u1ed8I NG\u0168 CH\xdaNG T\xd4I",path:"/gioi-thieu/about-us",subroute:[{id:1,title:"V\u1ec0 CH\xdaNG T\xd4I 1"},{id:2,title:"V\u1ec0 CH\xdaNG T\xd4I 2"}]}]}]},a}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App container-fluid"},l.a.createElement(p,{mainRoute:this.state.mainRoute}),l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/project/",component:function(){return e.RenderMain()}}),l.a.createElement(b.a,{exact:!0,path:"/",component:function(){return e.RenderMain()}}),this.state.mainRoute.map(function(t){return t.routes.map(function(a,n){return l.a.createElement(b.a,{key:n,path:"".concat(a.path,"/:id"),component:function(a){var n=a.match;return e.RenderContent(t,{match:n})}})})}),l.a.createElement(b.a,{component:N})),l.a.createElement(g,null)))}}]),t}(n.Component),j=function(e){function t(e){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(e){console.log(this.props.location),this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component),w=(Object(b.f)(j),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function O(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(l.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/project",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/project","/service-worker.js");w?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):O(t,e)})}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.e06b1162.chunk.js.map