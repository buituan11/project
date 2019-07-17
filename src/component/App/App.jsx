import React, { Component } from 'react';
import './App.css';
import Header from '../Header/header.jsx';
import Main from '../Main/main.jsx';
import Footer from '../Footer/footer.jsx';
import Content from '../ContentPage/contentpage.jsx';
import NoMatch from '../NoMatch/nomatch.jsx';
import { BrowserRouter as Router, Route, NavLink,Switch } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            arrTN: {
              title: "TÍNH NĂNG",
                routes:[
                  {
                    title: "NỀN TẢNG WEB",
                    path: "/tinh-nang/nen-tang-web",
                    subroute: [
                      {
                        id: 1,
                        title: "Tính năng 1",
                      },
                      {
                        id: 2,
                        title: "Tính năng 2",
                      },
                      {
                        id: 3,
                        title: "Tính năng 3",
                      },{
                        id: 4,
                        title: "Tính năng 4",
                      },{
                        id: 5,
                        title: "Tính năng 5",
                      },{
                        id: 6,
                        title: "Tính năng 6",
                      },{
                        id: 7,
                        title: "Tính năng 7",
                      },{
                        id: 8,
                        title: "Tính năng 8",
                      },{
                        id: 9,
                        title: "Tính năng 9",
                      },{
                        id: 0,
                        title: "Tính năng 10",
                      },{
                        id: 11,
                        title: "Tính năng 11",
                      },{
                        id: 12,
                        title: "Tính năng 12",
                      },{
                        id: 13,
                        title: "Tính năng 13",
                      },{
                        id: 14,
                        title: "Tính năng 14",
                      },{
                        id: 15,
                        title: "Tính năng 15",
                      },{
                        id: 16,
                        title: "Tính năng 16",
                      },{
                        id: 17,
                        title: "Tính năng 17",
                      },
                    ]   //Nền tảng web
                  },
                  {

                    title: "QUẢN LÝ KHO",
                    path: "/tinh-nang/quan-ly-kho",
                    subroute: [
                      {
                        id: 1,
                        title: "Quản lý 1",
                      },
                      {
                        id: 2,
                        title: "Quản lý 2",
                      }
                    ]   //Quản lý kho
                  }
                ]
            },
            arrEC: {
              title: "VỀ ECOUNT ERP",
                routes:[
                  {
                    title: "GIẢI PHÁP HỢP LÝ",
                    path: "/ve-ecount-erp/giai-phap",
                    subroute: [
                      {
                        id: 1,
                        title: "Giải pháp 1",
                      },
                      {
                        id: 2,
                        title: "Giải pháp 2",
                      }
                    ]   
                  },
                  {
                    title: "VÌ SAO CHỌN ECOUNT",
                    path: "/ve-ecount-erp/vi-sao-chon-ecount",
                    subroute: [
                      {
                        id: 1,
                        title: "Vì sao 1",
                      },
                      {
                        id: 2,
                        title: "Vì sao 2",
                      }
                    ]   
                  }
                ]
            },
            arrDV: {
              title: "DỊCH VỤ",
                routes:[
                  {
                    title: "HỖ TRỢ ĐÀO TẠO",
                    path: "/dich-vu/ho-tro",
                    subroute: [
                      {
                        id: 1,
                        title: "Hỗ trợ 1",
                      },
                      {
                        id: 2,
                        title: "Hỗ trợ 2",
                      }
                    ]  
                  },
                  {
                    title: "CẬP NHẬT HỆ THỐNG",
                    path: "/dich-vu/cap-nhat",
                    subroute: [
                      {
                        id: 1,
                        title: "Cập nhật 1",
                      },
                      {
                        id: 2,
                        title: "Cập nhật 2",
                      }
                    ]  
                  }
                ]
            },
            arrSP: {
              title: "SẢN PHẨM",
                routes:[
                  {
                    title: "BẢNG GIÁ",
                    path: "/san-pham/bang-gia",
                    subroute: [
                      {
                        id: 1,
                        title: "BẢNG GIÁ 1",
                      },
                      {
                        id: 2,
                        title: "BẢNG GIÁ 2",
                      }
                    ]  
                  },
                  {
                    title: "GẶP TRỰC TIẾP",
                    path: "/dich-vu/gap-truc-tiep", 
                    subroute: [
                      {
                        id: 1,
                        title: "Gặp trực tiếp 1",
                      },
                      {
                        id: 2,
                        title: "Gặp trực tiếp 2",
                      }
                    ]  
                  }
                ]
            },
            arrGT: {
              title: "GIỚI THIỆU",
                routes:[
                  {
                    title: "GIỚI THIỆU",
                    path: "/gioi-thieu/gioi-thieu-chung",
                    subroute: [
                      {
                        id: 1,
                        title: "Giới thiệu 1",
                      },
                      {
                        id: 2,
                        title: "Giới thiệu 2",
                      }
                    ]  
                  },
                  {
                    title: "VỀ ĐỘI NGŨ CHÚNG TÔI",
                    path: "/gioi-thieu/about-us",
                    subroute: [
                      {
                        id: 1,
                        title: "VỀ CHÚNG TÔI 1",
                      },
                      {
                        id: 2,
                        title: "VỀ CHÚNG TÔI 2",
                      }
                    ]  
                  }
                ]
            }
        }
    }

    RenderContent = ( menu, {match} ) => {
      return (
          <Content sidebar={ menu } match={match}/>
      );
    }
    RenderMain = () => {
      return (
          <Main 
            tinhNang={this.state.arrTN}
            ecount={this.state.arrEC}
            dichVu={this.state.arrDV}
            sanPham={this.state.arrSP}
            gioiThieu={this.state.arrGT}/>
      );
    }
    render() {
      let menu = [];
        return (
        <Router>
          <div className="App container-fluid">
            <Header 
              tinhNang={this.state.arrTN}
              ecount={this.state.arrEC}
              dichVu={this.state.arrDV}
              sanPham={this.state.arrSP}
              gioiThieu={this.state.arrGT}/>
            <Switch>
              <Route path={process.env.PUBLIC_URL+'/'} component={ () => this.RenderMain() }/>
              {this.state.arrTN.routes.map((item, index)=>
                  <Route key={index} path={ `${item.path}/:id` } component={ ({match})=>this.RenderContent( this.state.arrTN, {match})}/>
              )}
              {this.state.arrEC.routes.map((item, index)=>
                  <Route key={index} path={ `${item.path}/:id` } component={ ({match})=>this.RenderContent( this.state.arrEC, {match})}/>
              )}
              {this.state.arrDV.routes.map((item, index)=>
                  <Route key={index} path={ `${item.path}/:id` } component={ ({match})=>this.RenderContent( this.state.arrDV, {match})}/>
              )}
              {this.state.arrSP.routes.map((item, index)=>
                  <Route key={index} path={ `${item.path}/:id` } component={ ({match})=>this.RenderContent( this.state.arrSP, {match})}/>
              )}
              {this.state.arrGT.routes.map((item, index)=>
                  <Route key={index} path={ `${item.path}/:id` } component={ ({match})=>this.RenderContent( this.state.arrGT, {match})}/>
              )}
              <Route component={ NoMatch }/>
            </Switch>
            <Footer/>
            {/*<div style={{backgroundColor: 'green', height: '400px'}}>
            </div>
            <div style={{backgroundColor: 'yellow', height: '400px'}}>
            </div>
            <div style={{backgroundColor: 'blue', height: '400px'}}>
            </div>*/}
          </div> 
        </Router>
        );
    }
}

export default App;

