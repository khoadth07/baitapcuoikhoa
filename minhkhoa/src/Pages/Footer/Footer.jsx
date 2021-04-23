import React from 'react';
import './_footer.scss';

const Footer = () => {
    return (
        <div className="footer">
        <div className="footer_container container">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12 mt-3">
                    <p className="title hideOnMobile">TIX</p>
                    <div className="row rule_container">
                        <div className="col-md-6 col-sm-6 col-xs-6 pr-0 hideOnMobile">
                            <a className="rule" href="/" >FAQ</a>
                            <a className="rule" href="/">Brand Guidelines</a>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 rule_container_right">
                            <a className="rule" href="/">Thoả thuận sử dụng</a>
                            <a className="rule" href="/">Chính sách bảo mật</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-4 col-xs-12 mt-3 hideOnMobile">
                    <p className="title">ĐỐI TÁC</p>
                    <div className="col-sm-12 col-xs-12 px-0 mb-3">
                        <a target="_blank" rel="noopener noreferrer" href="http://bhdstar.vn" className="mr-4">
                            <img className="iconPartner" src="../../img/cgv.png" alt="" style={{backgroundColor:"#fff"}} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.galaxycine.vn/" className="mr-4">
                            <img className="iconPartner" src="../../img/rap-bhd.png" alt="" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://cinestar.com.vn/" className="mr-4">
                            <img className="iconPartner" src="../../img/bank/galaxycine.png" alt="" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="http://lottecinemavn.com/LCHS/index.aspx" className="mr-4">
                            <img className="iconPartner" src="../../img/rap-cinestar.png" alt="" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.megagscinemas.vn/" className="mr-4">
                            <img className="iconPartner" src="../../img/bank/lotte.png" alt="" />
                        </a>
                    </div>
                    <div className="col-sm-12 col-xs-12 px-0 mb-3">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.betacineplex.vn/home.htm" className="mr-4">
                            <img className="iconPartner" src="../../img/bank/megags.png" alt="" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="http://ddcinema.vn/" className="mr-4">
                            <img className="iconPartner" src="../../img/bank/bt.png"alt="" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://touchcinema.com/" className="mr-4">
                            <img className="iconPartner" src="../../img/bank/dongdacinema.png" alt="" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://cinemaxvn.com/" className="mr-4">
                            <img className="iconPartner" src="../../img/bank/TOUCH.png" alt="" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://starlight.vn/" className="mr-4">
                            <img className="iconPartner" src="../../img/bank/cnx.png" alt="" />
                        </a>
                    </div>
                    <div className="col-sm-12 col-xs-12 px-0 mb-3">
                        <a target="_blank" rel="noopener noreferrer" href="https://momo.vn/" className="mr-4">
                            <img className="iconPartner" src="../../img/bank/STARLIGHT.png" alt="" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://zalopay.vn/" className="mr-4">
                            <img className="iconPartner" src="../../img/bank/dcine.png" alt="" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.payoo.vn/" className="mr-4">
                            <img className="iconPartner" src="../../img/bank/zalopay_icon.png" alt="" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.vietcombank.com.vn/" className="mr-4">
                            <img className="iconPartner" src="../../img/bank/payoo.png" alt="" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.agribank.com.vn/" className="mr-4">
                            <img className="iconPartner" src="../../img/bank/VCB.png" alt="" />
                        </a>
                    </div>
                    <div className="col-sm-12 col-xs-12 px-0 mb-3">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.vietinbank.vn/web/home/vn/index.html" className="mr-4">
                            <img className="iconPartner" src="../../img/bank/AGRIBANK.png" alt="" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.indovinabank.com.vn/" className="mr-4">
                            <img className="iconPartner" src="../../img/bank/VIETTINBANK.png" alt="" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://123go.vn/" className="mr-4">
                            <img className="iconPartner" src="../../img/bank/IVB.png" alt="" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://laban.vn/" className="mr-4">
                            <img className="iconPartner" src="../../img/bank/123go.png" alt="" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="http://bhdstar.vn" className="mr-4">
                            <img className="iconPartner" src="../../img/bank/laban.png" alt="" />
                        </a>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12 col-xs-12 mt-3">
                    <div className="row justify-content-around">
                        <div className="col-xs-6 mr-4 text-center hideOnMobile">
                            <p className="title">MOBILE APP</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197" className="mr-2">
                                <img className="iconPartner" src="../../img/apple-logo.png" alt="" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">
                                <img className="iconPartner" src="../../img/android-logo.png" alt="" />
                            </a>
                        </div>

                        <div className="col-sm-6 col-xs-6 ml-4 text-center social">
                            <p className="title hideOnMobile">SOCIAL</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/123phim/" className="mr-3">
                                <img className="iconPartner" src="../../img/facebook-logo.png" alt="" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://zalo.me/123phim">
                                <img className="iconPartner iconPartner__R" src="../../img/zalo-logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="line mt-4 mb-3"></div>

            <div className="row">
                <div className="col-md-1 col-sm-12 col-xs-12">
                    <img className="zionImg" src="../../img/zion-logo.jpg" alt="" />
                </div>

                <div className="col-md-9 col-sm-12 col-xs-12">
                    <p className="pProductOf">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                    <p className="pAddressAndTax">Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</p>
                    <p className="pAddressAndTax">Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
                    <p className="pAddressAndTax">đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</p>
                    <p className="pAddressAndTax">Số Điện Thoại (Hotline): 1900 545 436</p>
                    <p className="pAddressAndTax mb-4">Email: <a href="mailto:support@tix.vn">support@tix.vn</a></p>
                </div>

                <div className="col-md-2 col-sm-12 col-xs-12 text-right">
                    <a target="_blank" rel="noopener noreferrer" href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=55561" title="Bộ Công Thương">
                        <img className="boCongThuong" src="../../img/dathongbao.png" alt="Bộ Công Thương" />
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;
