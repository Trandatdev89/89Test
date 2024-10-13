import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import "./index.scss";
import { getAnswerByTopicIdAndUserId } from "../../Services/AnswerServices";
import { jwtDecode } from "jwt-decode";
import { getTopicById } from "../../Services/TopicServices";
import { getQuizByTopic } from "../../Services/QuizServices";

function Result() {
  const params = useParams();
  const token = localStorage.getItem("token");
  const [dataResult, setDataResult] = useState([]);
  const [dataTopic, setDataTopic] = useState([]);
  let [choiceTrue, setChoiceTrue] = useState(0);


  useEffect(() => {
    const fetchResult = async () => {
      const res = await getAnswerByTopicIdAndUserId(
        parseInt(jwtDecode(token).sub),
        params.id,
        token
      );
      const result = await getQuizByTopic(params.id,token);
      const topic = await getTopicById(params.id,token);

      setDataTopic(topic.data);

      let resultFinal = [];
      for (let i = 0; i < result.data.length; i++) {
        resultFinal.push({
          ...result.data[i],
          ...res.answers.find((item) => item.questionId === result.data[i].id),
        });
        //hợp nhất 2 mảng vào làm 1 gồm mảng các câu hỏi và mảng câu trả lời của người dùng
      }

      for (let i = 0; i < resultFinal.length; i++) {
        if (resultFinal[i].correctAnswer === resultFinal[i].answer) {
          choiceTrue = choiceTrue + 1;
          setChoiceTrue(choiceTrue);
        }
      }

      setDataResult(resultFinal);
    };
    fetchResult();
  }, []);

  const choice = ["A.", "B.", "C.", "D."];
  return (
    <>
      <div className="result">
        <h3 style={{ textAlign: "center", margin: "0 20px" }}>
          Làm bài trắc nghiệm theo chủ đề: {dataTopic && dataTopic.name}
        </h3>
        {dataResult.length > 0 ? (
          <div className="container">
            <div style={{ marginBottom: "20px" }}>
              Số câu đúng: <span style={{ color: "green" }}>{choiceTrue}</span>{" "}
              |số câu sai:{" "}
              <span style={{ color: "red" }}>
                {dataResult.length - choiceTrue}
              </span>{" "}
              |Tổng số câu:
              <span style={{ color: "blue" }}>{dataResult.length}</span> |Tỷ lệ
              đúng :
              <span style={{ color: "blue" }}>{`${(
                (choiceTrue / dataResult.length) *
                100
              ).toFixed(1)}%`}</span>
            </div>
            <div className="row">
              <div className="col-12">
                <form className="result__form">
                  {(dataResult || []).map((item, index) => (
                    <div
                      key={index}
                      className="result__item result__item--margin"
                    >
                      <div className="result__main">
                        Câu {index + 1}: {item.question}{" "}
                        {item.answer === item.correctAnswer ? (
                          <span className="result__tag result__tag--true">
                            Đúng
                          </span>
                        ) : (
                          <span className="result__tag result__tag--false">
                            Sai
                          </span>
                        )}
                      </div>
                      {item.answerQuestion.map((subItem, subIndex) => {
                        let hinh = "";
                        let checked = false;
                        if (item.answer === subIndex) {
                          checked = true;
                          hinh += "result__item result__item--selected";
                        }
                        if (item.correctAnswer === subIndex) {
                          hinh += "result__item result__item--result";
                        }

                        return (
                          <div className="result__type" key={subIndex}>
                            <input
                              type="radio"
                              //id cua cau hoi se duoc luu vao name
                              checked={checked}
                              disabled
                              //value se la chi so cua cau tra loi
                            />
                            <label className={hinh}>{choice[subIndex]}</label>
                            <label className={hinh}>{subItem}</label>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </form>
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

export default Result;
