import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QuizServices } from "../../components/Services/QuizServices";
import { get } from "../../utils/requestAPI";
import "./index.scss";
import { getCookie } from "../../components/helper/cookie";
import { createAnswer } from "../../components/Services/AnswerServices";
function Quiz() {
  const params = useParams();
  const [dataQuiz, setDataQuiz] = useState([]);
  const [dataTopic, setDataTopic] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchQuiz = async () => {
      const res = await QuizServices(params.id);
      const result = await get(`topics/${params.id}`);
      //lay ra cau hoi va lay ra chu de cau hoi va ve ra giao dien:
      setDataTopic(result);
      setDataQuiz(res);
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
      userId: parseInt(getCookie("id")),
      topicId: parseInt(params.id),
      answers: final,
    };

    const resultFinal = await createAnswer(option);
    if (resultFinal) {
      //lay ra duoc bai lam co id do gui cho result:
      navigate(`/result/${resultFinal.id}`);
    } else {
      alert("Nop bai khong thanh cong");
    }
  };

  const choice = ["A.", "B.", "C.", "D."];
  return (
    <>
      <div className="quiz1">
      <h3 style={{textAlign:"center"}}>Làm bài trắc nghiệm theo chủ đề: {dataTopic && dataTopic.name}</h3>
        <div className="container">
          <div className="row">
            <div className="col-12">
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
