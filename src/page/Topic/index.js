import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { getTopics } from "../../Services/TopicServices";

function Topic() {
  const [topic, setTopic] = useState([]);
  const navigate = useNavigate();
  const token=localStorage.getItem("token");

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getTopics(token);
      setTopic(res.data);
    };
    fetchAPI();
  }, []);
  const handleClick = (id) => {
    navigate(`/quiz/${id}`);
  };

  return (
    <>
      <div className="topic">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Chủ đề bài thi gồm
        </h2>
        {topic.length > 0 ? (
          <>
            <div className="container">
              <div className="row">
                {topic.map((item, index) => (
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12"
                    key={item.id}
                  >
                    <div className="topic__box">
                      <div className="topic__img">
                        <img src={item?.thumnail} alt="mota" />
                      </div>
                      <div className="topic__name">{item.name}</div>
                      <button
                        className="topic__btn"
                        onClick={() => handleClick(item.id)}
                      >
                        Thi ngay
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="loading">
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Topic;
