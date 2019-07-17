import React, { Component } from 'react';
import './footer.css'
class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer container-fluid">
            <div className="row">
            	<div className="location col-md-4">
            		<a href="#">
	            		<i className="fas fa-map-marker-alt"></i> LIÊN HỆ:<br/>
						Lầu 6, 51 Nguyễn Cư Trinh, Phường Nguyễn Cư Trinh,<br/>
						Quận 1, Hồ Chí Minh, Việt Nam <br/> <br/>
					</a>
					<a href="#"><i className="fas fa-phone"></i> 028-3837-3100<br/></a>
					<a href="#"><i className="fas fa-envelope"></i> askmail@ecount.vn<br/></a>
					<a href="#"><i className="fab fa-skype"></i>Skype ID : EcountERP-Viet</a>
            	</div>
            	<div className="menu-footer col-md-5">
            		<p><i className="fas fa-bars"></i> MENU</p>
            		<ul>
            			<li>
            				<a href="#">Tính năng ERP</a>
            			</li>
            			<li>
            				<a href="#">VỀ ECOUNT ERP</a>
            			</li>
            			<li>
            				<a href="#">DICH VỤ</a>
            			</li>
            			<li>
            				<a href="#">SẢN PHẨM</a>
            			</li>
            			<li>
            				<a href="#">GIỚI THIỆU</a>
            			</li>
            		</ul>
            		<p><i className="fas fa-globe-asia"></i> GLOBAL SITES</p>
            	</div>
            	<div className="iso col-md-3">
            		<p><i className="fas fa-bookmark"></i> CHỨNG CHỈ BẢO MẬT</p>
            	</div>
            </div>
            </div>
        );
    }
}

export default Footer;
