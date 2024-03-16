import { useEffect, useState } from "react";
import { get } from "../../utils/requestAPI";
import { Link } from "react-router-dom";
import "./index.scss";
function Anwser() {
  const [dataAnswer, setDataAnswer] = useState([]);
  useEffect(() => {
    const fetchAnswer = async () => {
      const res = await get("answers");
      const topic = await get(`topics`);
      let dataFinal = [];
      for (let i = 0; i < res.length; i++) {
        dataFinal.push({
          ...res[i],
          name: topic.find((item) => item.id === res[i].topicId).name,
        });
      }

      setDataAnswer(dataFinal);
    };
    fetchAnswer();
  }, []);

  return (
    <>
      <div className="History">
        <h1 style={{textAlign:"center",marginBottom:"40px"}}>Lịch Sử Làm Bài</h1>
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
                        <button type="button" class="History__btn">
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
      </div>
    </>
  );
}

export default Anwser;
