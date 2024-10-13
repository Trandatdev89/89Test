import React from "react";
import {
  Card,
  Col,
  Form,
  Input,
  Row,
  Table,
  Tooltip,
  Button,
  Select,
  message,
} from "antd";
import { useParams } from "react-router-dom";
import { Option } from "antd/es/mentions";
import { createQuiz } from "../../../Services/QuizServices";

export default function AddQuestion() {
  const params = useParams();
  const [form] = Form.useForm();
  const [messageAPI, contextHolder] = message.useMessage();

  const token=localStorage.getItem("token");

  const handleFinish = async (values, e) => {
    let answerParts = [];
    if (values.question1) answerParts.push(values.question1);
    if (values.question2) answerParts.push(values.question2);
    if (values.question3) answerParts.push(values.question3);
    if (values.question4) answerParts.push(values.question4);
    values.answer = answerParts.join("/");
    const data = {
      question: values.question,
      topicId: params.id,
      correctAnswer: values.correctAnswer,
      answer: values.answer,
    };
    const res = await createQuiz(data,token);
    if (res.code === "OK") {
      form.resetFields();
      messageAPI.open({
        type: "success",
        content: "Tạo mới sản phẩm thành công",
        duration: 3,
      });
    } else {
      messageAPI.open({
        type: "error",
        content: "Tạo mới sản phẩm thất bại!",
        duration: 3,
      });
    }
  };

  const handleClick = () => {
    form.resetFields();
  };

  return (
    <>
      {contextHolder}
      <Form layout="horizontal" onFinish={handleFinish} form={form}>
        <Row gutter={[20]}>
          <Col span={24}>
            <Form.Item label="Tên câu hỏi" name="question">
              <Input placeholder="Tên câu hỏi..." />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="đáp án 1" name="question1">
              <Input placeholder="đáp án 1..." />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="đáp án 2" name="question2">
              <Input placeholder="đáp án 2..." />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="đáp án 3" name="question3">
              <Input placeholder="đáp án 3..." />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="đáp án 4" name="question4">
              <Input placeholder="đáp án 4..." />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Nhập đáp án đúng" name="correctAnswer">
              <Select placeholder="Nhập đáp án đúng">
                <Option value="0">0</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Button htmlType="submit" size="large" type="primary" className="mx-2">
                Submit
              </Button>
              <Button size="large" type="primary" danger onClick={handleClick}>
                Cancel
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}
