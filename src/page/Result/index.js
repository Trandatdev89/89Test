import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get } from "../../utils/requestAPI";
import "./index.scss";
function Result() {
  const params = useParams();
  const [dataResult, setDataResult] = useState([]);
  const [dataTopic, setDataTopic] = useState([]);
  let [choiceTrue, setChoiceTrue] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchResult = async () => {
      const res = await get(`answers/${params.id}`);
      const result = await get(`questions?topicId=${res.topicId}`);
      const topic = await get(`topics/${res.topicId}`);

      let resultFinal = [];
      for (let i = 0; i < result.length; i++) {
        resultFinal.push({
          ...result[i],
          ...res.answers.find((item) => item.questionId === result[i].id),
        });
      }

      setDataTopic(topic);
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

  const handleClick = (id) => {
    navigate(`/lamlai/` + id);
  };
  const choice = ["A.", "B.", "C.", "D."];
  return (
    <>
      <div className="result">
        <h3 style={{ textAlign: "center",marginBottom:"40px"}}>
          Làm bài trắc nghiệm theo chủ đề: {dataTopic && dataTopic.name}
        </h3>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form className="result__form">
                {dataResult.map((item, index) => (
                  <div key={index} className="result__item result__item--margin">
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
                    {item.answers.map((subItem, subIndex) => {
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
                <button onClick={() => handleClick(params.id)} className="result__btn">Làm lại</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <h3>Lam Bai Trac Nghiem Theo Chu De: {dataTopic && dataTopic.name}</h3>
      <div>so cau dung : {choiceTrue} |số câu sai: {dataResult.length-choiceTrue} |Tổng số câu:{dataResult.length} |Tỷ lệ đúng :{`${((choiceTrue/dataResult.length)*100).toFixed(1)}%`}</div>
      <form className="result">
        {dataResult.map((item, index) => (
          <div key={index} className="result__item">
            <div className="result__main">
              Câu {index + 1}: {item.question}{" "}
              {item.answer === item.correctAnswer ? (
                <span className="result__tag result__tag--true">Dung</span>
              ) : (
                <span className="result__tag result__tag--false">Sai</span>
              )}
            </div>
            {item.answers.map((subItem, subIndex) => {
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
                <div className="result__form" key={subIndex}>
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
        <button onClick={()=>handleClick(params.id)}>Lam Lai</button>
      </form> */}
    </>
  );
}

export default Result;
