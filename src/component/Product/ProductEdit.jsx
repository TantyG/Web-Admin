import { Breadcrumb, Layout, theme } from "antd";
import { Sidebar } from "../../component/Sider/Sider";
import { Navbar } from "../../component/Header/Header";
import { FooterBar } from "../../component/Footer/Footer";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
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
  console.log("null" , title);

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sidebar keyBar={"coupon"} />
        <Layout>
          <Navbar />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb style={{margin: "16px 0"}}/>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <h1>Edit Product</h1>
              <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{
                  maxWidth: 600,
                }}
                //initialValues={""}
              >
                <Form.Item name="id" label="ID">
                  <Input defaultValue={id} disabled="disabled" />
                </Form.Item>
                <Form.Item
                  name="title"
                  label="Title"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    defaultValue={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="category"
                  label="Category"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="brand"
                  label="Brand"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Link rel="stylesheet" to="/product">
                    <Button htmlType="button">Back to Product</Button>
                  </Link>{" "}
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Content>
          <FooterBar />
        </Layout>
      </Layout>
    </>
  );
};
export { ProductEdit };
