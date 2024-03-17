import "./index.scss";

function Usage() {
  return (
    <>
      <div class="Section-night">
        <h1 style={{textAlign:"center",marginBottom:"20px"}}>Liên hệ với chúng tôi</h1>
        <div class="container">
          <div class="inner-wrap">
            <div class="inner-head">
              <p class="inner-desc" style={{ color: "#000" }}>
                Estimate For Projects
              </p>
              <h1 class="inner-title">Share Work Details</h1>
            </div>
            <div class="inner-main">
              <form action="#">
                <div class="inner-inf">
                  <input
                    type="text"
                    class="inner-box"
                    placeholder="Full name"
                  />
                  <input
                    type="text"
                    class="inner-box"
                    placeholder="Email Address"
                  />
                  <input type="text" class="inner-box" placeholder="Subject" />
                </div>
                <textarea
                  name="Work details"
                  class="big-text"
                  placeholder="Work details"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>

                <a href="#" class="btn btn-five">
                  Subscribe Now
                </a>

                <div class="inner-fix"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usage;
