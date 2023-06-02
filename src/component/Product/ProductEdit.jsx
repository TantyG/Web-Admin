import { Breadcrumb, Layout, theme } from "antd";
import { Sidebar } from "../../component/Sider/Sider";
import { Navbar } from "../../component/Header/Header";
import { FooterBar } from "../../component/Footer/Footer";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { Label } from "recharts";
const { Content } = Layout;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const ProductEdit = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { proid } = useParams();
  useEffect(() => {
    fetch("https://dummyjson.com/products/" + proid)
      .then((response) => response.json())
      .then((resp) => {
        setId(resp.id);
        setTitle(resp.title);
        setCategory(resp.category);
        setDescription(resp.description);
        setBrand(resp.brand);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [form] = Form.useForm();
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const navigate = useNavigate();
  const onFinish = (e) => {
    const prodata = { id, title, category, description, brand };
    fetch("https://dummyjson.com/products/" + proid, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prodata),
    })
      .then(() => {
        alert("Save success");
        navigate("/product");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  console.log("null", id);

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sidebar keyBar={""} />
        <Layout>
          <Navbar />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb style={{ margin: "16px 0" }} />
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <h1>Edit Product</h1>
              <label>ID: </label>
              <br /><br />
              <Input name="id" value={id} disabled="disabled" />
              <br /><br />
              <label>Title: </label>
              <br /><br />
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
              <br /><br />
              <label>Category: </label>
              <br /><br />
              <Input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <br /><br />
              <label>Description: </label>
              <br /><br />
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <br /><br />
              <label>Brand: </label>
              <br /><br />
              <Input value={brand} onChange={(e) => setBrand(e.target.value)} />
              <br /><br />
              <div>
                <Link rel="stylesheet" to="/product">
                  <Button htmlType="button">Back to Product</Button>
                </Link>{" "}
                <Button type="primary" onClick={() => onFinish()}>
                  Submit
                </Button>
              </div>
            </div>
          </Content>
          <FooterBar />
        </Layout>
      </Layout>
    </>
  );
};
export { ProductEdit };
