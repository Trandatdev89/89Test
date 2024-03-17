import { FaUsers } from "react-icons/fa";
import learn from "../../img/learning-concept-illustration_114360-6186.avif";
import { SiGoogledocs } from "react-icons/si";
import { TfiCup } from "react-icons/tfi";
import "./scss/style.scss";
import { FaCheck } from "react-icons/fa6";
import teamwork1 from "../../img/teamwork.jpeg";
import blog1 from "../../img/637666940695007798_coding_languages_1024x.png";
import blog2 from "../../img/637816143688218111_ad-01-.jpg";
import blog3 from "../../img/download.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import WOW from 'wowjs';
import { useEffect } from "react";
import 'animate.css';

function Home() {
 
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <>
      <div className="home">
        <div className="banner">
          <div className="container">
            <div className="row banner__wrap">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="banner__content animate__animated animate__backInLeft">
                  <div className="banner__title">
                    Rèn luyện hơn <b style={{ color: "orangered" }}>5,423+</b>{" "}
                    câu trắc nghiệm dành riêng cho bạn
                  </div>
                  <p className="banner__desc">
                    Ngân hàng đề thi trắc nghiệm đa dạng, dành riêng cho cộng
                    đồng lập trình từ cơ bản đến nâng cao. Cùng 89Test: "Luyện
                    tập, thử thách, không ngại khó!"
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="banner__learn animate__animated animate__backInRight">
                  <img src={learn} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="usage" id="use">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="boxHead">
                  <h3 className="boxHead__title">Cách sử dụng 89Test</h3>
                  <p className="boxHead__desc">
                    Nếu đây là lần đầu truy cập, đừng bối rối! 89Test cực kỳ đơn
                    giản và dễ sử dụng chỉ với vài thao tác
                  </p>
                </div>
              </div>
              <div className="usage__list">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <div className="usage__box wow animate__animated animate__backInLeft">
                      <div className="usage__icons">
                        <FaUsers />
                      </div>
                      <h4 className="usage__title">Tạo tài khoản đăng nhập</h4>
                      <p className="usage__desc">
                        Bạn có thể tự tạo riêng cho mình một tài khoản mới, hoặc
                        liên kết tài khoản Nếu đã tham gia 89Test.com
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <div className="usage__box wow animate__animated animate__backInLeft">
                      <div className="usage__icons">
                        <SiGoogledocs />
                      </div>
                      <h4 className="usage__title">Tìm kiếm/Thi nhanh</h4>
                      <p className="usage__desc">
                        89Test cung cấp cho bạn một ngân hàng đề thi trắc nghiệm
                        đồ sộ mà bạn có thể nhanh chóng thử sức với bất kỳ bộ đề
                        nào hứng thú
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                    <div className="usage__box wow animate__animated animate__backInRight">
                      <div className="usage__icons">
                        <TfiCup />
                      </div>
                      <h4 className="usage__title">Thử thách bản thân</h4>
                      <p className="usage__desc">
                        Thử thách cùng bạn bè, cộng đồng là cách cực kỳ hữu hiệu
                        để nâng cao skills của bạn ngay hôm nay.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="quiz">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="boxHead1 wow animate__animated animate__fadeInDownBig">
                  <div className="boxHead1__title">
                    Bắt đầu thử thách với thi trắc nghiệm từ 89Test!
                  </div>
                  <div className="boxHead1__desc">
                    Khởi động chuỗi ngày luyện tập kiến thức của bạn ngay hôm
                    nay. Không chỉ đánh trắc nghiệm một cách nhàm chán, bạn có
                    nhiều hơn một lựa chọn để tham gia thi tại 89Test. Đừng
                    quên, với mỗi câu hỏi bạn đều sẽ được giải thích chi tiết và
                    tường tận lý do để chọn ra đâu là đáp án chính xác nhất.
                  </div>
                </div>
                <div className="quiz__btn">
                  <button className="btn btn--one wow animate__animated animate__backInLeft" style={{margin:"5px"}}>
                    {" "}
                    <Link to={"/topic"}>Thi ngẫu nhiên</Link>
                  </button>
                  <button className="btn btn--two wow animate__animated animate__backInRight" style={{margin:"5px"}}>
                    {" "}
                    <Link to={"/topic"}>Thi theo đề</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="choice">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="boxHead">
                  <h2 className="boxHead__title">Trắc nghiệm ngẫu nhiên</h2>
                  <p className="boxHead__desc">
                    Đề thi được tạo ngẫu nhiên từ kho câu hỏi theo danh mục mà
                    bạn lựa chọn
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="choice__box wow animate__animated animate__backInLeft">
                  <div className="choice__content">
                    <div className="choice__img">
                      <img src="https://lambanner.com/wp-content/uploads/2018/03/lambanner-thiet-ke-banner-html5.jpg" />
                    </div>
                    <div className="choice__text"  style={{marginLeft:"10px"}}>HTML</div>
                  </div>
                  <div className="button button--two">
                    <Link to={"/topic"}>Bắt đầu</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="choice__box wow animate__animated animate__backInLeft">
                  <div className="choice__content">
                    <div className="choice__img">
                      <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" />
                    </div>
                    <div className="choice__text" style={{marginLeft:"10px"}}>CSS</div>
                  </div>
                  <div className="button button--two">
                    {" "}
                    <Link to={"/topic"}>Bắt đầu</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="choice__box wow animate__animated animate__backInRight">
                  <div className="choice__content">
                    <div className="choice__img">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
                    </div>
                    <div className="choice__text"  style={{marginLeft:"10px"}}>JavaScript</div>
                  </div>
                  <div className="button button--two">
                    {" "}
                    <Link to={"/topic"}>Bắt đầu</Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="choice__box wow animate__animated animate__backInRight">
                  <div className="choice__content">
                    <div className="choice__img">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkVEpHdf82WlrIDfTLy3vbDJF0ad9an0AKUw&s" />
                    </div>
                    <div className="choice__text"  style={{marginLeft:"10px"}}>Reactjs</div>
                  </div>
                  <div className="button button--two">
                    {" "}
                    <Link to={"/topic"}>Bắt đầu</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="practive">
          <div className="container">
            <div className="row practive__wrap">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="practive__box wow animate__animated animate__fadeInDown">
                  <div className="practive__img1">
                    <img src={teamwork1} alt="teamwork" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="practive__content  wow animate__animated animate__fadeInDown">
                  <h1 className="practive__title">
                    Luyện tập bản thân qua các bài tập trắc nghiệm hữu ích
                  </h1>
                  <p className="practive__desc">
                    Với mỗi chủ đề, bạn hoàn toàn có thể dễ dàng tham gia một đề
                    thi ngẫu nhiên từ 89Test, hoặc thử thách bản thân với các
                    gói đề thi từ dễ đến khó. Bạn còn chần chừ gì mà chưa bắt
                    đầu ngay!
                  </p>
                  <ul className="practive__list">
                    <li className="practive__item">
                      <FaCheck /> Ngân hàng câu hỏi trắc nghiệm lập trình đồ sộ
                    </li>
                    <li className="practive__item">
                      <FaCheck /> Dễ dàng tham gia thi và nhận kết quả ngay sau
                      khi nộp bài
                    </li>
                    <li className="practive__item">
                      <FaCheck /> Giải thích đáp án với mỗi lựa chọn, giúp bạn
                      hiểu sâu hơn.
                    </li>
                  </ul>
                  <button className="button button--two">
                    {" "}
                    <Link to={"/topic"}>Bắt đầu</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="boxHead">
                  <h2 className="boxHead__title">Tin tức thú vị</h2>
                  <p className="boxHead__desc">
                    Những chia sẻ, hướng dẫn của 89Test để bạn thoải mái rèn
                    luyện kiến thức
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="blog__box wow animate__animated animate__backInRight">
                  <div className="blog__img">
                    <img src={blog1} />
                  </div>
                  <div className="blog__subimg">
                    <img src="https://res.cloudinary.com/89Test/image/upload/v1569765538/avatar_user/barpg374aoostgcxs2dr.png" />
                  </div>
                  <div className="blog__content">
                    <h5 className="blog__title">
                      Giới thiệu đề 500 câu hỏi HTML siêu bổ ích
                    </h5>
                    <p className="blog__desc">
                      Rèn luyện kiến thức Python siêu bổ ích từ 500 câu trắc
                      nghiệm 89Test chọn lọc &nbsp; Đề 500 câu hỏi Python chọn
                      lọc Bộ đề 500 câu hỏi Python đã vừa được ra mắt với sự
                      chọn lọc kỹ càng về mặt nội dung và chất lượng. Nhằm mục
                      đích đem lại trải nghiệm tốt nhất về mặt kiến thức cũng
                      như luyện tập cho việc củng cố lại nền tảng sau khi học
                      xong khóa học lập trình Python cơ bản trên website 89Test.
                      500 câu trắc nghiệm Python&nbsp; này còn giúp rèn luyện
                      phản xạ tư duy cho các trận battle cực căng giữa các Kters
                      đối chiến lẫn nhau.&nbsp; &nbsp;(Đề trắc nghiệm 500 câu
                      Python tự luyện) Với sự chọn lọc kỹ càng về chất lượng
                      từng chủ đề như kiểu dữ liệu Tuple, Dictionaries, Fuction,
                      Hàm, Đệ quy … 500 câu trắc nghiệm Python này có thể nói là
                      bộ đề được biên soạn và chọn lọc tinh túy nhất từ kho trắc
                      nghiệm
                    </p>
                    <div className="blog__more">
                      <Link to="/blog">
                        Xem thêm <MdKeyboardDoubleArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="blog__box wow animate__animated animate__backInLeft">
                  <div className="blog__img">
                    <img src={blog2} />
                  </div>
                  <div className="blog__subimg">
                    <img src="https://res.cloudinary.com/89Test/image/upload/v1569765538/avatar_user/barpg374aoostgcxs2dr.png" />
                  </div>
                  <div className="blog__content">
                    <h5 className="blog__title">
                      Giới thiệu đề 500 câu hỏi CSS siêu bổ ích
                    </h5>
                    <p className="blog__desc">
                      Rèn luyện kiến thức Python siêu bổ ích từ 500 câu trắc
                      nghiệm 89Test chọn lọc &nbsp; Đề 500 câu hỏi Python chọn
                      lọc Bộ đề 500 câu hỏi Python đã vừa được ra mắt với sự
                      chọn lọc kỹ càng về mặt nội dung và chất lượng. Nhằm mục
                      đích đem lại trải nghiệm tốt nhất về mặt kiến thức cũng
                      như luyện tập cho việc củng cố lại nền tảng sau khi học
                      xong khóa học lập trình Python cơ bản trên website 89Test.
                      500 câu trắc nghiệm Python&nbsp; này còn giúp rèn luyện
                      phản xạ tư duy cho các trận battle cực căng giữa các Kters
                      đối chiến lẫn nhau.&nbsp; &nbsp;(Đề trắc nghiệm 500 câu
                      Python tự luyện) Với sự chọn lọc kỹ càng về chất lượng
                      từng chủ đề như kiểu dữ liệu Tuple, Dictionaries, Fuction,
                      Hàm, Đệ quy … 500 câu trắc nghiệm Python này có thể nói là
                      bộ đề được biên soạn và chọn lọc tinh túy nhất từ kho trắc
                      nghiệm
                    </p>
                    <div className="blog__more">
                      <Link to="/blog">
                        Xem thêm <MdKeyboardDoubleArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="blog__box wow animate__animated animate__backInRight">
                  <div className="blog__img">
                    <img src={blog3} />
                  </div>
                  <div className="blog__subimg">
                    <img src="https://res.cloudinary.com/89Test/image/upload/v1569765538/avatar_user/barpg374aoostgcxs2dr.png" />
                  </div>
                  <div className="blog__content">
                    <h5 className="blog__title">
                      Giới thiệu đề 500 câu hỏi JS siêu bổ ích
                    </h5>
                    <p className="blog__desc">
                      Rèn luyện kiến thức Python siêu bổ ích từ 500 câu trắc
                      nghiệm 89Test chọn lọc &nbsp; Đề 500 câu hỏi Python chọn
                      lọc Bộ đề 500 câu hỏi Python đã vừa được ra mắt với sự
                      chọn lọc kỹ càng về mặt nội dung và chất lượng. Nhằm mục
                      đích đem lại trải nghiệm tốt nhất về mặt kiến thức cũng
                      như luyện tập cho việc củng cố lại nền tảng sau khi học
                      xong khóa học lập trình Python cơ bản trên website 89Test.
                      500 câu trắc nghiệm Python&nbsp; này còn giúp rèn luyện
                      phản xạ tư duy cho các trận battle cực căng giữa các Kters
                      đối chiến lẫn nhau.&nbsp; &nbsp;(Đề trắc nghiệm 500 câu
                      Python tự luyện) Với sự chọn lọc kỹ càng về chất lượng
                      từng chủ đề như kiểu dữ liệu Tuple, Dictionaries, Fuction,
                      Hàm, Đệ quy … 500 câu trắc nghiệm Python này có thể nói là
                      bộ đề được biên soạn và chọn lọc tinh túy nhất từ kho trắc
                      nghiệm
                    </p>
                    <div className="blog__more">
                      <Link to="/blog">
                        Xem thêm <MdKeyboardDoubleArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
