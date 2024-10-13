import {
  Card,
  Col,
  Form,
  Input,
  Row,
  Table,
  Tooltip,
  Button,
  Modal,
} from "antd";
import React, { useEffect, useState } from "react";
import { createTopic, getTopics } from "../../../Services/TopicServices";
import DeleteQuestion from "./DeleteQuestion";
import { PlusOutlined, EyeOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

export default function CreateQuestion() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState([]);
  const token=localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await getTopics(token);
      setData(res.data);
    };

    fetchAPI();
  }, []);
  const columns = [
    {
      title: "Chủ đề",
      dataIndex: "code",
    },
    {
      key: "action",
      title: "Hành Động",
      render: (_, record) => {
        return (
          <>
            <div
              className="action"
              style={{
                display: "flex",
                alignItems: "center",
                
              }}
            >
              <>
                <Tooltip title="Xem sản phẩm">
                  <Link to={`/quiz/${record.id}`}>
                    <Button icon={<EyeOutlined />}></Button>
                  </Link>
                </Tooltip>
                <Tooltip title="Xoa sản phẩm">
                  <div>
                    <DeleteQuestion record={record} />
                  </div>
                </Tooltip>
              </>
            </div>
          </>
        );
      },
    },
  ];

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const [isModel, setModel] = useState(false);
  const handleCancel = () => {
    setModel(false);
  };

  const handleOpen = () => {
    setModel(true);
  };

  

  const handleFinish = async (values) => {
    values.code = values.name.toUpperCase();
    values.thumnail = document.getElementById("thumnail").files[0];
    const res = await createTopic(values,token);
    alert("Tao thanh cong");
    setModel(false);
    navigate(`/admin/create-question/${parseInt(res.data.id)}`);
  };
  return (
    <>
      <h2 className="title" style={{textAlign:"center"}}>Tạo chủ đề</h2>

    
      <Modal
        title="Tạo mới chủ đề"
        width={1000}
        open={isModel}
        footer={null}
        onCancel={handleCancel}
      >
        <Form layout="vertical" onFinish={handleFinish} encType="multipart/form-data">
          <Row gutter={[20]}>
            <Col span={24}>
              <Form.Item label="Tên chủ đề" name="name">
                <Input placeholder="Tên chủ đề..." />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Tải ảnh" name="thumnail">
                <input type="file" id="thumnail" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Button htmlType="submit" size="large" type="primary">
                  Submit
                </Button>
                <Button
                  onClick={handleCancel}
                  size="large"
                  type="primary"
                  danger
                  className="mx-2"
                >
                  Hủy
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
      <Card
        style={{ overflowX: "scroll", height: "100vh" }}
        title="Danh sách các sản phẩm"
        extra={
          <Tooltip title="Tạo mới sản phẩm">
            <Button
              icon={<PlusOutlined />}
              onClick={handleOpen}
              style={{ backgroundColor: "#008000",color:"#fff" }}
            >Tạo mới Topic </Button>
          </Tooltip>
        }
      >
        <Table
          rowKey="id"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </Card>
    </>
  );
}
