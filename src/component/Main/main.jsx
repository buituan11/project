import React, { Component } from 'react';
import './main.css';
import Comment from './Comment/comment.jsx';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Main extends Component {
    constructor(props) {
        super(props);
        // console.log('aaaaaaaa')
    }
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        let option=0;
        return (	
            <div className="main container-fluid">
            	<div className="visual container-fluid">
                    <div className="visual-title container-fluid">
                            <p>Hãy trải nghiệm tất cả tính năng của ECOUNT ERP</p>
                            <p>để Thay Đổi Hiệu Quả</p>
                            <p>chỉ 1.000.000 đồng mỗi tháng</p>
                    </div>
                    <ul className="visual-detail container-fluid">
                        <li><NavLink to={`${this.props.tinhNang.routes[0].path}/${this.props.tinhNang.routes[0].subroute[0].id}`}>
                            <img src="https://res.cloudinary.com/buituan/image/upload/v1562339003/Project1/ico-nen-tang-erp.png" alt=""/><br/>NỀN TẢNG WEB
                        </NavLink></li>
                        <li><NavLink to={`${this.props.tinhNang.routes[1].path}/${this.props.tinhNang.routes[1].subroute[0].id}`}>
                            <img src="https://res.cloudinary.com/buituan/image/upload/v1563300939/Project1/icon-quan-ly-kho.png" alt=""/><br/>QUẢN LÝ KHO
                        </NavLink></li>
                        <li><a href="#"><img src="https://res.cloudinary.com/buituan/image/upload/v1563300966/Project1/icon-san-xuat.png" alt=""/><br/>SẢN XUẤT</a></li>
                        <li><a href="#"><img src="https://res.cloudinary.com/buituan/image/upload/v1563301002/Project1/icon-ban-hang.png" alt=""/><br/>BÁN HÀNG</a></li>
                        <li><a href="#"><img src="https://res.cloudinary.com/buituan/image/upload/v1563301023/Project1/icon-mua-hang.png" alt=""/><br/>MUA HÀNG</a></li>
                        <li><a href="#"><img src="https://res.cloudinary.com/buituan/image/upload/v1563301045/Project1/icon-ke-toan.png" alt=""/><br/>KẾ TOÁN</a></li>
                        <li><a href="#"><img src="https://res.cloudinary.com/buituan/image/upload/v1563301132/Project1/icon-bang-luong.png" alt=""/><br/>BẢNG LƯƠNG</a></li>
                        <li><a href="#"><img src="https://res.cloudinary.com/buituan/image/upload/v1563301151/Project1/icon-quan-ly-nhom.png" alt=""/><br/>QUẢN LÝ NHÓM</a></li>
                    </ul>
                </div>
            	<div className="comment">
            		<div className="comment-slide container-fluid">
                        <Comment/>
                    </div>
					<div className="more-comment container-fluid">
						<p>Hãy cũng xem những câu chuyện từ khách hàng khác</p>
						<button><NavLink to={`${this.props.gioiThieu.routes[1].path}/${this.props.gioiThieu.routes[1].subroute[0].id}`}>Xem ngay tại đây   <i className="fas fa-plus"/></NavLink></button>
					</div>
            	</div>
				<div className="statistic">
                    <p className="statistic-title">ECOUNT mang đến phương pháp quản lý<br/>cho doanh nghiệp vừa và nhỏ bằng sự tin cậy và tín nhiệm</p>
                    <ul>
                        <li>
                            <img src="https://res.cloudinary.com/buituan/image/upload/v1563301178/Project1/chi-nhanh.png" alt=""/>
                            <h1> 10 </h1>
                            <p>Chi nhánh toàn cầu</p>
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/buituan/image/upload/v1563301199/Project1/nam-kinh-nghiem.png" alt=""/>
                            <h1> 20 </h1>
                            <p>Năm kinh nghiệm</p>
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/buituan/image/upload/v1563301216/Project1/tinh-nang.png" alt=""/>
                            <h1> 27.030 </h1>
                            <p>Số tính năng phát triển suốt 20 năm</p>
                        </li>
                        <li>
                            <img src="https://res.cloudinary.com/buituan/image/upload/v1563301230/Project1/dv-su-dung.png" alt=""/>
                            <h1> 40.000 </h1>
                            <p>Đơn vị sử dụng</p>
                        </li>
                    </ul>
                    <div className="more-statistic">
                        <p>1.256 ngành hàng kinh doanh khác nhau<br/>đang tin dùng ECOUNT ERP</p>
                        <button><NavLink to={`${this.props.ecount.routes[1].path}/${this.props.ecount.routes[1].subroute[0].id}`}>
                            Xem chi tiết <i className="fas fa-plus"/>
                        </NavLink></button>
                    </div>
                </div>		
				<div className="merit container-fluid">
                    <p>ECOUNT ERP mang đến dịch vụ tốt nhất</p>
                    <ul>
                        <li className="container-fluid">
                            <div className="row">
                                <div className="img-merit col-md-4">
                                    <img src="https://res.cloudinary.com/buituan/image/upload/v1563301686/Project1/merit-1.png" alt=""/>
                                </div>
                                <a className="col-md-8" href="#">
                                    Không cần cài đặt ban đầu<br/>
                                    Dùng trên trình duyệt web<br/><br/>
                                    <u><b>Sử dụng ngay ở bất cứ nơi đâu</b></u>
                                </a>
                            </div>
                        </li>
                        <li className="container-fluid">
                            <div className="row">
                                <div className="img-merit col-md-4">
                                    <img src="https://res.cloudinary.com/buituan/image/upload/v1563301700/Project1/merit-2.png" alt=""/>
                                </div>
                                <a className="col-md-8" href="#">
                                    Không cần cài đặt ban đầu<br/>
                                    Dùng trên trình duyệt web<br/><br/>
                                    <u><b>Sử dụng ngay ở bất cứ nơi đâu</b></u>
                                </a>
                            </div>
                        </li>
                        <li className="container-fluid">
                            <div className="row">
                                <div className="img-merit col-md-4">
                                    <img src="https://res.cloudinary.com/buituan/image/upload/v1563301716/Project1/merit-3.png" alt=""/>
                                </div>
                                <a className="col-md-8" href="#">
                                    Không cần cài đặt ban đầu<br/>
                                    Dùng trên trình duyệt web<br/><br/>
                                    <u><b>Sử dụng ngay ở bất cứ nơi đâu</b></u>
                                </a>
                            </div>
                        </li>
                        <li className="container-fluid">
                            <div className="row">
                                <div className="img-merit col-md-4">
                                    <img src="https://res.cloudinary.com/buituan/image/upload/v1563301729/Project1/merit-4.png" alt=""/>
                                </div>
                                <a className="col-md-8" href="#">
                                    Không cần cài đặt ban đầu<br/>
                                    Dùng trên trình duyệt web<br/><br/>
                                    <u><b>Sử dụng ngay ở bất cứ nơi đâu</b></u>
                                </a>
                            </div>
                        </li>
                        <li className="container-fluid">
                            <div className="row">
                                <div className="img-merit col-md-4">
                                    <img src="https://res.cloudinary.com/buituan/image/upload/v1563301742/Project1/merit-5.png" alt=""/>
                                </div>
                                <a className="col-md-8" href="#">
                                    Không cần cài đặt ban đầu<br/>
                                    Dùng trên trình duyệt web<br/><br/>
                                    <u><b>Sử dụng ngay ở bất cứ nơi đâu</b></u>
                                </a>
                            </div>
                        </li>
                        <li className="container-fluid">
                            <div className="row">
                                <div className="img-merit col-md-4">
                                    <img src="https://res.cloudinary.com/buituan/image/upload/v1563301757/Project1/merit-6.png" alt=""/>
                                </div>
                                <a className="col-md-8" href="#">
                                    Không cần cài đặt ban đầu<br/>
                                    Dùng trên trình duyệt web<br/><br/>
                                    <u><b>Sử dụng ngay ở bất cứ nơi đâu</b></u>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="trial">
                    <p>Chỉ 1.000.000 đồng mỗi tháng với đầy đủ tính năng <br/>
                    Miễn phí 7 ngày dùng thử ngay hôm nay</p>
                    <button><NavLink to={`${this.props.sanPham.routes[0].path}/${this.props.ecount.routes[0].subroute[0].id}`}>
                            Yêu cầu dùng thử <i className="fas fa-plus" />
                    </NavLink></button>
                </div>
            </div>
        );
    }
}

export default Main;
