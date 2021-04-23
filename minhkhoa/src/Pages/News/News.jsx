import React from "react";
import "./_news.scss";

const News = () => {
  return (
    <>
      <section className="news" id="news" id="section3">
        <div className="news__content container">
          <ul
            className="nav nav-pills mb-3 justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Điện Ảnh 24h
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Review
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Khuyến Mãi
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row" id="dienAnhContent">
                <div className="row">
                  <div className="col-12 col-sm-6 news__item">
                    <a href="/" className="news__top">
                      <img
                        className="img-fluid"
                        src="./img/news/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png"
                        alt="img"
                      />
                    </a>
                    <a className="news__title" href="/">
                      <p>
                        Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                        công chiếu{" "}
                      </p>
                    </a>
                    <p className="news__description news__description__big">
                      Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu
                      lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé.
                      Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ
                      đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng
                      của tác phẩm.{" "}
                    </p>
                    <a href="/" className="news__icon">
                      <i className="fa fa-thumbs-up" /> 1
                    </a>
                    <a href="/" className="news__icon">
                      <i className="fa fa-comment-alt" /> 1
                    </a>
                  </div>
                  <div className="col-12 col-sm-6 news__item">
                    <a href="/" className="news__top">
                      <img
                        className="img-fluid"
                        src="./img/news/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg"
                        alt="img"
                      />
                    </a>
                    <a className="news__title" href="/">
                      <p>
                        NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ
                        TRANG PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM –
                        VINAMAN{" "}
                      </p>
                    </a>
                    <p className="news__description news__description__big">
                      Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã
                      chính thức phát động cuộc thi thiết kế trang phục cho siêu
                      anh hùng VINAMAN với tổng giá trị giải thưởng lên đến 60
                      triệu đồng.{" "}
                    </p>
                    <a href="/" className="news__icon">
                      <i className="fa fa-thumbs-up" /> 1
                    </a>
                    <a href="/" className="news__icon">
                      <i className="fa fa-comment-alt" /> 1
                    </a>
                  </div>
                  <div className="col-12 col-sm-4 news__item">
                    <a href="/">
                      <img
                        className="img-fluid"
                        src="./img/news/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png"
                        alt="img"
                      />
                    </a>
                    <a className="news__title" href="/">
                      <p>
                        [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
                        Antebellum: Bẫy Thực Tại Kinh Hoàng{" "}
                      </p>
                    </a>
                    <p className="news__description">
                      Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác
                      những mảng tối của xã hội trên nền một câu chuyện kinh dị,
                      có sự tham gia của nhà sản xuất đã làm nên thành công của
                      loạt tác phẩm ấn tượng “Get Out”, “Us” hay
                      “BlacKkKlansman”, và còn nhiều lý do khác khiến người yêu
                      phim không thể bỏ lỡ Ante{" "}
                    </p>
                    <a href="/" className="news__icon">
                      <i className="fa fa-thumbs-up" /> 1
                    </a>
                    <a href="/" className="news__icon">
                      <i className="fa fa-comment-alt" /> 1
                    </a>
                  </div>
                  <div className="col-12 col-sm-4 news__item">
                    <a href="/">
                      <img
                        className="img-fluid"
                        src="./img/news/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png"
                        alt="img"
                      />
                    </a>
                    <a className="news__title" href="/">
                      <p>
                        {" "}
                        TENET công bố ngày khởi chiếu chính thức tại Việt Nam{" "}
                      </p>
                    </a>
                    <p className="news__description">
                      Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra
                      thông báo chính thức về ngày khởi chiếu cho bom tấn TENET
                      tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.{" "}
                    </p>
                    <a href="/" className="news__icon">
                      <i className="fa fa-thumbs-up" /> 1
                    </a>
                    <a href="/" className="news__icon">
                      <i className="fa fa-comment-alt" /> 1
                    </a>
                  </div>
                  <div className="col-12 col-sm-4 news__item">
                    <div className="row">
                      <div className="col-12 news__last">
                        <div className="row">
                          <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                            <a href="/">
                              <img
                                className="img-fluid img_w"
                                src="./img/news/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="col-10 col-sm-8 col-lg-9 news__small">
                            <a className="news__title" href="/">
                              <p className="hiding">
                                {" "}
                                Dàn mỹ nhân trong thế giới điện ảnh của quái
                                kiệt Christopher Nolan{" "}
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 news__last">
                        <div className="row">
                          <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                            <a href="/">
                              <img
                                className="img-fluid img_w"
                                src="./img/news/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="col-10 col-sm-8 col-lg-9 news__small">
                            <a className="news__title" href="/">
                              <p className="hiding">
                                {" "}
                                Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông
                                hoàng phòng vé' xứ Hàn{" "}
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 news__last">
                        <div className="row">
                          <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                            <a href="/">
                              <img
                                className="img-fluid img_w"
                                src="./img/news/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="col-10 col-sm-8 col-lg-9 news__small">
                            <a className="news__title" href="/">
                              <p className="hiding">
                                {" "}
                                6 đạo diễn tỉ đô làm nên thành công của những
                                bom tấn đình đám nhất Hollywood{" "}
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 news__last">
                        <div className="row">
                          <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                            <a href="/">
                              <img
                                className="img-fluid img_w"
                                src="./img/news/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-15965999321682.png"
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="col-10 col-sm-8 col-lg-9 news__small">
                            <a className="news__title" href="/">
                              <p className="hiding">
                                {" "}
                                Gái Già Lắm Chiêu V – Những cuộc đời vương giả
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btnXemThem d-flex justify-content-center">
                <button className="btn btn-xemThem my-5" id="btnXemThemDienAnh">
                  XEM THÊM
                </button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="row" id="reviewContent">
                <div className="col-12 col-sm-6 news__item">
                  <a href="/">
                    <img
                      className="img-fluid"
                      src="./img/news/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png"
                      alt="img"
                    />
                  </a>
                  <a className="news__title" href="/">
                    <p className="news__title__small">
                      Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên
                      kết{" "}
                    </p>
                  </a>
                  <p className="news__description    ">
                    Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám
                  </p>
                  <a href="/" className="news__icon">
                    <i className="fa fa-thumbs-up" /> 1
                  </a>
                  <a href="/" className="news__icon">
                    <i className="fa fa-comment-alt" /> 1
                  </a>
                </div>
                <div className="col-12 col-sm-6 news__item">
                  <a href="/">
                    <img
                      className="img-fluid"
                      src="./img/news/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png"
                      alt="img"
                    />
                  </a>
                  <a className="news__title" href="/">
                    <p className="news__title__small">Review: Dinh Thự Oan Khuất (Ghost Of War) </p>
                  </a>
                  <p className="news__description">
                    Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự
                    Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!{" "}
                  </p>
                  <a href="/" className="news__icon">
                    <i className="fa fa-thumbs-up" /> 1
                  </a>
                  <a href="/" className="news__icon">
                    <i className="fa fa-comment-alt" /> 1
                  </a>
                </div>
                <div className="col-12 col-sm-4 news__item">
                  <a href="/">
                    <img
                      className="img-fluid"
                      src="./img/news/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png"
                      alt="img"
                    />
                  </a>
                  <a className="news__title" href="/">
                    <p>
                      ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh{" "}
                    </p>
                  </a>
                  <p className="news__description news__description__small">
                    Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của
                    đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng
                    tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay.{" "}
                  </p>
                  <a href="/" className="news__icon">
                    <i className="fa fa-thumbs-up" /> 1
                  </a>
                  <a href="/" className="news__icon">
                    <i className="fa fa-comment-alt" /> 1
                  </a>
                </div>
                <div className="col-12 col-sm-4 news__item">
                  <a href="/">
                    <img
                      className="img-fluid"
                      src="./img/news/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
                      alt="img"
                    />
                  </a>
                  <a className="news__title" href="/">
                    <p>American Sniper - Chính nghĩa hay phi nghĩa? </p>
                  </a>
                  <p className="news__description news__description__small">
                    American Sniper khắc họa một tay súng bắn tỉa “huyền thoại”
                    của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu
                    chuyện phim chậm rãi đưa người xem qua từng thời khắc khác
                    nhau của Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân
                    đội, rồi tham chiến. Từng khoảnh khắc bắt đầu nhẹ nhàng...{" "}
                  </p>
                  <a href="/" className="news__icon">
                    <i className="fa fa-thumbs-up" /> 1
                  </a>
                  <a href="/" className="news__icon">
                    <i className="fa fa-comment-alt" /> 1
                  </a>
                </div>
                <div className="col-12 col-sm-4 news__item">
                  <div className="row">
                    <div className="col-12 news__last">
                      <div className="row">
                        <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                          <a href="/">
                            <img
                              className="img-fluid img_w"
                              src="./img/news/review-spider-man-into-the-spider-vesre-15886520889426.png"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-9 news__small">
                          <a className="news__title" href="/">
                            <p className="hiding">
                              Review: Spider-Man: Into The Spider-Vesre{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 news__last">
                      <div className="row">
                        <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                          <a href="/">
                            <img
                              className="img-fluid img_w"
                              src="./img/news/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-9 news__small">
                          <a className="news__title" href="/">
                            <p className="hiding">
                              COVID-19 là bản chính thức của MEV-1 phim
                              contagion (2011){" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 news__last">
                      <div className="row">
                        <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                          <a href="/">
                            <img
                              className="img-fluid img_w"
                              src="./img/news/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-9 news__small">
                          <a className="news__title" href="/">
                            <p className="hiding">
                              [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống
                              chưa bao giờ lầy lội và hài hước đến thế{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 news__last">
                      <div className="row">
                        <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                          <a href="/">
                            <img
                              className="img-fluid img_w"
                              src="./img/news/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731141389.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-9 news__small">
                          <a className="news__title" href="/">
                            <p className="hiding">
                              [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ
                              Siêu anh hùng Valiant{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btnXemThem d-flex justify-content-center">
                <button className="btn btn-xemThem my-5" id="btnXemThemReview">
                  XEM THÊM
                </button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="row" id="khuyenMaiContent">
                <div className="col-12 col-sm-6 news__item">
                  <a href="/">
                    <img
                      className="img-fluid"
                      src="./img/news/bhd-59k-ve-ca-tuan-16045659414321.jpg"
                      alt="img"
                    />
                  </a>
                  <a className="news__title" href="/">
                    <p className="news__title__small">BHD 59K/VÉ CẢ TUẦN !!! </p>
                  </a>
                  <p className="news__description">
                    Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                    59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.{" "}
                  </p>
                  <a href="/" className="news__icon">
                    <i className="fa fa-thumbs-up" /> 1
                  </a>
                  <a href="/" className="news__icon">
                    <i className="fa fa-comment-alt" /> 1
                  </a>
                </div>
                <div className="col-12 col-sm-6 news__item">
                  <a href="/">
                    <img
                      className="img-fluid"
                      src="./img/news/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg"
                      alt="img"
                    />
                  </a>
                  <a className="news__title" href="/">
                    <p className="news__title__small">TIX 1K/VÉ NGẠI CHI GIÁ VÉ </p>
                  </a>
                  <p className="news__description">
                    Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm
                    02 voucher thanh toán ZaloPay thả ga{" "}
                  </p>
                  <a href="/" className="news__icon">
                    <i className="fa fa-thumbs-up" /> 1
                  </a>
                  <a href="/" className="news__icon">
                    <i className="fa fa-comment-alt" /> 1
                  </a>
                </div>
                <div className="col-12 col-sm-4 news__item">
                  <a href="/">
                    <img
                      className="img-fluid"
                      src="./img/news/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png"
                      alt="img"
                    />
                  </a>
                  <a className="news__title" href="/">
                    <p>ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX </p>
                  </a>
                  <p className="news__description">
                    ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc
                    chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua
                    TIX.
                  </p>
                  <a href="/" className="news__icon">
                    <i className="fa fa-thumbs-up" /> 1
                  </a>
                  <a href="/" className="news__icon">
                    <i className="fa fa-comment-alt" /> 1
                  </a>
                </div>
                <div className="col-12 col-sm-4 news__item">
                  <a href="/">
                    <img
                      className="img-fluid"
                      src="./img/news/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg"
                      alt="img"
                    />
                  </a>
                  <a className="news__title" href="/">
                    <p>BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN! </p>
                  </a>
                  <p className="news__description">
                    Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                    59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc
                    Mục Vé Phim trên ZaloPay.
                  </p>
                  <a href="/" className="news__icon">
                    <i className="fa fa-thumbs-up" /> 1
                  </a>
                  <a href="/" className="news__icon">
                    <i className="fa fa-comment-alt" /> 1
                  </a>
                </div>
                <div className="col-12 col-sm-4 news__item">
                  <div className="row">
                    <div className="col-12 news__last">
                      <div className="row">
                        <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                          <a href="/">
                            <img
                              className="img-fluid img_w"
                              src="./img/news/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-9 news__small">
                          <a className="news__title" href="/">
                            <p className="hiding">
                              Beta Cineplex trở lại với hàng loạt ưu đãi lớn{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 news__last">
                      <div className="row">
                        <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                          <a href="/">
                            <img
                              className="img-fluid img_w"
                              src="./img/news/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-9 news__small">
                          <a className="news__title" href="/">
                            <p className="hiding">
                              [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt
                              11k/vé Anh Trai Yêu Quái{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 news__last">
                      <div className="row">
                        <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                          <a href="/">
                            <img
                              className="img-fluid img_w img_w"
                              src="./img/news/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-9 news__small">
                          <a className="news__title" href="/">
                            <p className="hiding">
                              [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt
                              vé Pháp Sư Mù: Ai Chết Giơ Tay{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 news__last">
                      <div className="row">
                        <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                          <a href="/">
                            <img
                              className="img-fluid img_w"
                              src="./img/news/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-9 news__small">
                          <a className="news__title" href="/">
                            <p className="hiding">
                              [Mega GS] Một đoá hoa thay ngàn lời yêu{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btnXemThem d-flex justify-content-center">
                <button
                  className="btn btn-xemThem my-5"
                  id="btnXemThemKhuyenMai"
                >
                  XEM THÊM
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
