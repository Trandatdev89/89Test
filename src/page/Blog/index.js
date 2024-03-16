import anh1 from "../../img/ss13.jpg";
import anh2 from "../../img/ss14.jpg";
import anh3 from "../../img/ss15.jpg";
import anh4 from "../../img/ss16.jpg";
import leo from "../../img/logo.png";
import "./index.scss";
import code from "../../img/637666940695007798_coding_languages_1024x.png";
import { Link } from "react-router-dom";
function Blog() {
  return (
    <>
      <div className="blog blog--background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blog__breadcumb">
                <nav aria-label="breadcrumb" className="mb-3">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="/">Trang chủ</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      <Link to={"/blog"}>tin tức</Link>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="blog__carousel">
                <div
                  id="carouselExampleRide"
                  class="carousel slide"
                  data-bs-ride="true"
                >
                  <div class="carousel-inner blog__wrap">
                    <div class="carousel-item blog__item active">
                      <img src={anh1} alt="anh1" />
                    </div>
                    <div class="carousel-item blog__item">
                      <img src={anh2} alt="anh2" />
                    </div>
                    <div class="carousel-item blog__item">
                      <img src={anh3} alt="anh3" />
                    </div>
                    <div class="carousel-item blog__item">
                      <img src={anh4} alt="anh4" />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleRide"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleRide"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="blog__box">
                <div className="blog__img">
                  <img src="https://api.kquiz.vn/Upload/Post/637657000557518644_maxresdefault.jpg" />
                </div>
                <div className="blog__subimg">
                  <img src="https://res.cloudinary.com/howkteam/image/upload/v1569765538/avatar_user/barpg374aoostgcxs2dr.png" />
                </div>
                <div className="blog__content">
                  <h5 className="blog__title blog__title--white">
                    Giới thiệu đề 500 câu hỏi HTML siêu bổ ích
                  </h5>
                  <p className="blog__desc blog__desc--white">
                    Rèn luyện kiến thức Python siêu bổ ích từ 500 câu trắc
                    nghiệm 89Test chọn lọc &nbsp; Đề 500 câu hỏi Python chọn lọc
                    Bộ đề 500 câu hỏi Python đã vừa được ra mắt với sự chọn lọc
                    kỹ càng về mặt nội dung và chất lượng. Nhằm mục đích đem lại
                    trải nghiệm tốt nhất về mặt kiến thức cũng như luyện tập cho
                    việc củng cố lại nền tảng sau khi học xong khóa học lập
                    trình Python cơ bản trên website 89Test. 500 câu trắc nghiệm
                    Python&nbsp; này còn giúp rèn luyện phản xạ tư duy cho các
                    trận battle cực căng giữa các Kters đối chiến lẫn
                    nhau.&nbsp; &nbsp;(Đề trắc nghiệm 500 câu Python tự luyện)
                    Với sự chọn lọc kỹ càng về chất lượng từng chủ đề như kiểu
                    dữ liệu Tuple, Dictionaries, Fuction, Hàm, Đệ quy … 500 câu
                    trắc nghiệm Python này có thể nói là bộ đề được biên soạn và
                    chọn lọc tinh túy nhất từ kho trắc nghiệm
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="blog__box">
                <div className="blog__img">
                  <img src="https://api.kquiz.vn/Upload/Post/637657002667005850_untitlsssssed.png" />
                </div>
                <div className="blog__subimg">
                  <img src="https://res.cloudinary.com/howkteam/image/upload/v1569765538/avatar_user/barpg374aoostgcxs2dr.png" />
                </div>
                <div className="blog__content">
                  <h5 className="blog__title blog__title--white">
                    Giới thiệu đề 500 câu hỏi CSS siêu bổ ích
                  </h5>
                  <p className="blog__desc blog__desc--white">
                    Rèn luyện kiến thức Python siêu bổ ích từ 500 câu trắc
                    nghiệm 89Test chọn lọc &nbsp; Đề 500 câu hỏi Python chọn lọc
                    Bộ đề 500 câu hỏi Python đã vừa được ra mắt với sự chọn lọc
                    kỹ càng về mặt nội dung và chất lượng. Nhằm mục đích đem lại
                    trải nghiệm tốt nhất về mặt kiến thức cũng như luyện tập cho
                    việc củng cố lại nền tảng sau khi học xong khóa học lập
                    trình Python cơ bản trên website 89Test. 500 câu trắc nghiệm
                    Python&nbsp; này còn giúp rèn luyện phản xạ tư duy cho các
                    trận battle cực căng giữa các Kters đối chiến lẫn
                    nhau.&nbsp; &nbsp;(Đề trắc nghiệm 500 câu Python tự luyện)
                    Với sự chọn lọc kỹ càng về chất lượng từng chủ đề như kiểu
                    dữ liệu Tuple, Dictionaries, Fuction, Hàm, Đệ quy … 500 câu
                    trắc nghiệm Python này có thể nói là bộ đề được biên soạn và
                    chọn lọc tinh túy nhất từ kho trắc nghiệm
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="blog__box">
                <div className="blog__img">
                  <img src="	https://api.kquiz.vn/Upload/Post/637657389306812234_programming_languages-1024x640.jpeg" />
                </div>
                <div className="blog__subimg">
                  <img src="https://res.cloudinary.com/howkteam/image/upload/v1569765538/avatar_user/barpg374aoostgcxs2dr.png" />
                </div>
                <div className="blog__content">
                  <h5 className="blog__title blog__title--white">
                    Giới thiệu đề 500 câu hỏi JS siêu bổ ích
                  </h5>
                  <p className="blog__desc blog__desc--white">
                    Rèn luyện kiến thức Python siêu bổ ích từ 500 câu trắc
                    nghiệm 89Test chọn lọc &nbsp; Đề 500 câu hỏi Python chọn lọc
                    Bộ đề 500 câu hỏi Python đã vừa được ra mắt với sự chọn lọc
                    kỹ càng về mặt nội dung và chất lượng. Nhằm mục đích đem lại
                    trải nghiệm tốt nhất về mặt kiến thức cũng như luyện tập cho
                    việc củng cố lại nền tảng sau khi học xong khóa học lập
                    trình Python cơ bản trên website 89Test. 500 câu trắc nghiệm
                    Python&nbsp; này còn giúp rèn luyện phản xạ tư duy cho các
                    trận battle cực căng giữa các Kters đối chiến lẫn
                    nhau.&nbsp; &nbsp;(Đề trắc nghiệm 500 câu Python tự luyện)
                    Với sự chọn lọc kỹ càng về chất lượng từng chủ đề như kiểu
                    dữ liệu Tuple, Dictionaries, Fuction, Hàm, Đệ quy … 500 câu
                    trắc nghiệm Python này có thể nói là bộ đề được biên soạn và
                    chọn lọc tinh túy nhất từ kho trắc nghiệm
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="new">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="new__img">
                  <img src={code} alt="dang tai anh" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="new__content">
                  <h3>Bài hướng dẫn trên 89Test</h3>
                  <div className="new__avatar">
                    <div className="new__subimg">
                      <img src={leo} />
                    </div>
                    <h5 style={{marginRight:"100px",marginBottom:"0"}}>Trần Quốc Đạt</h5>
                    <div className="new__date">12/10/2024</div>
                  </div>
                  <p className="new__desc">
                    Nhân dịp kỷ niệm 5 năm thành lập website 89Test.vn. Kteam
                    quyết định mang đến một sân chơi rèn luyện tư duy, các kiến
                    thức từ cơ bản đến nâng cao đồng thời cũng là nơi để các bạn
                    khám phá giới hạn của bản thân bằng những đoạn lý thuyết
                    logic và các đoạn code đầy kịch tích, rối não thông qua hình
                    thức trắc nghiệm đề thi. Chào mừng các bạn đến với:
                    https:89test.vn
                  </p>
                  <span style={{color:"red"}}>Xem Thêm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
