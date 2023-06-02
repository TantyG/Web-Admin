import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Breadcrumb, Button, Layout, theme } from "antd";
import { Sidebar } from "../../component/Sider/Sider";
import { Navbar } from "../../component/Header/Header";
import { FooterBar } from "../../component/Footer/Footer";
const { Content } = Layout;

const ProductDetails = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { proid } = useParams();
  const [dataProduct, setDataProduct] = useState({});
  useEffect(() => {
    fetch("https://dummyjson.com/products/" + proid)
      .then((response) => response.json())
      .then((resp) => {
        setDataProduct(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const pro = dataProduct.images || "";
  const image = pro[0];
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
              {dataProduct && (
                <div>
                  <NavLink to="/product">
                    <Button type="primary" ghost>Back</Button>
                  </NavLink>
                  <h1>The Name Product: {dataProduct.title}</h1>
                  <div>
                    <h3>Product Details: {dataProduct.description}</h3>
                    <h5>The Brand Product: {dataProduct.brand}</h5>
                  </div>
                  <img
                    src={image}
                    alt=""
                    style={{
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      width: 500,
                      height: "auto",
                    }}
                  />
                </div>
              )}
            </div>
          </Content>
          <FooterBar />
        </Layout>
      </Layout>
    </>
  );
};
export { ProductDetails };
