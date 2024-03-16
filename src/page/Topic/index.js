import { useEffect, useState } from "react";
import { get } from "../../utils/requestAPI";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import anh1 from "../../img/lambanner-thiet-ke-banner-html5.jpg";
import anh2 from "../../img/logo-2582747_1280.webp";
import anh3 from "../../img/JavaScript-logo.png";
import anh4 from "../../img/images.png";


function Topic() {
  const [topic, setTopic] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    const fetchAPI = async () => {
      const res = await get("topics");
      
      setTopic(res);
    };
    fetchAPI();
  }, []);
  const handleClick=(id)=>{
      navigate(`/quiz/${id}`)
  }
  const list=[anh1,anh2,anh3,anh4];
  return (
    <>
    <div className="topic">
    <h2 style={{textAlign:"center",marginBottom:"20px"}}>Chủ đề bài thi gồm</h2>
      <div className="container">
        <div className="row">
          {topic.map((item,index) => (  
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12" key={item.id}>
              <div className="topic__box">
                <div className="topic__img">
                  <img src={list[index]} alt="mota"/>
                </div>
                <div className="topic__name">{item.name}</div>
                <button className="topic__btn" onClick={()=>handleClick(item.id)}>Thi ngay</button>
              </div>
          </div>
          ))}
        </div>
      </div>
    </div>
      {/* <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {topic.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button onClick={()=>handleClick(item.id)}>Lam bai</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </>
  );
}

export default Topic;
