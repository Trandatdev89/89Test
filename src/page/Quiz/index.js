import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import { createAnswer } from "../../Services/AnswerServices";
import { getTopicById } from "../../Services/TopicServices";
import { getQuizByTopic } from "../../Services/QuizServices";
import { jwtDecode } from "jwt-decode";
function Quiz() {
  const params = useParams();
  const [dataQuiz, setDataQuiz] = useState([]);
  const [dataTopic, setDataTopic] = useState([]);
  const navigate = useNavigate();
  const token=localStorage.getItem("token");

  useEffect(() => {
    const fetchQuiz = async () => {
      const res = await getQuizByTopic(params.id,token);
      const result = await getTopicById(params.id,token);
      //lay ra cau hoi va lay ra chu de cau hoi va ve ra giao dien:

      setDataTopic(result.data);
      setDataQuiz(res.data);
    };
    fetchQuiz();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    let final = [];
    for (let i = 0; i < e.target.elements.length; i++) {
      if (e.target.elements[i].checked) {
        const name = e.target.elements[i].name;
        const value = e.target.elements[i].value;

        //Tao id cua cau hoi va cau tra loi cu nguoi dung:
        final.push({
          questionId: parseInt(name),
          answer: parseInt(value),
        });
      }
    }
    //tao ra 1 object cac cau cau tra loi cua User:
    let option = {
      userId: parseInt(jwtDecode(token).sub),
      topicId: parseInt(params.id),
      answers: final,
    };

    const resultFinal = await createAnswer(option,token);
    
    if (resultFinal.code=== "OK") {
      //lay ra duoc bai lam co id do gui cho result:
      navigate(`/result/${params.id}`);
    } else {
      alert("Nộp bài không thành công !");
    }
  };

  const choice = ["A.", "B.", "C.", "D."];
  return (
    <>
      <div className="quiz1">
      <h3 style={{textAlign:"center",marginTop:"20px"}}>Làm bài trắc nghiệm theo chủ đề: {dataTopic && dataTopic.name}</h3>
        {dataQuiz.length>0?(

        <div className="container">
          <div className="row">
            <div className="col-12">
              <form className="quiz1" onSubmit={handleSubmit}>
                {dataQuiz.map((item, index) => (
                  <div key={index} className="quiz1__item">
                    <div className="quiz1__main">
                      Câu {index + 1}: {item.question}
                    </div>
                    {item.answerQuestion.map((subItem, subIndex) => (
                      <div className="quiz1__form" key={subIndex}>
                        <input
                          type="radio"
                          name={item.id}
                          //id cua cau hoi se duoc luu vao name
                          className="quiz1__input"
                          value={subIndex}
                          //value se la chi so cua cau tra loi
                          id={`quiz1-${index}-${subIndex}`}
                        />
                        <label htmlFor={`quiz1-${index}-${subIndex}`}>
                          {choice[subIndex]}
                        </label>
                        <label htmlFor={`quiz1-${index}-${subIndex}`}>
                          {subItem}
                        </label>
                      </div>
                    ))}
                  </div>
                ))}
                <button className="quiz1__btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
        ):(
          <div className="loading"></div>
        )}
      </div>
      {/* <h3>Lam Bai Trac Nghiem Theo Chu De: {dataTopic && dataTopic.name}</h3>
      <form className="quiz1" onSubmit={handleSubmit}>
        {dataQuiz.map((item, index) => (
          <div key={index} className="quiz1__item">
            <div className="quiz1__main">
              Câu {index + 1}: {item.question}
            </div>
            {item.answers.map((subItem, subIndex) => (
              <div className="quiz1__form" key={subIndex}>
                <input
                  type="radio"
                  name={item.id}
                  //id cua cau hoi se duoc luu vao name
                  className="quiz1__input"
                  value={subIndex}
                  //value se la chi so cua cau tra loi
                  id={`quiz1-${index}-${subIndex}`}
                />
                <label htmlFor={`quiz1-${index}-${subIndex}`}>
                  {choice[subIndex]}
                </label>
                <label htmlFor={`quiz1-${index}-${subIndex}`}>{subItem}</label>
              </div>
            ))}
          </div>
        ))}
        <button>Submit</button>
      </form> */}
    </>
  );
}

export default Quiz;
