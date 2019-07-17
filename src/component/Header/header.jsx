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
                  <button style={{bottom: '55px'}}> { button1 } <i className="fas fa-globe" /></button>
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
    render() {
        return (
           <header className="container-fluid">
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
           					<div className="menu1">			{/* Tính năng ERP*/}
           						<NavLink to={ `${this.props.tinhNang.routes[0].path}/${this.props.tinhNang.routes[0].subroute[0].id}` }> TÍNH NĂNG ERP </NavLink>	
                      { this.showMenu2(this.props.tinhNang.title, "PHIÊN BẢN MÔ PHỎNG", this.props.tinhNang)}	
           					</div>
           					<div className="menu1">			{/*Về ECOUNT ERP*/}
           						<NavLink to={ `${this.props.ecount.routes[0].path}/${this.props.ecount.routes[0].subroute[0].id}` }> VỀ ECOUNT ERP </NavLink> 
                      { this.showMenu2(this.props.ecount.title, "TÍNH NĂNG", this.props.ecount)}	
           					</div>
           					<div className="menu1">		   {/*Dịch vụ*/}
           						<NavLink to={ `${this.props.dichVu.routes[0].path}/${this.props.dichVu.routes[0].subroute[0].id}` }> DỊCH VỤ </NavLink> 
                      { this.showMenu2(this.props.dichVu.title, "TÍNH NĂNG", this.props.dichVu)}
           					</div>
           					<div className="menu1">			{/*Sản phẩm*/}
           						<NavLink to={ `${this.props.sanPham.routes[0].path}/${this.props.sanPham.routes[0].subroute[0].id}` }> SẢN PHẨM </NavLink> 
                      { this.showMenu2(this.props.sanPham.title, "TÍNH NĂNG", this.props.sanPham)}
           					</div>
           					<div className="menu1">			{/*Giới thiệu*/}
           						<NavLink to={ `${this.props.gioiThieu.routes[0].path}/${this.props.gioiThieu.routes[0].subroute[0].id}` }> GIỚI THIỆU </NavLink> 
                      { this.showMenu2(this.props.gioiThieu.title, "TÍNH NĂNG", this.props.gioiThieu)}
           					</div>
           				</nav>
           			</div>
           		</div>
            </header>
        );
    }
}

export default Header;
