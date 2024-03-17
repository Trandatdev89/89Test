import { useEffect, useState } from "react";
import { get } from "../../utils/requestAPI";
import { Link } from "react-router-dom";
import "./index.scss";
import { getCookie } from "../../components/helper/cookie";
import { getUserbyId } from "../../components/Services/AnswerServices";
function Anwser() {
  const [dataAnswer, setDataAnswer] = useState([]);
  const userId = getCookie("id");
  useEffect(() => {
    const fetchAnswer = async () => {
      const res = await getUserbyId(userId);
      const topic = await get(`topics`);

      let dataFinal = [];
      for (let i = 0; i < res.length; i++) {
        dataFinal.push({
          ...res[i],
          name: topic.find((item) => item.id === res[i].topicId).name,
        });
      }
      console.log(dataFinal);
      setDataAnswer(dataFinal);
    };
    fetchAnswer();
  }, []);

  return (
    <>
      <div className="History" style={{paddingTop:"100px"}}>
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          Lịch Sử Làm Bài
        </h1>
        {dataAnswer.length > 0 ? (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <table className="History__table">
                  <thead className="History__head">
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataAnswer.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <button type="button" className="History__btn">
                            <Link to={`/result/` + item.id}>Xem lại bài</Link>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="loading"></div>
        )}
      </div>
    </>
  );
}

export default Anwser;
