import React, { useEffect, useState } from 'react'
import { getHistoryTest } from '../../Services/AnswerServices';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';
import "./index.scss";

export default function History() {

  const [dataAnswer, setDataAnswer] = useState([]);
  const token=localStorage.getItem("token");
  useEffect(() => {
    const fetchAnswer = async () => {
      const res = await getHistoryTest(parseInt(jwtDecode(token).sub),token);
      console.log(res);
      setDataAnswer(res.data);
    };
    fetchAnswer();
  }, []);

  console.log(dataAnswer);
  return (
    <div className="History" style={{paddingTop:"100px"}}>
    <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
      Lịch Sử Làm Bài
    </h1>
    {(dataAnswer || []).length > 0 ? (
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
                {(dataAnswer || []).map((item,index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.topicId}</td>
                    <td>
                      <button type="button" className="History__btn">
                        <Link to={`/result/` + item.topicId}>Xem lại bài</Link>
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
  )
}
