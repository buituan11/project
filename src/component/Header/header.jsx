import React, { Component } from 'react';
import './header.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    showMenu2 = (title, button1, detail) =>{
      return (
            <div className="menu2 container-fluid">
              <div className="row">
                <div className="menu2-title col-md-3">
                  <h1> { title } </h1>
                  <button style={{bottom: '55px'}} className="align-self-end"> { button1 } <i className="fas fa-globe" /></button>
                  <button style={{bottom: '10px'}}> LIÊN HỆ <i className="far fa-comment-alt" /> </button>
                </div>
                <div className="menu2-detail col-md-9">                
                  { detail.routes.map((item, index) => 
                       <NavLink key={index} to={`${item.path}/${item.subroute[0].id}`} > {item.title} </NavLink>
                  )}
                </div>
              </div>
            </div>
        );
    }
    showNavBar = () =>{
      let t = document.getElementById('vertical-nav');
      if (t.style.display === "" || t.style.display === "none"){
        t.style.display = 'block';
      }
    }
    closeNavBar = () =>{
      let t = document.getElementById('vertical-nav');
      if (t.style.display === "" || t.style.display === "block"){
        t.style.display = 'none';
      }
    }
    showSubMenu =(index) =>{
      let t = document.getElementById("submenu-"+index.toString());
      if (t.style.display === "none"){
        t.style.display = "block";
      }else {
        t.style.display = "none";
      }
    }
    render() {
        return (
          <div>
           <div className="head-1 container-fluid">
           		<div className="row">
           			<div className="icon col-md-3">
           				<NavLink to="/"> <img src="https://res.cloudinary.com/buituan/image/upload/v1562254248/Project1/icon.png" alt="icon"/></NavLink>
           			</div>
           			<div className="navBar col-md-9">
           				<div className="contact container-fluid">
           					<i className="fas fa-user-circle" />
           					<div className="btn-contact">
           						<button> Yêu cầu gặp trực tiếp </button>
	           					<button> Bản demo </button>
	           					<button> Dùng thử ngay </button>
           					</div>
           					<a href="#"> <i className="fas fa-headphones-alt"/> 000-0000-0000 </a>
           				</div>
           				<nav className="menu container-fluid">		
                    {this.props.mainRoute.map((item, index) =>
                        <div key={index} className="menu1">
                          <NavLink to={ `${item.routes[0].path}/${item.routes[0].subroute[0].id}` }> {item.title} </NavLink>                           
                          { this.showMenu2(item.title, "TÍNH NĂNG", item)} 
                        </div>
                    )}
           				</nav>
           			</div>
           		</div>
           </div>
           <div className="head-2 container-fluid">
              <div className="contact-mobile row">
                <a href="#" style={{color: 'red', fontWeight: 'bold'}} className="col-2">000-0000-0000</a>
                <a href="#" className="col-4">Yêu cầu gặp trực tiếp</a>
                <a href="#" className="col-2">Bản Demo</a>
                <a href="#" className="col-3">Dùng thử ngay</a>
                <a href="#" className="col-1"><i className="fas fa-user-circle"></i></a>
              </div>
              <div className="row">
                <div className="col-4">
                  <NavLink to="/"> <img src="https://res.cloudinary.com/buituan/image/upload/v1562254248/Project1/icon.png" alt=""/> </NavLink>
                </div>
                <div className="menu-mobile col-8 container-fluid">
                  <i onClick={()=> this.showNavBar() }className="fas fa-bars"></i>
                  <div id="vertical-nav" className="vertical-menu scale-in-right">
                    <button onClick={()=> this.closeNavBar()}> X </button>
                    {this.props.mainRoute.map((item, index)=>
                      <div key={index}>
                        <div className="nav">
                          <NavLink to={ `${item.routes[0].path}/${item.routes[0].subroute[0].id}` }> {item.title}</NavLink>
                          &nbsp;&nbsp; <i onClick={()=> this.showSubMenu(index)}className="fas fa-chevron-down"></i>
                        </div>     
                          <ul id={"submenu-"+index.toString()} style={{display: "none"}}>
                            { item.routes.map((e, index)=>
                                <li key={index}>
                                  <NavLink to={`${e.path}/${e.subroute[0].id}`}> {e.title} </NavLink>
                                </li>
                            )}
                          </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
           </div>
          </div>
        );  
    }
}

export default Header;
